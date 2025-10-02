// Configuração da Kirvano
export const KIRVANO_CONFIG = {
  checkoutUrl: 'https://pay.kirvano.com/d7908b12-5e92-44b7-bffc-9e3433b7ff9d',
  currency: 'BRL',
  country: 'BR',
  productName: 'Relatório Místico Completo',
  productDescription: 'Numerologia, Astrologia, Zodíaco Chinês e Astrocartografia',
  price: 29.90
}

// Função para criar URL de pagamento personalizada com dados do cliente
export const createKirvanoPaymentUrl = (
  customerData: { name: string; email: string; cpf?: string }, 
  baseUrl?: string,
  successUrl?: string,
  cancelUrl?: string
) => {
  const checkoutUrl = baseUrl || KIRVANO_CONFIG.checkoutUrl
  const params = new URLSearchParams({
    customer_name: customerData.name,
    customer_email: customerData.email,
    ...(customerData.cpf && { customer_cpf: customerData.cpf }),
    ...(successUrl && { success_url: successUrl }),
    ...(cancelUrl && { cancel_url: cancelUrl })
  })
  
  return `${checkoutUrl}?${params.toString()}`
}