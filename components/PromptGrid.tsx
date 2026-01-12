'use client';

import { Prompt } from '@/data/prompts';
import PromptCard from './PromptCard';

interface PromptGridProps {
  prompts: Prompt[];
  onSelectPrompt: (prompt: Prompt) => void;
}

export default function PromptGrid({ prompts, onSelectPrompt }: PromptGridProps) {
  if (prompts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No hay prompts disponibles en esta categoría</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {prompts.map((prompt) => (
        <PromptCard
          key={prompt.id}
          prompt={prompt}
          onClick={() => onSelectPrompt(prompt)}
        />
      ))}
    </div>
  );
}
