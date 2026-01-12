'use client';

import { useState } from 'react';
import { Prompt } from '@/data/prompts';
import { generateMonetizationPrompt } from '@/lib/gemini';
import { canGeneratePrompt, incrementPromptUsage, getUsageStats } from '@/lib/freemium';

interface PromptGeneratorProps {
  prompt: Prompt;
  onClose: () => void;
}

export default function PromptGenerator({ prompt, onClose }: PromptGeneratorProps) {
  const [userInput, setUserInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    // Verificar límites freemium
    const { allowed, message } = canGeneratePrompt();
    
    if (!allowed) {
      setError(message || 'Límite alcanzado');
      return;
    }

    setIsGenerating(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          template: {
            category: prompt.category,
            title: prompt.title,
            description: prompt.description,
            incomeGoal: prompt.incomeGoal,
            isPro: prompt.isPro,
          },
          userInput: userInput || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al generar el prompt');
      }

      const data = await response.json();
      setResult(data.result);
      
      // Incrementar contador de uso
      incrementPromptUsage();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setIsGenerating(false);
    }
  };

  const stats = getUsageStats();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{prompt.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{prompt.category}</p>
              <p className="text-sm font-semibold text-green-600 mt-1">
                Objetivo: {prompt.incomeGoal}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p className="text-gray-700 mb-6">{prompt.description}</p>

          {!result && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contexto adicional (opcional)
              </label>
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ej: Tengo experiencia en marketing digital, presupuesto de $5000, y 3 meses disponibles..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
              />
            </div>
          )}

          {!stats.isPro && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                Prompts restantes hoy: <span className="font-bold">{stats.promptsRemaining}</span> de 5
              </p>
            </div>
          )}

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800">{error}</p>
              {error.includes('límite') && (
                <a
                  href="https://paypal.me/DW3IA/47"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Actualizar a Pro - $47/mes
                </a>
              )}
            </div>
          )}

          {result && (
            <div className="mb-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, '<br />') }} />
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => navigator.clipboard.writeText(result)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Copiar Resultado
                </button>
                <button
                  onClick={() => {
                    const blob = new Blob([result], { type: 'text/plain' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${prompt.title.replace(/\s+/g, '-')}.txt`;
                    a.click();
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Descargar
                </button>
              </div>
            </div>
          )}

          {!result && (
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? 'Generando...' : 'Generar Estrategia de Monetización'}
            </button>
          )}

          {result && (
            <button
              onClick={() => {
                setResult(null);
                setUserInput('');
                setError(null);
              }}
              className="w-full px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700"
            >
              Generar Otra Estrategia
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
