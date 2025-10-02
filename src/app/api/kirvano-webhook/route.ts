import { NextRequest, NextResponse } from 'next/server'
import { readFile, writeFile, unlink } from 'fs/promises'
import { join } from 'path'

// Importar função para ativar assinatura de horóscopo
import { activateSubscription } from '../check-horoscope-subscription/route'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('🔔 Webhook Kirvano recebido:', body)

    // Verificar se é uma notificação de pagamento aprovado
    if (body.status === 'approved' || body.status === 'paid') {
      const { customer_email, customer_name, order_id, product_name } = body

      console.log('✅ Pagamento aprovado no Kirvano:', { customer_email, customer_name, order_id, product_name })

      // Verificar se é uma assinatura de horóscopo
      if (product_name && (product_name.includes('horoscope') || product_name.includes('Horóscopo') || product_name.includes('assinatura'))) {
        console.log('🌟 Processando assinatura de horóscopo para:', customer_email)
        
        try {
          // Buscar dados do cliente no localStorage simulado
          const customerData = {
            fullName: customer_name,
            email: customer_email,
            birthDate: body.personalData?.birthDate || ''
          }
          
          // Ativar assinatura de horóscopo
          activateSubscription(customer_email, order_id, customerData)
          
          console.log('✅ Assinatura de horóscopo ativada para:', customer_email)
          
          return NextResponse.json({ 
            success: true, 
            message: 'Assinatura de horóscopo ativada com sucesso',
            subscriptionType: 'horoscope'
          })
        } catch (error) {
          console.error('❌ Erro ao ativar assinatura de horóscopo:', error)
          return NextResponse.json({ 
            success: false, 
            message: 'Erro ao ativar assinatura de horóscopo' 
          }, { status: 500 })
        }
      }

      // Processar pagamento de relatório místico completo
      const tmpDir = join(process.cwd(), 'tmp')
      
      try {
        // Listar todos os arquivos temporários
        const fs = require('fs')
        const files = fs.readdirSync(tmpDir).filter((file: string) => file.endsWith('.json'))
        
        let foundData = null
        let foundFile = null

        // Buscar arquivo com dados do cliente
        for (const file of files) {
          try {
            const filePath = join(tmpDir, file)
            const fileContent = await readFile(filePath, 'utf-8')
            const data = JSON.parse(fileContent)
            
            if (data.customerData?.email === customer_email && data.customerData?.name === customer_name) {
              foundData = data
              foundFile = file
              break
            }
          } catch (error) {
            console.error('Erro ao ler arquivo:', file, error)
          }
        }

        if (foundData && foundFile) {
          console.log('📄 Dados encontrados para:', customer_email)
          
          // Marcar como pago
          foundData.paymentStatus = 'approved'
          foundData.kirvanoOrderId = order_id
          foundData.paymentConfirmedAt = new Date().toISOString()
          
          // Salvar dados atualizados
          const filePath = join(tmpDir, foundFile)
          await writeFile(filePath, JSON.stringify(foundData, null, 2))
          
          console.log('✅ Dados atualizados com status de pagamento aprovado')
          
          return NextResponse.json({ 
            success: true, 
            message: 'Pagamento confirmado e dados atualizados',
            paymentId: foundData.paymentId
          })
        } else {
          console.log('⚠️ Dados não encontrados para:', customer_email)
          return NextResponse.json({ 
            success: false, 
            message: 'Dados do cliente não encontrados' 
          }, { status: 404 })
        }
      } catch (error) {
        console.error('❌ Erro ao processar dados:', error)
        return NextResponse.json({ 
          success: false, 
          message: 'Erro ao processar dados do pagamento' 
        }, { status: 500 })
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Webhook recebido mas não processado' 
    })

  } catch (error) {
    console.error('💥 Erro no webhook Kirvano:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Erro interno do servidor' 
    }, { status: 500 })
  }
}

// Para debug - GET endpoint para testar
export async function GET(request: NextRequest) {
  return NextResponse.json({ 
    message: 'Webhook Kirvano ativo',
    timestamp: new Date().toISOString()
  })
}
