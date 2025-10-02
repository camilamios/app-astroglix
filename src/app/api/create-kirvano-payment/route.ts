import { NextRequest, NextResponse } from 'next/server'
import { createKirvanoPaymentUrl, KIRVANO_CONFIG } from '@/lib/stripe'
import { writeFile, readFile } from 'fs/promises'
import { join } from 'path'

export async function POST(request: NextRequest) {
  try {
    const { planType, amount, currency, customerData, personalData } = await request.json()

    console.log('🔥 Criando pagamento Kirvano:', { planType, amount, currency })

    // Validação dos dados obrigatórios
    if (!customerData.name || !customerData.email) {
      return NextResponse.json({
        success: false,
        error: 'Nome e email são obrigatórios para o pagamento.'
      }, { status: 400 })
    }

    // Validação do valor
    if (amount !== KIRVANO_CONFIG.price) {
      return NextResponse.json({
        success: false,
        error: 'Valor do produto não corresponde ao esperado.'
      }, { status: 400 })
    }

    // Gerar ID único para a sessão de pagamento
    const paymentId = `kirvano_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    // URLs de callback para sucesso e cancelamento
    const successUrl = `${request.nextUrl.origin}/payment/redirect`
    const cancelUrl = `${request.nextUrl.origin}/success?status=canceled&canceled=true`

    // Salvar dados do usuário temporariamente para gerar o relatório após pagamento
    if (personalData) {
      try {
        const dataToSave = {
          paymentId,
          customerData,
          personalData,
          timestamp: new Date().toISOString(),
          planType,
          amount
        }
        
        // Criar diretório de dados temporários se não existir
        const dataDir = join(process.cwd(), 'tmp')
        const filePath = join(dataDir, `${paymentId}.json`)
        
        // Salvar dados em arquivo temporário
        await writeFile(filePath, JSON.stringify(dataToSave, null, 2))
        console.log('✅ Dados salvos temporariamente:', paymentId)
      } catch (saveError) {
        console.error('⚠️ Erro ao salvar dados temporários:', saveError)
        // Continue mesmo se não conseguir salvar
      }
    }

    // Cria a URL de pagamento personalizada com URLs de retorno
    const paymentUrl = createKirvanoPaymentUrl({
      name: customerData.name,
      email: customerData.email,
      cpf: customerData.cpf // Opcional
    }, undefined, successUrl, cancelUrl)

    console.log('✅ URL Kirvano criada:', paymentUrl)

    return NextResponse.json({
      success: true,
      paymentUrl,
      paymentId,
      paymentMethod: 'kirvano',
      data: {
        url: paymentUrl,
        paymentId,
        customerData: {
          name: customerData.name,
          email: customerData.email
        },
        product: {
          name: KIRVANO_CONFIG.productName,
          description: KIRVANO_CONFIG.productDescription,
          price: KIRVANO_CONFIG.price,
          currency: KIRVANO_CONFIG.currency
        }
      }
    })

  } catch (error) {
    console.error('💥 Erro ao criar pagamento Kirvano:', error)
    
    let errorMessage = 'Erro interno do servidor'
    
    if (error instanceof Error) {
      errorMessage = error.message
    }

    return NextResponse.json({
      success: false,
      error: errorMessage
    }, { status: 500 })
  }
}
