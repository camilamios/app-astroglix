import { NextRequest, NextResponse } from 'next/server'

// Simulação de banco de dados de assinaturas (em produção, usar banco real)
const subscriptions = new Map<string, {
  id: string
  customerEmail: string
  customerName: string
  status: 'active' | 'cancelled' | 'expired'
  startDate: string
  nextBillingDate: string
  personalData: any
}>()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({
        success: false,
        error: 'E-mail é obrigatório'
      }, { status: 400 })
    }

    // Em produção, verificar no banco de dados real
    // Por enquanto, simular verificação
    const subscription = subscriptions.get(email)
    
    if (!subscription) {
      return NextResponse.json({
        success: true,
        isSubscribed: false,
        subscription: null
      })
    }

    // Verificar se a assinatura está ativa
    const now = new Date()
    const nextBillingDate = new Date(subscription.nextBillingDate)
    const isActive = subscription.status === 'active' && nextBillingDate > now

    return NextResponse.json({
      success: true,
      isSubscribed: isActive,
      subscription: {
        id: subscription.id,
        status: subscription.status,
        startDate: subscription.startDate,
        nextBillingDate: subscription.nextBillingDate,
        customerName: subscription.customerName
      }
    })

  } catch (error) {
    console.error('❌ Erro ao verificar assinatura:', error)
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Erro interno do servidor'
    }, { status: 500 })
  }
}

// Função para simular ativação de assinatura (chamada pelo webhook)
export function activateSubscription(email: string, paymentId: string, personalData: any) {
  const subscriptionId = `horoscope_sub_${Date.now()}`
  const startDate = new Date()
  const nextBillingDate = new Date()
  nextBillingDate.setMonth(nextBillingDate.getMonth() + 1)

  subscriptions.set(email, {
    id: subscriptionId,
    customerEmail: email,
    customerName: personalData.fullName,
    status: 'active',
    startDate: startDate.toISOString(),
    nextBillingDate: nextBillingDate.toISOString(),
    personalData
  })

  console.log('✅ Assinatura de horóscopo ativada:', {
    subscriptionId,
    email,
    startDate: startDate.toISOString(),
    nextBillingDate: nextBillingDate.toISOString()
  })
}
