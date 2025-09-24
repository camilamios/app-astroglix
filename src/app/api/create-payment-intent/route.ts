import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// Inicializar Stripe com a chave secreta
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
})

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = 'eur' } = await request.json()

    // Validar se a chave do Stripe está configurada
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('STRIPE_SECRET_KEY não configurada')
      return NextResponse.json(
        { error: 'Configuração de pagamento não encontrada' },
        { status: 500 }
      )
    }

    // Verificar se a chave é realmente uma chave secreta
    if (!process.env.STRIPE_SECRET_KEY.startsWith('sk_')) {
      console.error('STRIPE_SECRET_KEY deve começar com sk_ (chave secreta)')
      return NextResponse.json(
        { error: 'Chave do Stripe inválida - deve ser uma chave secreta (sk_)' },
        { status: 500 }
      )
    }

    // Validar parâmetros
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Valor inválido' },
        { status: 400 }
      )
    }

    // Criar PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount), // Garantir que seja um número inteiro
      currency: currency,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        service: 'Relatório Místico Completo',
        platform: 'Astroglix'
      }
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error) {
    console.error('Erro ao criar PaymentIntent:', error)
    
    // Retornar erro mais específico baseado no tipo de erro
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: `Erro do Stripe: ${error.message}` },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}