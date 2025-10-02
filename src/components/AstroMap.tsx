'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'

interface AstroMapProps {
  birthPlace: string
  sunLines: string[]
  moonLines: string[]
  venusLines: string[]
  favorableLocations: {
    [category: string]: string[]
  }
  challengingLocations?: {
    [category: string]: string[]
  }
}

// Coordenadas aproximadas de cidades (banco de dados simplificado)
const cityCoordinates: {[key: string]: [number, number]} = {
  // Linhas Solares
  'Los Angeles, EUA': [34.0522, -118.2437],
  'Sydney, Austrália': [-33.8688, 151.2093],
  'Tóquio, Japão': [35.6762, 139.6503],
  'Dubai, EAU': [25.2048, 55.2708],
  'São Paulo, Brasil': [-23.5505, -46.6333],
  
  // Linhas Lunares
  'Londres, Reino Unido': [51.5074, -0.1278],
  'Dublin, Irlanda': [53.3498, -6.2603],
  'Amsterdam, Holanda': [52.3676, 4.9041],
  'Vancouver, Canadá': [49.2827, -123.1207],
  
  // Linhas de Vênus
  'Paris, França': [48.8566, 2.3522],
  'Veneza, Itália': [45.4408, 12.3155],
  'Rio de Janeiro, Brasil': [-22.9068, -43.1729],
  'Bali, Indonésia': [-8.3405, 115.0920],
  
  // Outras
  'Berlim, Alemanha': [52.5200, 13.4050],
  'Seul, Coreia do Sul': [37.5665, 126.9780],
  'Hong Kong': [22.3193, 114.1694],
  'Nova York, EUA': [40.7128, -74.0060],
  'Nova Delhi, Índia': [28.6139, 77.2090],
  'Bangkok, Tailândia': [13.7563, 100.5018],
  'Cairo, Egito': [30.0444, 31.2357],
  'Jerusalém, Israel': [31.7683, 35.2137],
  'Moscou, Rússia': [55.7558, 37.6173],
  'Oslo, Noruega': [59.9139, 10.7522],
  'Helsinki, Finlândia': [60.1695, 24.9354],
  'Montreal, Canadá': [45.5017, -73.5673],
}

// Componente Map separado para carregamento dinâmico
const MapComponent = dynamic(
  () => import('react-leaflet').then((mod) => {
    const { MapContainer, TileLayer, Marker, Popup, Polyline, Circle } = mod
    
    return function Map({ birthPlace, sunLines, moonLines, venusLines, favorableLocations, challengingLocations }: AstroMapProps) {
      const [isClient, setIsClient] = useState(false)
      
      useEffect(() => {
        setIsClient(true)
      }, [])

      if (!isClient) {
        return (
          <div className="w-full h-[500px] bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
            <p className="text-gray-600 dark:text-gray-400">Carregando mapa...</p>
          </div>
        )
      }

      // Importar ícones do Leaflet
      const L = require('leaflet')
      
      // Corrigir ícones padrão do Leaflet
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      })

      // Ícones personalizados
      const createCustomIcon = (color: string) => {
        return L.divIcon({
          className: 'custom-marker',
          html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>`,
          iconSize: [20, 20],
          iconAnchor: [10, 10],
        })
      }

      const sunIcon = createCustomIcon('#FFD700')
      const moonIcon = createCustomIcon('#9333EA')
      const venusIcon = createCustomIcon('#EC4899')
      const favorableIcon = createCustomIcon('#10B981')
      const challengingIcon = createCustomIcon('#EF4444')

      // Coordenadas para as linhas (ilustrativas - meridiano/paralelo aproximado)
      const createPlanetaryLine = (cities: string[], color: string) => {
        return cities
          .map(city => cityCoordinates[city])
          .filter(coord => coord !== undefined)
          .map((coord, idx, arr) => {
            // Criar linhas verticais (meridianos) para cada cidade
            const longitude = coord[1]
            return [
              [-90, longitude],
              [90, longitude]
            ] as [number, number][]
          })
      }

      const sunLinesCoords = createPlanetaryLine(sunLines, '#FFD700')
      const moonLinesCoords = createPlanetaryLine(moonLines, '#9333EA')
      const venusLinesCoords = createPlanetaryLine(venusLines, '#EC4899')

      return (
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: '500px', width: '100%', borderRadius: '12px' }}
          className="z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Linhas Solares */}
          {sunLinesCoords.map((line, idx) => (
            <Polyline
              key={`sun-${idx}`}
              positions={line}
              pathOptions={{ color: '#FFD700', weight: 2, opacity: 0.6, dashArray: '10, 5' }}
            />
          ))}

          {/* Linhas Lunares */}
          {moonLinesCoords.map((line, idx) => (
            <Polyline
              key={`moon-${idx}`}
              positions={line}
              pathOptions={{ color: '#9333EA', weight: 2, opacity: 0.6, dashArray: '10, 5' }}
            />
          ))}

          {/* Linhas de Vênus */}
          {venusLinesCoords.map((line, idx) => (
            <Polyline
              key={`venus-${idx}`}
              positions={line}
              pathOptions={{ color: '#EC4899', weight: 2, opacity: 0.6, dashArray: '10, 5' }}
            />
          ))}

          {/* Marcadores das Linhas Solares */}
          {sunLines.map((city, idx) => {
            const coords = cityCoordinates[city]
            if (!coords) return null
            return (
              <Marker key={`sun-marker-${idx}`} position={coords} icon={sunIcon}>
                <Popup>
                  <div className="text-center">
                    <p className="font-bold text-yellow-600">☀️ Linha Solar</p>
                    <p className="text-sm">{city}</p>
                    <p className="text-xs text-gray-600 mt-1">Liderança e reconhecimento</p>
                  </div>
                </Popup>
              </Marker>
            )
          })}

          {/* Marcadores das Linhas Lunares */}
          {moonLines.map((city, idx) => {
            const coords = cityCoordinates[city]
            if (!coords) return null
            return (
              <Marker key={`moon-marker-${idx}`} position={coords} icon={moonIcon}>
                <Popup>
                  <div className="text-center">
                    <p className="font-bold text-purple-600">🌙 Linha Lunar</p>
                    <p className="text-sm">{city}</p>
                    <p className="text-xs text-gray-600 mt-1">Emoções e segurança</p>
                  </div>
                </Popup>
              </Marker>
            )
          })}

          {/* Marcadores das Linhas de Vênus */}
          {venusLines.map((city, idx) => {
            const coords = cityCoordinates[city]
            if (!coords) return null
            return (
              <Marker key={`venus-marker-${idx}`} position={coords} icon={venusIcon}>
                <Popup>
                  <div className="text-center">
                    <p className="font-bold text-pink-600">💝 Linha de Vênus</p>
                    <p className="text-sm">{city}</p>
                    <p className="text-xs text-gray-600 mt-1">Amor e prosperidade</p>
                  </div>
                </Popup>
              </Marker>
            )
          })}

          {/* Marcadores dos Locais Favoráveis */}
          {Object.entries(favorableLocations).map(([category, cities]) =>
            cities.slice(0, 3).map((city: string, idx: number) => {
              const coords = cityCoordinates[city]
              if (!coords) return null
              return (
                <Marker key={`favorable-${category}-${idx}`} position={coords} icon={favorableIcon}>
                  <Popup>
                    <div className="text-center">
                      <p className="font-bold text-green-600">✨ Local Favorável</p>
                      <p className="text-sm">{city}</p>
                      <p className="text-xs text-gray-600 mt-1">{category}</p>
                    </div>
                  </Popup>
                </Marker>
              )
            })
          )}

          {/* Marcadores dos Locais Desafiadores */}
          {challengingLocations && Object.entries(challengingLocations).map(([category, cities]) =>
            cities.slice(0, 3).map((city: string, idx: number) => {
              const coords = cityCoordinates[city]
              if (!coords) return null
              return (
                <Marker key={`challenging-${category}-${idx}`} position={coords} icon={challengingIcon}>
                  <Popup>
                    <div className="text-center">
                      <p className="font-bold text-red-600">⚠️ Local Desafiador</p>
                      <p className="text-sm">{city}</p>
                      <p className="text-xs text-gray-600 mt-1">{category}</p>
                      <p className="text-xs text-orange-600 mt-2 font-semibold">Requer cautela e preparação</p>
                    </div>
                  </Popup>
                </Marker>
              )
            })
          )}
        </MapContainer>
      )
    }
  }),
  { ssr: false }
)

export default function AstroMap(props: AstroMapProps) {
  return (
    <div className="w-full">
      <MapComponent {...props} />
      
      {/* Legenda com Explicações */}
      <div className="mt-4 space-y-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg">
          <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">🎨 Guia de Interpretação das Linhas Planetárias</h4>
          
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {/* Linha Solar */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg p-4 border-l-4 border-yellow-500">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-yellow-500 border-2 border-white shadow"></div>
                <span className="font-bold text-yellow-700 dark:text-yellow-300">☀️ Linha Solar</span>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Significado:</strong> Regiões onde você brilha naturalmente, recebe reconhecimento e desenvolve liderança.<br/>
                <strong>Ideal para:</strong> Carreira, visibilidade pública, autoconfiança, vitalidade e sucesso profissional.<br/>
                <strong>Energias:</strong> Poder pessoal, fama, energia vital elevada.
              </p>
            </div>

            {/* Linha Lunar */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg p-4 border-l-4 border-purple-500">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-purple-600 border-2 border-white shadow"></div>
                <span className="font-bold text-purple-700 dark:text-purple-300">🌙 Linha Lunar</span>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Significado:</strong> Locais que nutrem suas emoções, proporcionam segurança e conexão com o lar.<br/>
                <strong>Ideal para:</strong> Família, moradia, equilíbrio emocional, maternidade/paternidade, introspecção.<br/>
                <strong>Energias:</strong> Conforto, nutrição emocional, memórias, intuição.
              </p>
            </div>

            {/* Linha de Vênus */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 rounded-lg p-4 border-l-4 border-pink-500">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-pink-500 border-2 border-white shadow"></div>
                <span className="font-bold text-pink-700 dark:text-pink-300">💝 Linha de Vênus</span>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Significado:</strong> Regiões que favorecem amor, relacionamentos, beleza e prosperidade financeira.<br/>
                <strong>Ideal para:</strong> Romance, casamento, artes, harmonia, negócios criativos, bem-estar.<br/>
                <strong>Energias:</strong> Amor, beleza, dinheiro, prazeres, criatividade.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Locais Favoráveis */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg p-4 border-l-4 border-green-500">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-green-500 border-2 border-white shadow"></div>
                <span className="font-bold text-green-700 dark:text-green-300">✨ Local Favorável</span>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                Energias harmoniosas e positivas. Ótimos para morar, trabalhar, investir ou visitar. Você se sentirá naturalmente bem e terá mais facilidade para prosperar.
              </p>
            </div>

            {/* Locais Desafiadores */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 rounded-lg p-4 border-l-4 border-red-500">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-red-500 border-2 border-white shadow"></div>
                <span className="font-bold text-red-700 dark:text-red-300">⚠️ Local Desafiador</span>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                Energias tensas que requerem atenção extra. Não são proibidos, mas exigem mais autocuidado, preparação e consciência. Podem trazer lições importantes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 text-xs text-gray-600 dark:text-gray-400">
        <p className="font-semibold mb-2">📍 Como usar este mapa:</p>
        <ul className="space-y-1 ml-4">
          <li>• <strong>Clique nos marcadores</strong> para ver informações detalhadas de cada local</li>
          <li>• <strong>Arraste o mapa</strong> para explorar diferentes regiões do mundo</li>
          <li>• <strong>Use zoom</strong> para ver melhor as áreas de interesse</li>
          <li>• As <strong>linhas verticais tracejadas</strong> representam meridianos planetários</li>
        </ul>
      </div>
    </div>
  )
}

