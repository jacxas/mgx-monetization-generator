'use client';

import { Prompt } from '@/data/prompts';
import { getCategoryColor } from '@/lib/utils';

interface PromptCardProps {
  prompt: Prompt;
  onClick: () => void;
}

export default function PromptCard({ prompt, onClick }: PromptCardProps) {
  const gradient = getCategoryColor(prompt.category);

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
    >
      <div className={`h-2 bg-gradient-to-r ${gradient}`} />
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
            {prompt.title}
          </h3>
          {prompt.isPro && (
            <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
              PRO
            </span>
          )}
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {prompt.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-semibold text-green-600">
              {prompt.incomeGoal}
            </span>
          </div>

          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
            Generar
          </button>
        </div>
      </div>
    </div>
  );
}
