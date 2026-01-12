'use client';

import { useState } from 'react';
import { categories, Prompt } from '@/data/prompts';
import CategorySelector from '@/components/CategorySelector';
import PromptGrid from '@/components/PromptGrid';
import PromptGenerator from '@/components/PromptGenerator';
import FreemiumBadge from '@/components/FreemiumBadge';
import { FREEMIUM_CONFIG } from '@/lib/freemium';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setSelectedPrompt(null);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedPrompt(null);
  };

  const selectedCategoryData = categories.find(c => c.name === selectedCategory);
  const prompts = selectedCategoryData?.prompts || [];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <FreemiumBadge />

      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                💰 MGX - Generador de Prompts de Monetización
              </h1>
              <p className="text-gray-600 mt-1">
                Estrategias de IA para generar ingresos desde $1K hasta $500K+
              </p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-600">Versión Gratuita</div>
                <div className="text-xs text-gray-500">5 prompts/día</div>
              </div>
              <a
                href={FREEMIUM_CONFIG.PAYPAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-lg"
              >
                Upgrade a Pro - ${FREEMIUM_CONFIG.PRO_PRICE}/mes
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        {selectedCategory && (
          <div className="mb-6">
            <button
              onClick={handleBackToCategories}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver a Categorías
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mt-2">
              {selectedCategory}
            </h2>
          </div>
        )}

        {/* Category Selection */}
        {!selectedCategory && (
          <CategorySelector
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
          />
        )}

        {/* Prompt Grid */}
        {selectedCategory && !selectedPrompt && (
          <PromptGrid
            prompts={prompts}
            onSelectPrompt={setSelectedPrompt}
          />
        )}

        {/* Prompt Generator Modal */}
        {selectedPrompt && (
          <PromptGenerator
            prompt={selectedPrompt}
            onClose={() => setSelectedPrompt(null)}
          />
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">¿Cómo funciona?</h3>
              <p className="text-sm text-gray-600">
                Selecciona una categoría, elige un prompt y genera estrategias personalizadas 
                de monetización usando IA avanzada de Google Gemini.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Versión Gratuita vs Pro</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Gratis: 5 prompts por día</li>
                <li>• Pro: Prompts ilimitados</li>
                <li>• Pro: Estrategias más detalladas</li>
                <li>• Pro: Soporte prioritario</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Categorías Disponibles</h3>
              <p className="text-sm text-gray-600">
                {categories.length} categorías con más de 35 estrategias diferentes para 
                generar ingresos desde $1K hasta $500K+.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>© 2026 MGX Monetization Generator. Powered by Google Gemini AI.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
