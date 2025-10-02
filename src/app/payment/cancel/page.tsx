'use client'

import { XCircle, ArrowLeft, CreditCard } from 'lucide-react'
import Link from 'next/link'

export default function PaymentCancel() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 dark:from-gray-900 dark:via-red-900 dark:to-pink-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <XCircle className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Pagamento Cancelado
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Não se preocupe! Você pode tentar novamente a qualquer momento. 
          Seus dados foram salvos e você pode continuar de onde parou.
        </p>
        
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
            <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
              <CreditCard className="w-5 h-5" />
              <span className="font-semibold">Nenhuma cobrança foi realizada</span>
            </div>
            <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
              Você pode tentar outro método de pagamento
            </p>
          </div>
          
          <div className="space-y-3">
            <Link 
              href="/"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <CreditCard className="w-5 h-5" />
              Tentar Novamente
            </Link>
            
            <Link 
              href="/"
              className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 px-6 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar ao Início
            </Link>
          </div>
        </div>
        
        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          <p>💫 Estamos aqui quando você estiver pronto ✨</p>
        </div>
      </div>
    </div>
  )
}