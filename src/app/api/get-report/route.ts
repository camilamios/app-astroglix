import { NextRequest, NextResponse } from 'next/server'
import { readFile, unlink } from 'fs/promises'
import { join } from 'path'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const paymentId = searchParams.get('payment_id')

    if (!paymentId) {
      return NextResponse.json({
        success: false,
        error: 'ID de pagamento não fornecido'
      }, { status: 400 })
    }

    console.log('🔍 Buscando dados para paymentId:', paymentId)

    // Buscar dados salvos pelo payment_id exato
    const filePath = join(process.cwd(), 'tmp', `${paymentId}.json`)
    
    try {
      const fileContent = await readFile(filePath, 'utf-8')
      const savedData = JSON.parse(fileContent)
      
      console.log('✅ Dados encontrados para:', paymentId)
      
      // Retornar dados para gerar o relatório
      return NextResponse.json({
        success: true,
        data: savedData
      })
      
    } catch (fileError) {
      console.log('⚠️ Arquivo específico não encontrado, tentando buscar arquivo mais recente...')
      
      // Se não encontrou o arquivo específico, buscar o mais recente na pasta tmp
      try {
        const fs = require('fs')
        const tmpDir = join(process.cwd(), 'tmp')
        const files = fs.readdirSync(tmpDir).filter((file: string) => file.endsWith('.json') && file.startsWith('kirvano_'))
        
        if (files.length === 0) {
          throw new Error('Nenhum arquivo encontrado')
        }
        
        // Ordenar por timestamp (mais recente primeiro)
        files.sort((a: string, b: string) => {
          const timeA = parseInt(a.split('_')[1]) || 0
          const timeB = parseInt(b.split('_')[1]) || 0
          return timeB - timeA
        })
        
        // Pegar o arquivo mais recente
        const latestFile = files[0]
        const latestFilePath = join(tmpDir, latestFile)
        const latestFileContent = await readFile(latestFilePath, 'utf-8')
        const latestData = JSON.parse(latestFileContent)
        
        console.log('✅ Usando arquivo mais recente:', latestFile)
        
        return NextResponse.json({
          success: true,
          data: latestData
        })
        
      } catch (fallbackError) {
        console.error('❌ Erro ao buscar arquivo mais recente:', fallbackError)
        return NextResponse.json({
          success: false,
          error: 'Dados não encontrados ou expirados'
        }, { status: 404 })
      }
    }

  } catch (error) {
    console.error('💥 Erro na API get-report:', error)
    
    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor'
    }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const paymentId = searchParams.get('payment_id')

    if (!paymentId) {
      return NextResponse.json({
        success: false,
        error: 'ID de pagamento não fornecido'
      }, { status: 400 })
    }

    // Limpar dados temporários após gerar o relatório
    const filePath = join(process.cwd(), 'tmp', `${paymentId}.json`)
    
    try {
      await unlink(filePath)
      console.log('🗑️ Dados temporários removidos para:', paymentId)
      
      return NextResponse.json({
        success: true,
        message: 'Dados removidos com sucesso'
      })
      
    } catch (fileError) {
      console.error('⚠️ Erro ao remover arquivo:', fileError)
      return NextResponse.json({
        success: false,
        error: 'Erro ao limpar dados temporários'
      }, { status: 500 })
    }

  } catch (error) {
    console.error('💥 Erro na API delete-report:', error)
    
    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor'
    }, { status: 500 })
  }
}
