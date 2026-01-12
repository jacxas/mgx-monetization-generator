'use client';

import { categories } from '@/data/prompts';
import { getCategoryColor, getCategoryIcon } from '@/lib/utils';

interface CategorySelectorProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string) => void;
}

export default function CategorySelector({ selectedCategory, onSelectCategory }: CategorySelectorProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Selecciona una Categoría de Monetización
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {categories.map((category) => {
          const isSelected = selectedCategory === category.name;
          const gradient = getCategoryColor(category.name);
          const icon = getCategoryIcon(category.name);

          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.name)}
              className={`
                relative p-6 rounded-xl transition-all duration-300
                ${isSelected 
                  ? 'ring-4 ring-blue-500 shadow-xl scale-105' 
                  : 'hover:shadow-lg hover:scale-102'
                }
              `}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 rounded-xl`} />
              <div className="relative">
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {category.description}
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">
                    {category.prompts.length} estrategias
                  </span>
                  <span className={`px-2 py-1 rounded-full bg-gradient-to-r ${gradient} text-white font-semibold`}>
                    {category.prompts[0]?.incomeGoal || 'Varios'}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
