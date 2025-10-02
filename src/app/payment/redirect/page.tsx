'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, Loader2 } from 'lucide-react'

export default function PaymentRedirectPage() {
  const searchParams = useSearchParams()
  const [redirecting, setRedirecting] = useState(true)
  const [message, setMessage] = useState('Processando seu pagamento...')

  useEffect(() => {
    const findAndRedirectToLatestPayment = async () => {
      try {
        console.log('🔍 Buscando payment_id no localStorage...')
        
        // Buscar o último pagamento dos dados salvos no localStorage
        const savedPaymentId = localStorage.getItem('last_payment_id')
        const savedCustomerName = localStorage.getItem('last_customer_name')
        const savedCustomerEmail = localStorage.getItem('last_customer_email')
        
        console.log('📦 Dados encontrados:', { savedPaymentId, savedCustomerName, savedCustomerEmail })
        
        if (savedPaymentId) {
          setMessage('Redirecionando para seu relatório...')
          console.log('✅ Redirecionando com payment_id:', savedPaymentId)
          
          // Redirecionar imediatamente - sem delay
          window.location.href = `/success?status=success&payment_id=${savedPaymentId}&auto_generate=true`
          return
        }

        // Se não temos payment_id salvo, redirecionar para página de sucesso geral
        console.log('⚠️ Nenhum payment_id encontrado, redirecionando para sucesso geral')
        setMessage('Redirecionando para seu relatório...')
        
        // Redirecionar imediatamente - sem delay
        window.location.href = '/success?status=success&auto_generate=true'

      } catch (error) {
        console.error('❌ Erro ao buscar último pagamento:', error)
        setMessage('Redirecionando para seu relatório...')
        
        // Mesmo com erro, redirecionar
        window.location.href = '/success?status=success&auto_generate=true'
      }
    }

    // Reduzir delay inicial de 3 segundos para 500ms
    const timer = setTimeout(findAndRedirectToLatestPayment, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl text-center">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
          {redirecting ? (
            <Loader2 className="w-8 h-8 text-green-600 dark:text-green-400 animate-spin" />
          ) : (
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
          )}
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Pagamento Confirmado! 🎉
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {message}
        </p>
        
        <div className="bg-purple-50 dark:bg-purple-900 rounded-xl p-4 mb-6">
          <p className="text-sm text-purple-700 dark:text-purple-300">
            <strong>Status:</strong> Pagamento processado com sucesso via Kirvano
          </p>
          <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">
            Aguarde enquanto preparamos seu relatório místico completo
          </p>
        </div>
        
        <div className="text-xs text-gray-500 dark:text-gray-400">
          <p>✨ Você será redirecionado automaticamente em alguns segundos ✨</p>
        </div>
      </div>
    </div>
  )
}
