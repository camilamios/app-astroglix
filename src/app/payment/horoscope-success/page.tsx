'use client'

import { useEffect, useState } from 'react'
import { CheckCircle, Star, Crown, Mail, Calendar, Heart } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function HoroscopeSuccessPage() {
  const [subscriptionData, setSubscriptionData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Recuperar dados da assinatura do localStorage
    const customerData = localStorage.getItem('horoscope_subscription_customer')
    if (customerData) {
      try {
        const data = JSON.parse(customerData)
        setSubscriptionData(data)
        
        // Simular ativação da assinatura (em produção, isso seria feito pelo webhook)
        setTimeout(() => {
          activateHoroscopeSubscription(data)
        }, 2000)
        
        // Limpar dados do localStorage após processar
        localStorage.removeItem('horoscope_subscription_customer')
      } catch (error) {
        console.error('Erro ao processar dados da assinatura:', error)
      }
    }
    setLoading(false)
  }, [])

  const activateHoroscopeSubscription = async (customerData: any) => {
    try {
      // Em produção, isso seria feito automaticamente pelo webhook da Kirvano
      // Por enquanto, simular ativação
      await fetch('/api/check-horoscope-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: customerData.email,
          action: 'activate',
          paymentId: `horoscope_sub_${Date.now()}`,
          personalData: customerData
        })
      })
    } catch (error) {
      console.error('Erro ao ativar assinatura:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header de Sucesso */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Assinatura Ativada com Sucesso! 🌟
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
              Bem-vindo(a) ao seu horóscopo diário personalizado!
            </p>
            {subscriptionData && (
              <p className="text-lg text-gray-500 dark:text-gray-500">
                {subscriptionData.name} • {subscriptionData.email}
              </p>
            )}
          </div>

          {/* Detalhes da Assinatura */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 mb-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                Sua Assinatura de Horóscopo Diário
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Agora você receberá seu horóscopo personalizado todos os dias!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-xl p-6 text-center">
                <Mail className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">E-mail Diário</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Receba seu horóscopo personalizado diretamente no seu e-mail
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-xl p-6 text-center">
                <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Todos os Dias</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Horóscopo atualizado diariamente com energias cósmicas do dia
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900 dark:to-red-900 rounded-xl p-6 text-center">
                <Heart className="w-8 h-8 text-pink-600 dark:text-pink-400 mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Personalizado</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Baseado na sua data de nascimento e signo solar
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-green-800 dark:text-green-200 mb-2">
                    Próximos Passos
                  </h3>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Seu primeiro horóscopo será enviado hoje mesmo</li>
                    <li>• Verifique sua caixa de entrada e spam</li>
                    <li>• Adicione nosso e-mail aos seus contatos</li>
                    <li>• Desfrute de insights diários sobre seu futuro</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white mb-4">
                <div className="text-2xl font-bold mb-1">R$ 9,90</div>
                <div className="text-sm text-purple-100">por mês • Cancele quando quiser</div>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Sua assinatura será renovada automaticamente todo mês. 
                Você pode cancelar a qualquer momento através do link no e-mail.
              </p>
            </div>
          </div>

          {/* Ações */}
          <div className="text-center">
            <button
              onClick={() => router.push('/')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-8 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 mr-4"
            >
              Voltar ao Início
            </button>
            
            <button
              onClick={() => {
                router.push('/')
                setTimeout(() => {
                  document.getElementById('horoscope-section')?.scrollIntoView({ behavior: 'smooth' })
                }, 500)
              }}
              className="bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 py-3 px-8 rounded-xl font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 border border-purple-200 dark:border-purple-700"
            >
              Ver Horóscopo de Hoje
            </button>
          </div>

          {/* Mensagem Inspiradora */}
          <div className="mt-12 text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-8">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Sua Jornada Astrológica Começa Agora
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Cada dia traz novas energias cósmicas e oportunidades únicas. 
              Com seu horóscopo personalizado, você estará sempre alinhado(a) com 
              as forças do universo, tomando decisões mais sábias e aproveitando 
              ao máximo cada momento da sua jornada.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
