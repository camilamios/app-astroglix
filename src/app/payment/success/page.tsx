'use client'

import { CheckCircle, Star, Home } from 'lucide-react'
import Link from 'next/link'

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-900 dark:to-emerald-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Pagamento Realizado com Sucesso!
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Seu plano foi ativado e você já pode acessar todos os recursos do Astroglix. 
          Prepare-se para descobrir os mistérios do universo!
        </p>
        
        <div className="space-y-4">
          <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg">
            <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
              <Star className="w-5 h-5" />
              <span className="font-semibold">Plano Ativado</span>
            </div>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">
              Você receberá um email de confirmação em breve
            </p>
          </div>
          
          <Link 
            href="/"
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Voltar ao Astroglix
          </Link>
        </div>
        
        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          <p>✨ Bem-vindo à sua jornada de autoconhecimento ✨</p>
        </div>
      </div>
    </div>
  )
}