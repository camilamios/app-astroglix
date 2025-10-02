import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const pushinpayApiKey = process.env.PUSHINPAY_API_KEY
    const pushinpayApiUrl = process.env.PUSHINPAY_API_URL

    if (!pushinpayApiKey || !pushinpayApiUrl) {
      return NextResponse.json({
        success: false,
        error: 'Configurações do Pushinpay não encontradas',
        config: {
          hasApiKey: !!pushinpayApiKey,
          hasApiUrl: !!pushinpayApiUrl,
          apiUrl: pushinpayApiUrl,
          apiKeyPrefix: pushinpayApiKey ? pushinpayApiKey.substring(0, 10) + '...' : 'N/A'
        }
      })
    }

    // Teste simples de conectividade
    const testEndpoints = [
      '/api/v1/payments',
      '/v1/payments',
      '/api/payments',
      '/payments'
    ]

    const results = []

    for (const endpoint of testEndpoints) {
      try {
        const testUrl = `${pushinpayApiUrl}${endpoint}`
        console.log(`Testando: ${testUrl}`)
        
        const response = await fetch(testUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${pushinpayApiKey}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'User-Agent': 'Astroglix-Test/1.0'
          },
        })

        const responseText = await response.text()
        
        results.push({
          endpoint,
          status: response.status,
          statusText: response.statusText,
          responseLength: responseText.length,
          responsePreview: responseText.substring(0, 200),
          headers: Object.fromEntries(response.headers.entries())
        })

      } catch (error) {
        results.push({
          endpoint,
          error: error instanceof Error ? error.message : 'Erro desconhecido',
          status: 'CONNECTION_ERROR'
        })
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Teste de conectividade concluído',
      config: {
        apiUrl: pushinpayApiUrl,
        apiKeyPrefix: pushinpayApiKey.substring(0, 10) + '...'
      },
      results
    })

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido',
      timestamp: new Date().toISOString()
    })
  }
}