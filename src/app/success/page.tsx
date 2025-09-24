'use client'

import { useEffect } from 'react'
import { CheckCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PaymentSuccess() {
  useEffect(() => {
    // Opcional: Limpar parâmetros da URL ou fazer outras ações pós-pagamento
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-900 dark:to-emerald-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Pagamento Realizado!
          </h1>
          
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Sua análise numerológica avançada foi desbloqueada com sucesso. 
            Você já pode acessar todos os insights sobre seu destino.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Agora você tem acesso a:
            </h3>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Números Pessoais Atuais
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Talentos Ocultos
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Lições Cármicas
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Desafios e Píncaros
              </li>
            </ul>
          </div>

          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar ao Astroglix
          </Link>
        </div>
      </div>
    </div>
  )
}