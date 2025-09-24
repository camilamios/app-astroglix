import { loadStripe } from '@stripe/stripe-js'

// Chave pública do Stripe (deve começar com pk_)
const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_live_51SAawUHo3qR4PqFwhgufuuSzxPtmECbPhGcmifUt6SNWC8Wam9JDZIqcae3ebeKGUcFxeNHR96xlKMtoHJWLbcz4009XCRMFVp'

// Verificar se a chave pública é válida
if (!stripePublishableKey.startsWith('pk_')) {
  console.error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY deve começar com pk_ (chave pública)')
}

// Inicializar Stripe
export const stripePromise = loadStripe(stripePublishableKey)

// Configurações de pagamento
export const PAYMENT_CONFIG = {
  amount: 1990, // €19,90 em centavos
  currency: 'eur',
  description: 'Relatório Místico Completo - Astroglix'
}