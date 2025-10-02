import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const customerEmail = searchParams.get('email')
    const customerName = searchParams.get('name')

    console.log('🔍 Buscando último pagamento para:', { customerEmail, customerName })

    // Buscar dados salvos
    const tmpDir = join(process.cwd(), 'tmp')
    
    try {
      const fs = require('fs')
      const files = fs.readdirSync(tmpDir).filter((file: string) => file.endsWith('.json'))
      
      let latestPayment = null
      let latestTimestamp = 0

      // Buscar arquivo mais recente com dados do cliente
      for (const file of files) {
        try {
          const filePath = join(tmpDir, file)
          const fileContent = await readFile(filePath, 'utf-8')
          const data = JSON.parse(fileContent)
          
          // Verificar se é do cliente e se é mais recente
          if (data.customerData?.email === customerEmail && 
              data.customerData?.name === customerName &&
              data.timestamp) {
            
            const timestamp = new Date(data.timestamp).getTime()
            if (timestamp > latestTimestamp) {
              latestTimestamp = timestamp
              latestPayment = data
            }
          }
        } catch (error) {
          console.error('Erro ao ler arquivo:', file, error)
        }
      }

      if (latestPayment) {
        console.log('✅ Último pagamento encontrado:', latestPayment.paymentId)
        
        return NextResponse.json({
          success: true,
          data: latestPayment
        })
      } else {
        console.log('❌ Nenhum pagamento encontrado para:', customerEmail)
        return NextResponse.json({
          success: false,
          error: 'Nenhum pagamento encontrado'
        }, { status: 404 })
      }
      
    } catch (fileError) {
      console.error('❌ Erro ao buscar arquivos:', fileError)
      return NextResponse.json({
        success: false,
        error: 'Erro ao buscar dados de pagamento'
      }, { status: 500 })
    }

  } catch (error) {
    console.error('💥 Erro na API get-latest-payment:', error)
    
    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor'
    }, { status: 500 })
  }
}
