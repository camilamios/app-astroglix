'use client'

import { useState, useEffect } from 'react'
import { Calculator, Star, Sparkles, TrendingUp, Calendar, AlertCircle, Target, Award, Heart, Shield, Gem, Lightbulb, Crown, CheckCircle, CreditCard, Lock } from 'lucide-react'
import { getNumberInterpretation } from '@/lib/numerology-interpretations'
import { getSignInterpretation } from '@/lib/astrology-interpretations'
import { 
  getPersonalYearMeaning, 
  getLifeCycleMeaning, 
  getChallengeMeaning, 
  getHiddenTalentMeaning,
  getPersonalMonthMeaning,
  getPersonalDayMeaning
} from '@/lib/numerology-contexts'
import { getCurrentChineseYear, getYearImpact, getRelationshipColor } from '@/lib/chinese-zodiac-year'
import AstroMap from './AstroMap'

interface DetailedReportProps {
  reportData: {
    personalData: {
      fullName: string
      email?: string
      birthDate: string
      birthTime?: string
      birthPlace: string
    }
    numerology: any
    astrology: any
    chineseZodiac: any
    astrocartography: any
  }
}

// Componente inline de horóscopo
function HoroscopeInline({ personalData }: { personalData: { fullName: string; email?: string; birthDate: string } }) {
  const [horoscope, setHoroscope] = useState<any>(null)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual'>('annual')

  const getSunSign = (birthDate: string): string => {
    const date = new Date(birthDate)
    const month = date.getMonth() + 1
    const day = date.getDate()

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Áries'
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Touro'
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gêmeos'
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Câncer'
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leão'
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgem'
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra'
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Escorpião'
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagitário'
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricórnio'
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquário'
    return 'Peixes'
  }

  const getLuckyColorForSign = (sign: string): string => {
    const signColors: {[key: string]: string} = {
      'Áries': 'Vermelho',
      'Touro': 'Verde',
      'Gêmeos': 'Amarelo',
      'Câncer': 'Prateado',
      'Leão': 'Dourado',
      'Virgem': 'Marrom',
      'Libra': 'Rosa',
      'Escorpião': 'Bordô',
      'Sagitário': 'Roxo',
      'Capricórnio': 'Preto',
      'Aquário': 'Azul Turquesa',
      'Peixes': 'Azul Marinho'
    }
    return signColors[sign] || 'Dourado'
  }

  const generateHoroscope = (birthDate: string) => {
    const sign = getSunSign(birthDate)
    const today = new Date().toLocaleDateString('pt-BR')
    
    const predictions: {[key: string]: any} = {
      'Áries': {
        general: 'O dia promete energia renovada e novas oportunidades se apresentarão em sua jornada.',
        love: 'Romance no ar! Seja mais expressivo(a) com seus sentimentos.',
        career: 'Oportunidade de liderança se apresenta - aproveite!',
        health: 'Energia física em alta - ideal para atividades esportivas.'
      },
      'Touro': {
        general: 'Estabilidade e crescimento material estão em seu favor hoje.',
        love: 'Relacionamentos sólidos se fortalecerão ainda mais.',
        career: 'Projetos financeiros trarão retorno positivo.',
        health: 'Foque em atividades relaxantes para equilibrar energia.'
      },
      'Gêmeos': {
        general: 'Comunicação será sua maior aliada para resolver questões.',
        love: 'Conversas profundas fortalecerão relacionamentos.',
        career: 'Apresentações e reuniões serão bem-sucedidas.',
        health: 'Atividades mentais estimulantes farão bem à saúde.'
      },
      'Câncer': {
        general: 'Intuição forte guiará suas decisões importantes.',
        love: 'Momento emocional intenso e transformador.',
        career: 'Trabalho relacionado à família ou casa será favorecido.',
        health: 'Cuidado com a saúde emocional - pratique autocuidado.'
      },
      'Leão': {
        general: 'Dia de brilhar e receber reconhecimento merecido.',
        love: 'Romance intenso e apaixonado está no ar.',
        career: 'Liderança e criatividade serão valorizadas.',
        health: 'Energia vital em alta - aproveite para atividades físicas.'
      },
      'Virgem': {
        general: 'Organização e eficiência trarão resultados excelentes.',
        love: 'Comunicação clara resolverá questões relacionais.',
        career: 'Trabalho detalhado será reconhecido e valorizado.',
        health: 'Foque em hábitos saudáveis e rotinas equilibradas.'
      },
      'Libra': {
        general: 'Harmonia e equilíbrio guiarão suas decisões hoje.',
        love: 'Momento de fortalecer laços afetivos com diplomacia.',
        career: 'Parcerias profissionais trarão sucesso.',
        health: 'Equilíbrio emocional reflete em bem-estar físico.'
      },
      'Escorpião': {
        general: 'Transformação profunda está em andamento.',
        love: 'Intensidade emocional marcará seus relacionamentos.',
        career: 'Momento de mudanças importantes na carreira.',
        health: 'Sua energia transformadora está em destaque.'
      },
      'Sagitário': {
        general: 'Aventura e exploração trarão novas perspectivas.',
        love: 'Relacionamentos se expandem através de novas experiências.',
        career: 'Oportunidades de crescimento e viagens profissionais.',
        health: 'Atividades ao ar livre revitalizarão sua energia.'
      },
      'Capricórnio': {
        general: 'Disciplina e determinação trarão conquistas sólidas.',
        love: 'Relacionamentos maduros e estáveis serão favorecidos.',
        career: 'Progresso constante em projetos importantes.',
        health: 'Mantenha rotina saudável para resultados duradouros.'
      },
      'Aquário': {
        general: 'Inovação e originalidade marcarão seu dia.',
        love: 'Conexões únicas e diferentes atrairão sua atenção.',
        career: 'Networking e amizades trarão oportunidades.',
        health: 'Sua mente inovadora precisa de atividades estimulantes.'
      },
      'Peixes': {
        general: 'Intuição e sensibilidade estarão em alta.',
        love: 'Momento de conexão emocional profunda.',
        career: 'Criatividade e arte trarão reconhecimento.',
        health: 'Atividades espirituais equilibrarão sua energia.'
      }
    }

    const signData = predictions[sign] || predictions['Áries']
    
    return {
      sign,
      date: today,
      generalPrediction: signData.general,
      love: signData.love,
      career: signData.career,
      health: signData.health,
      luckyNumbers: [Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1],
      luckyColor: getLuckyColorForSign(sign),
      advice: 'Confie em sua intuição e aproveite as oportunidades que se apresentam.'
    }
  }

  useEffect(() => {
    if (personalData.birthDate) {
      const horoscopeData = generateHoroscope(personalData.birthDate)
      setHoroscope(horoscopeData)
    }

    // Verificar se tem assinatura ativa
    if (personalData.email) {
      fetch('/api/check-horoscope-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: personalData.email })
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setIsSubscribed(data.isSubscribed)
          }
        })
        .catch(() => {})
    }
  }, [personalData.birthDate, personalData.email])

  const handleSubscribe = (plan: 'monthly' | 'annual') => {
    localStorage.setItem('horoscope_subscription_customer', JSON.stringify({
      name: personalData.fullName,
      email: personalData.email,
      birthDate: personalData.birthDate,
      plan: plan
    }))
    // URLs dos planos configurados no Kirvano
    const paymentUrl = plan === 'monthly' 
      ? 'https://pay.kirvano.com/0a482613-b924-4722-ac74-9b2481e3a167' // Plano mensal R$ 9,90/mês
      : 'https://pay.kirvano.com/c2105980-0b73-4c27-8aef-7e871b829c9f' // Plano anual R$ 79,90/ano
    
    window.location.href = paymentUrl
  }

  if (!horoscope) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600 mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">Gerando seu horóscopo...</p>
      </div>
    )
  }

  return (
    <div>
      {/* Título da Seção */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          5. Horóscopo De Hoje para {horoscope.sign}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
          Suas energias cósmicas e previsões para hoje
        </p>
      </div>

      {/* Header do Horóscopo */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          Horóscopo do Dia -  {horoscope.date}
        </h3>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 inline-block">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            ✨ Suas energias cósmicas para hoje ✨
          </p>
        </div>
      </div>

      {/* Horóscopo Detalhado */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Previsão Geral */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">Previsão Geral</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {horoscope.generalPrediction}
          </p>
        </div>

        {/* Amor */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">Amor</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {horoscope.love}
          </p>
        </div>

        {/* Carreira */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">Carreira</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {horoscope.career}
          </p>
        </div>

        {/* Saúde */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">Saúde</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {horoscope.health}
          </p>
        </div>

        {/* Números da Sorte */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
              <Gem className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">Números da Sorte</h3>
          </div>
          <div className="flex gap-2">
            {horoscope.luckyNumbers.map((number: number, index: number) => (
              <span key={index} className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {number}
              </span>
            ))}
          </div>
        </div>

        {/* Conselho do Dia */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">Conselho do Dia</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {horoscope.advice} Sua cor ideal para hoje é <span className="font-semibold text-gray-800 dark:text-gray-200">{horoscope.luckyColor}</span>.
          </p>
        </div>
      </div>

      {/* Seção de Assinatura */}
      {!isSubscribed && (
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 text-white">
          <div className="text-center mb-6">
            {/* <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Crown className="w-6 h-6 text-white" />
            </div> */}
            <h3 className="text-2xl font-bold mb-2">
              Receba Seu Horóscopo Diário
            </h3>
            <p className="text-purple-100 mb-4">
              Assine agora e receba todos os dias o horóscopo para seu signo diretamente no seu whatsapp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span className="text-sm">Horóscopo personalizado diário</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span className="text-sm">Enviado diretamente no seu whatsapp</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span className="text-sm">Cancele quando quiser</span>
            </div>
          </div>

          {/* Cards de Planos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Plano Mensal */}
            <button
              onClick={() => setSelectedPlan('monthly')}
              className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-300 transform hover:scale-105 ${
                selectedPlan === 'monthly' 
                  ? 'ring-4 ring-yellow-400 ring-opacity-50' 
                  : 'opacity-90 hover:opacity-100'
              }`}
            >
              <div className="text-center">
                <div className="text-gray-600 font-semibold mb-2">Plano Mensal</div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  R$ 9,90
                </div>
                <div className="text-sm text-gray-600 font-medium mb-4">por mês</div>
                <div className="text-xs text-gray-500">
                  Renovação automática mensal
                </div>
              </div>
            </button>

            {/* Plano Anual - RECOMENDADO */}
            <button
              onClick={() => setSelectedPlan('annual')}
              className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-300 transform hover:scale-105 relative ${
                selectedPlan === 'annual' 
                  ? 'ring-4 ring-yellow-400 ring-opacity-50' 
                  : 'opacity-90 hover:opacity-100'
              }`}
            >
              {/* Tag de Desconto */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12 animate-pulse">
                30% OFF
              </div>
              
              <div className="text-center">
                <div className="text-gray-600 font-semibold mb-2">Plano Anual</div>
                <div className="text-4xl font-bold mb-1 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  R$ 79,90
                </div>
                <div className="text-xs text-gray-400 line-through mb-2">R$ 118,80/ano</div>
                <div className="text-sm text-gray-600 font-medium mb-4">por ano</div>
                <div className="text-xs text-green-600 font-semibold mb-2">
                Economize o equivalente a 4 meses grátis no plano anual
                </div>
                {/* <div className="text-xs text-gray-500">
                Renovação automática anual
                </div> */}
              </div>
            </button>
          </div>
          
          <div className="text-center">
            <button
              onClick={() => handleSubscribe(selectedPlan)}
              className="bg-white text-purple-600 py-3 px-8 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 w-full md:w-auto"
            >
              <div className="flex items-center justify-center gap-2">
                <CreditCard className="w-5 h-5" />
                <span>
                  {selectedPlan === 'monthly' ? 'Assinar Plano Mensal' : 'Assinar Plano Anual'}
                </span>
              </div>
            </button>
            
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-purple-100">
              <Lock className="w-4 h-4" />
              <span>Pagamento 100% seguro</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function DetailedReport({ reportData }: DetailedReportProps) {
  const { numerology, astrology, chineseZodiac, astrocartography } = reportData

  // Interpretações de numerologia
  const lifePathInterp = getNumberInterpretation(numerology.lifePathNumber)
  const destinyInterp = getNumberInterpretation(numerology.destinyNumber)
  const soulInterp = getNumberInterpretation(numerology.soulNumber)
  const personalityInterp = getNumberInterpretation(numerology.personalityNumber)

  // Interpretações de astrologia
  const sunSignInterp = getSignInterpretation(astrology.sunSign)
  const moonSignInterp = getSignInterpretation(astrology.moonSign)
  const ascendantInterp = getSignInterpretation(astrology.ascendant)

  // Ano atual do zodíaco chinês e seu impacto
  const currentYear = getCurrentChineseYear()
  const yearImpact = getYearImpact(chineseZodiac.animal, currentYear.animal)
  const relationshipColor = getRelationshipColor(yearImpact.relationship)

  return (
    <div className="space-y-8">
      {/* ========== SEÇÃO 1: NUMEROLOGIA COMPLETA ========== */}
      <div id="numerologia" className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-3xl p-6 sm:p-10 shadow-2xl scroll-mt-24">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Calculator className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3">
            1. Numerologia Pessoal Completa
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Seus números sagrados revelam o mapa completo de sua alma e missão nesta vida
          </p>
        </div>

        {/* NÚMERO DO CAMINHO DA VIDA */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-white">{numerology.lifePathNumber}</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Caminho da Vida: {lifePathInterp.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Sua missão principal nesta encarnação</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="flex items-center gap-2 text-lg font-semibold text-green-600 dark:text-green-400 mb-3">
                <Sparkles className="w-5 h-5" />
                ✨ Pontos Positivos
              </h4>
              <ul className="space-y-2 ml-7">
                {(lifePathInterp.positiveTraits || []).map((trait, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    {trait}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-lg font-semibold text-orange-600 dark:text-orange-400 mb-3">
                <AlertCircle className="w-5 h-5" />
                ⚠️ Pontos de Atenção
              </h4>
              <ul className="space-y-2 ml-7">
                {(lifePathInterp.negativeTraits || []).map((trait, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {trait}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                <Target className="w-5 h-5" />
                🎯 O Que Fazer
              </h4>
              <ul className="space-y-2 ml-7">
                {(lifePathInterp.guidance || []).map((guide, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {guide}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">💼 Carreira</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{lifePathInterp.career}</p>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                <p className="font-semibold text-pink-700 dark:text-pink-300 mb-2">❤️ Relacionamentos</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{lifePathInterp.relationships}</p>
              </div>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4 mt-4">
              <p className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">🙏 Jornada Espiritual</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">{lifePathInterp.spirituality}</p>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-800/50 dark:to-pink-800/50 rounded-xl p-5 mt-4 border-l-4 border-purple-500">
              <p className="font-semibold text-purple-800 dark:text-purple-200 mb-2">📖 Lição de Vida</p>
              <p className="text-gray-800 dark:text-gray-200 italic">{lifePathInterp.lifeLesson}</p>
            </div>
          </div>
        </div>

        {/* NÚMERO DO DESTINO */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-white">{numerology.destinyNumber}</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Número do Destino: {destinyInterp.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Seu potencial máximo a ser alcançado</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
              <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">✨ Dons e Talentos</p>
              <ul className="space-y-1">
                {(destinyInterp.positiveTraits || []).slice(0, 4).map((trait, idx) => (
                  <li key={idx} className="text-sm text-gray-700 dark:text-gray-300">• {trait}</li>
                ))}
              </ul>
            </div>
            <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4">
              <p className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">🎯 Caminho Para Realização</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">{destinyInterp.guidance?.[0] || 'Busque seu propósito'}</p>
            </div>
          </div>
        </div>

        {/* NÚMERO DA ALMA */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-white">{numerology.soulNumber}</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Número da Alma: {soulInterp.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Suas motivações mais profundas</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-4">
              <p className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">💫 O Que Sua Alma Deseja</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">{soulInterp.spirituality}</p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
              <p className="font-semibold text-orange-700 dark:text-orange-300 mb-2">🔥 Paixões Internas</p>
              <ul className="space-y-1">
                {(soulInterp.positiveTraits || []).slice(0, 3).map((trait, idx) => (
                  <li key={idx} className="text-sm text-gray-700 dark:text-gray-300">• {trait}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* NÚMERO DA PERSONALIDADE */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-white">{numerology.personalityNumber}</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Número da Personalidade: {personalityInterp.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Como você aparece para o mundo</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
              <p className="font-semibold text-green-700 dark:text-green-300 mb-2">👥 Primeira Impressão</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {(personalityInterp.positiveTraits || []).slice(0, 3).join(', ') || 'Personalidade marcante'}
              </p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4">
              <p className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">🎭 Dica para Autenticidade</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">{personalityInterp.guidance?.[0] || 'Seja autêntico'}</p>
            </div>
          </div>
        </div>

        {/* NÚMEROS ADICIONAIS */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Ciclos de Vida */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h4 className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              <TrendingUp className="w-6 h-6 text-purple-500" />
              Ciclos de Vida
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Sua vida é dividida em 3 grandes ciclos, cada um com energia e lições específicas:
            </p>
            <div className="space-y-4">
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4 border-l-4 border-purple-500">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-purple-700 dark:text-purple-300">1º Ciclo - Juventude (0-28 anos)</p>
                  <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">{numerology.lifeCycles.first}</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {getLifeCycleMeaning(numerology.lifeCycles.first)}
                </p>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900/30 rounded-lg p-4 border-l-4 border-pink-500">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-pink-700 dark:text-pink-300">2º Ciclo - Maturidade (28-56 anos)</p>
                  <span className="text-3xl font-bold text-pink-600 dark:text-pink-400">{numerology.lifeCycles.second}</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {getLifeCycleMeaning(numerology.lifeCycles.second)}
                </p>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4 border-l-4 border-indigo-500">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-indigo-700 dark:text-indigo-300">3º Ciclo - Sabedoria (56+ anos)</p>
                  <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{numerology.lifeCycles.third}</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {getLifeCycleMeaning(numerology.lifeCycles.third)}
                </p>
              </div>
            </div>
          </div>

          {/* Ano/Mês/Dia Pessoal */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h4 className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              <Calendar className="w-6 h-6 text-blue-500" />
              Energias Atuais
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Cada período da sua vida tem uma energia numerológica específica que influencia eventos e oportunidades:
            </p>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-bold text-blue-700 dark:text-blue-300">Seu Ano Pessoal</p>
                  <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">{numerology.personalYear}</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2 font-semibold">
                  O QUE ESPERAR ESTE ANO:
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {getPersonalYearMeaning(numerology.personalYear)}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-lg p-3 border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-700 dark:text-cyan-300 text-sm mb-2">Mês Pessoal: {numerology.personalMonth}</p>
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    {getPersonalMonthMeaning(numerology.personalMonth)}
                  </p>
                </div>
                <div className="bg-teal-50 dark:bg-teal-900/30 rounded-lg p-3 border-l-4 border-teal-500">
                  <p className="font-semibold text-teal-700 dark:text-teal-300 text-sm mb-2">Dia Pessoal: {numerology.personalDay}</p>
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    {getPersonalDayMeaning(numerology.personalDay)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desafios e Talentos Ocultos */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h4 className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              <Award className="w-6 h-6 text-yellow-500" />
              Talentos Ocultos
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Números ausentes ou raros em seu nome revelam potenciais a serem desenvolvidos:
            </p>
            <div className="space-y-3">
              {numerology.hiddenTalents?.map((talent: number, idx: number) => (
                <div key={idx} className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg p-4 border-l-4 border-yellow-500">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{talent}</span>
                    <span className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">Talento Oculto</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {getHiddenTalentMeaning(talent)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h4 className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              <AlertCircle className="w-6 h-6 text-red-500" />
              Desafios Principais
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Obstáculos recorrentes em sua vida que, quando superados, trazem grande crescimento:
            </p>
            <div className="space-y-3">
              {numerology.challenges?.map((challenge: number, idx: number) => (
                <div key={idx} className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 rounded-lg p-4 border-l-4 border-red-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-red-700 dark:text-red-300">Desafio {idx + 1}</span>
                    <span className="text-3xl font-bold text-red-600 dark:text-red-400">{challenge}</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {getChallengeMeaning(challenge)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dívidas Cármicas */}
        {numerology.karmicDebts && Array.isArray(numerology.karmicDebts) && numerology.karmicDebts.length > 0 && (
          <div className="bg-gradient-to-r from-purple-100 to-red-100 dark:from-purple-900/50 dark:to-red-900/50 rounded-xl p-6 mt-6 border-2 border-purple-300 dark:border-purple-700">
            <h4 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-3">🔮 Dívidas Cármicas Detectadas</h4>
            <div className="flex gap-3 mb-3">
              {(numerology.karmicDebts || []).map((debt: number, idx: number) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-purple-600 dark:text-purple-400">{debt}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Você possui números de dívida cármica. Estes indicam lições não completamente aprendidas em vidas passadas que você veio resolver nesta encarnação. 
              São oportunidades poderosas de crescimento espiritual acelerado.
            </p>
          </div>
        )}
      </div>

      {/* ========== SEÇÃO 2: ASTROLOGIA OCIDENTAL ========== */}
      <div id="astrologia" className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-3xl p-6 sm:p-10 shadow-2xl scroll-mt-24">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Star className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3">
            2. Astrologia Ocidental Completa
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Seu mapa celeste revela como os astros influenciam cada área da sua vida
          </p>
        </div>

        {/* SIGNO SOLAR */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Sol em {sunSignInterp.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {sunSignInterp.element} • {sunSignInterp.quality} • Regido por {sunSignInterp.rulingPlanet}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-5">
              <p className="font-semibold text-orange-700 dark:text-orange-300 mb-2">☀️ Sua Essência Solar</p>
              <p className="text-gray-700 dark:text-gray-300">{sunSignInterp.inSun}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <p className="font-semibold text-green-700 dark:text-green-300 mb-2">✨ Qualidades Positivas</p>
                <ul className="space-y-1">
                  {(sunSignInterp.positiveTraits || []).map((trait, idx) => (
                    <li key={idx} className="text-sm text-gray-700 dark:text-gray-300">• {trait}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                <p className="font-semibold text-orange-700 dark:text-orange-300 mb-2">⚠️ Desafios</p>
                <ul className="space-y-1">
                  {(sunSignInterp.negativeTraits || []).map((trait, idx) => (
                    <li key={idx} className="text-sm text-gray-700 dark:text-gray-300">• {trait}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2 text-sm">💼 Carreira</p>
                <p className="text-xs text-gray-700 dark:text-gray-300">{sunSignInterp.career}</p>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                <p className="font-semibold text-pink-700 dark:text-pink-300 mb-2 text-sm">❤️ Amor</p>
                <p className="text-xs text-gray-700 dark:text-gray-300">{sunSignInterp.love}</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                <p className="font-semibold text-red-700 dark:text-red-300 mb-2 text-sm">🏥 Saúde</p>
                <p className="text-xs text-gray-700 dark:text-gray-300">{sunSignInterp.health}</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2 text-sm">🙏 Espiritual</p>
                <p className="text-xs text-gray-700 dark:text-gray-300">{sunSignInterp.spirituality}</p>
              </div>
            </div>
          </div>
        </div>

        {/* SIGNO LUNAR */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-3xl">🌙</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Lua em {moonSignInterp.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Suas emoções e necessidades internas</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-5">
              <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">🌙 Mundo Emocional</p>
              <p className="text-gray-700 dark:text-gray-300">{moonSignInterp.inMoon}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                <p className="font-semibold text-pink-700 dark:text-pink-300 mb-2">💝 Como Você Se Nutre</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{moonSignInterp.positiveTraits?.slice(0, 3).join(', ') || 'Sensibilidade emocional'}</p>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                <p className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">🛡️ Proteções Emocionais</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{moonSignInterp.negativeTraits?.[0] ? `Evite: ${moonSignInterp.negativeTraits[0]}` : 'Cuide de suas emoções'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ASCENDENTE */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
              <span className="text-3xl">🎭</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Ascendente em {ascendantInterp.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Sua máscara social e primeira impressão</p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-5">
            <p className="font-semibold text-green-700 dark:text-green-300 mb-2">🎭 Como Outros Te Veem</p>
            <p className="text-gray-700 dark:text-gray-300">{ascendantInterp.inAscendant}</p>
          </div>
        </div>

        {/* Aspectos e Trânsitos */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">🌟 Aspectos Importantes</h4>
            <ul className="space-y-3">
              {astrology.aspects?.slice(0, 4).map((aspect: string, idx: number) => (
                <li key={idx} className="flex items-start bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3">
                  <span className="text-blue-500 mr-2">★</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{aspect}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">🔄 Trânsitos Atuais</h4>
            <ul className="space-y-3">
              {astrology.currentTransits?.slice(0, 4).map((transit: string, idx: number) => (
                <li key={idx} className="flex items-start bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-3">
                  <span className="text-indigo-500 mr-2">⟳</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{transit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ========== SEÇÃO 3: ASTROLOGIA CHINESA ========== */}
      <div id="zodiaco-chines" className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900 dark:to-orange-900 rounded-3xl p-6 sm:p-10 shadow-2xl scroll-mt-24">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-4xl">
            🐉
          </div>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3">
            3. Astrologia Chinesa
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A sabedoria milenar do Oriente sobre sua personalidade e destino
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-6">
            <h3 className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">
              {chineseZodiac.animal}
            </h3>
            <p className="text-2xl text-orange-600 dark:text-orange-400 mb-2">
              Elemento {chineseZodiac.element} • Energia {chineseZodiac.yinYang}
            </p>
            <p className="text-gray-600 dark:text-gray-400 italic">{chineseZodiac.fullSign}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-5">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">✨ Forças e Talentos</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{chineseZodiac.strengths}</p>
              <div className="flex flex-wrap gap-2">
                {chineseZodiac.traits?.map((trait: string, idx: number) => (
                  <span key={idx} className="bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-xs font-semibold">
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-5">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-3">⚠️ Desafios</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{chineseZodiac.weaknesses}</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold">🎯 O que fazer:</p>
              <p className="text-gray-600 dark:text-gray-400 text-xs">{chineseZodiac.challenges}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-4 text-center">
              <p className="font-bold text-yellow-700 dark:text-yellow-300 mb-2">💼 Carreira Ideal</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">{chineseZodiac.careerTalents}</p>
            </div>

            <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4 text-center">
              <p className="font-bold text-pink-700 dark:text-pink-300 mb-2">❤️ Compatibilidade Amorosa</p>
              <div className="flex justify-center gap-2 mt-2">
                {chineseZodiac.loveCompatibility?.map((animal: string, idx: number) => (
                  <span key={idx} className="bg-pink-200 dark:bg-pink-800 text-pink-800 dark:text-pink-200 px-3 py-1 rounded-full text-sm font-semibold">
                    {animal}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 text-center">
              <p className="font-bold text-blue-700 dark:text-blue-300 mb-2">🤝 Compatibilidade Profissional</p>
              <div className="flex justify-center gap-2 mt-2">
                {chineseZodiac.careerCompatibility?.map((animal: string, idx: number) => (
                  <span key={idx} className="bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                    {animal}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 rounded-xl p-4">
            <p className="font-bold text-orange-700 dark:text-orange-300 mb-2">🔢 Números da Sorte</p>
            <div className="flex gap-3 justify-center">
              {chineseZodiac.luckyNumbers?.map((number: number, idx: number) => (
                <div key={idx} className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-red-600 dark:text-red-400">{number}</span>
                </div>
              ))}
            </div>
          </div>

          {/* IMPACTO DO ANO ATUAL */}
          <div className={`bg-gradient-to-r ${
            relationshipColor === 'green' ? 'from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 border-green-400 dark:border-green-600' :
            relationshipColor === 'blue' ? 'from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 border-blue-400 dark:border-blue-600' :
            relationshipColor === 'yellow' ? 'from-yellow-100 to-amber-100 dark:from-yellow-900/50 dark:to-amber-900/50 border-yellow-400 dark:border-yellow-600' :
            relationshipColor === 'orange' ? 'from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 border-orange-400 dark:border-orange-600' :
            'from-red-100 to-rose-100 dark:from-red-900/50 dark:to-rose-900/50 border-red-400 dark:border-red-600'
          } rounded-2xl p-6 border-4 shadow-xl mt-6`}>
            <div className="text-center mb-4">
              <div className="inline-block bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg mb-3">
                <p className="text-lg font-bold text-gray-800 dark:text-gray-100">
                  📅 {currentYear.year} - Ano da {currentYear.animal} de {currentYear.element}
                </p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">{currentYear.description}</p>
            </div>

            <h4 className={`text-2xl font-bold mb-4 text-center ${
              relationshipColor === 'green' ? 'text-green-700 dark:text-green-300' :
              relationshipColor === 'blue' ? 'text-blue-700 dark:text-blue-300' :
              relationshipColor === 'yellow' ? 'text-yellow-700 dark:text-yellow-300' :
              relationshipColor === 'orange' ? 'text-orange-700 dark:text-orange-300' :
              'text-red-700 dark:text-red-300'
            }`}>
              {yearImpact.title}
            </h4>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5">
                <h5 className="font-bold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2">
                  <span className="text-2xl">✅</span> Oportunidades e Pontos Positivos
                </h5>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {yearImpact.positive}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-5">
                <h5 className="font-bold text-orange-600 dark:text-orange-400 mb-2 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span> Cuidados e Desafios
                </h5>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {yearImpact.negative}
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/50 dark:to-indigo-900/50 rounded-xl p-5 border-l-4 border-purple-500">
                <h5 className="font-bold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <span className="text-2xl">💡</span> Conselho Especializado
                </h5>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  {yearImpact.advice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== SEÇÃO 4: ASTROCARTOGRAFIA ========== */}
      <div id="astrocartografia" className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 rounded-3xl p-6 sm:p-10 shadow-2xl scroll-mt-24">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-4xl">
            🌍
          </div>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3">
            4. Astrocartografia
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubra os locais do mundo onde sua energia flui melhor
          </p>
        </div>

        {/* Análise Personalizada */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-6">
          <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">📍 Sua Análise Personalizada</h4>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{astrocartography.personalizedAnalysis}</p>
        </div>

        {/* MAPA INTERATIVO */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-6">
          <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
            🗺️ Seu Mapa Astrocartográfico Interativo
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Visualize onde no mundo suas energias planetárias são mais fortes. Clique nos marcadores para ver detalhes!
          </p>
          <AstroMap
            birthPlace={reportData.personalData.birthPlace || 'Local não especificado'}
            sunLines={astrocartography.sunLines || []}
            moonLines={astrocartography.moonLines || []}
            venusLines={astrocartography.venusLines || []}
            favorableLocations={astrocartography.favorableLocations || {}}
            challengingLocations={astrocartography.challengingLocations || {}}
          />
        </div>

        {/* Linhas Planetárias */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h4 className="font-bold text-yellow-700 dark:text-yellow-300 mb-3 flex items-center gap-2">
              ☀️ Linhas Solares
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Liderança, reconhecimento, vitalidade</p>
            <ul className="space-y-2">
              {astrocartography.sunLines?.slice(0, 3).map((loc: string, idx: number) => (
                <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-2">
                  📍 {loc}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2">
              🌙 Linhas Lunares
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Emoções, lar, segurança</p>
            <ul className="space-y-2">
              {astrocartography.moonLines?.slice(0, 3).map((loc: string, idx: number) => (
                <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/30 rounded-lg p-2">
                  📍 {loc}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-3 flex items-center gap-2">
              💝 Linhas de Vênus
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Amor, beleza, prosperidade</p>
            <ul className="space-y-2">
              {astrocartography.venusLines?.slice(0, 3).map((loc: string, idx: number) => (
                <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 bg-pink-50 dark:bg-pink-900/30 rounded-lg p-2">
                  📍 {loc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Locais Favoráveis por Categoria */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-6">
          <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">✨ Seus Destinos Ideais</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Locais onde suas energias planetárias fluem harmoniosamente. Ótimos para morar, trabalhar ou visitar!
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {astrocartography.favorableLocations && Object.entries(astrocartography.favorableLocations).map(([category, locations]: [string, any]) => (
              <div key={category} className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30 rounded-xl p-5">
                <h5 className="font-bold text-teal-700 dark:text-teal-300 mb-3">{category}</h5>
                <ul className="space-y-2">
                  {(Array.isArray(locations) ? locations : []).slice(0, 3).map((loc: string, idx: number) => (
                    <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      {loc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Locais Desafiadores */}
        {astrocartography.challengingLocations && Object.keys(astrocartography.challengingLocations).length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-2 border-orange-200 dark:border-orange-800">
            <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
              ⚠️ Locais que Requerem Atenção Especial
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Estes locais podem apresentar desafios ou tensões energéticas. Não significa que você não deva visitá-los, 
              mas é importante estar preparado(a) e consciente. Com autocuidado e preparação adequada, você pode navegar 
              essas energias com sucesso.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(astrocartography.challengingLocations).map(([category, locations]: [string, any]) => (
                <div key={category} className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl p-5 border-l-4 border-orange-500">
                  <h5 className="font-bold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2">
                    <span className="text-xl">⚠️</span>
                    {category}
                  </h5>
                  <ul className="space-y-2">
                    {(Array.isArray(locations) ? locations : []).map((loc: string, idx: number) => (
                      <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                        <span className="text-red-500 mr-2">⚡</span>
                        {loc}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      <strong className="text-orange-600 dark:text-orange-400">💡 O que fazer:</strong> Visite com consciência, 
                      pratique autocuidado extra, estabeleça limites claros e busque apoio quando necessário.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Seção 5: Horóscopo Diário */}
      <div id="horoscope-section" className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-2xl p-6 sm:p-8">
        {/* Import do componente de horóscopo inline */}
        <HoroscopeInline personalData={reportData.personalData} />
      </div>
    </div>
  )
}

