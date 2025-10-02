import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    console.log('=== TESTE DIRETO PUSHINPAY ===')
    
    const pushinpayApiKey = process.env.PUSHINPAY_API_KEY
    const pushinpayApiUrl = process.env.PUSHINPAY_API_URL

    console.log('Configurações:', {
      hasApiKey: !!pushinpayApiKey,
      hasApiUrl: !!pushinpayApiUrl,
      apiUrl: pushinpayApiUrl,
      apiKeyPrefix: pushinpayApiKey ? pushinpayApiKey.substring(0, 15) + '...' : 'N/A'
    })

    if (!pushinpayApiKey || !pushinpayApiUrl) {
      return NextResponse.json({
        success: false,
        error: 'Configurações não encontradas'
      })
    }

    // Dados de teste simples
    const testPayment = {
      amount: 29.00,
      currency: 'BRL',
      description: 'Teste Astroglix',
      reference: `test_${Date.now()}`,
      customer: {
        name: 'Teste Cliente',
        email: 'teste@astroglix.com'
      },
      return_url: `${request.nextUrl.origin}/payment/success`,
      cancel_url: `${request.nextUrl.origin}/payment/cancel`
    }

    console.log('Dados de teste:', testPayment)

    const response = await fetch(`${pushinpayApiUrl}/api/v1/payments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${pushinpayApiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Astroglix-Test/1.0'
      },
      body: JSON.stringify(testPayment),
    })

    console.log('Status:', response.status)
    console.log('Headers:', Object.fromEntries(response.headers.entries()))

    const responseText = await response.text()
    console.log('Resposta raw:', responseText)

    let responseData
    try {
      responseData = JSON.parse(responseText)
    } catch (parseError) {
      console.error('Erro no parse:', parseError)
      return NextResponse.json({
        success: false,
        error: 'Resposta inválida',
        raw: responseText.substring(0, 500)
      })
    }

    console.log('Dados processados:', responseData)

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      data: responseData,
      message: response.ok ? 'Teste bem-sucedido' : 'Erro no teste'
    })

  } catch (error) {
    console.error('Erro no teste:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido'
    })
  }
}