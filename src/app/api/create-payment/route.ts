import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// Inicializa o Stripe com a chave secreta
// NOTA: Em produção, a chave secreta deve vir de variável de ambiente
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
})

export async function POST(request: NextRequest) {
  try {
    const { planType, amount, currency, customerData } = await request.json()

    console.log('🔥 Criando sessão de pagamento Stripe:', { planType, amount, currency })

    // Verifica se a chave secreta está configurada
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('❌ STRIPE_SECRET_KEY não configurada')
      return NextResponse.json({
        success: false,
        error: 'Configuração do Stripe incompleta. A chave secreta não foi encontrada.'
      }, { status: 500 })
    }

    // Cria a sessão de checkout do Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: currency.toLowerCase(),
            product_data: {
              name: 'Relatório Místico Completo',
              description: 'Numerologia, Astrologia, Zodíaco Chinês e Astrocartografia',
              images: ['https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop'],
            },
            unit_amount: Math.round(amount * 100), // Stripe usa centavos
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/?canceled=true`,
      customer_email: customerData.email,
      metadata: {
        planType,
        customerName: customerData.name,
      },
      // Configurações específicas para o Brasil
      payment_intent_data: {
        metadata: {
          planType,
          customerName: customerData.name,
        },
      },
    })

    console.log('✅ Sessão Stripe criada:', session.id)

    return NextResponse.json({
      success: true,
      sessionId: session.id,
      paymentUrl: session.url,
      data: {
        sessionId: session.id,
        url: session.url,
      }
    })

  } catch (error) {
    console.error('💥 Erro ao criar sessão Stripe:', error)
    
    let errorMessage = 'Erro interno do servidor'
    
    if (error instanceof Stripe.errors.StripeError) {
      errorMessage = `Erro do Stripe: ${error.message}`
    } else if (error instanceof Error) {
      errorMessage = error.message
    }

    return NextResponse.json({
      success: false,
      error: errorMessage
    }, { status: 500 })
  }
}