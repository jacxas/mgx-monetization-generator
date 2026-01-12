'use client';

import { useEffect, useState } from 'react';
import { getUsageStats, FREEMIUM_CONFIG } from '@/lib/freemium';

export default function FreemiumBadge() {
  const [stats, setStats] = useState({
    promptsUsedToday: 0,
    promptsRemaining: 5,
    isPro: false,
    resetTime: '',
  });

  useEffect(() => {
    const updateStats = () => {
      setStats(getUsageStats());
    };

    updateStats();
    const interval = setInterval(updateStats, 1000);

    return () => clearInterval(interval);
  }, []);

  if (stats.isPro) {
    return (
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="font-bold">PRO</span>
          <span className="text-sm">Ilimitado</span>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white border-2 border-blue-500 px-6 py-3 rounded-full shadow-lg">
        <div className="flex items-center gap-3">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {stats.promptsRemaining}
            </div>
            <div className="text-xs text-gray-600">restantes hoy</div>
          </div>
          <div className="h-8 w-px bg-gray-300" />
          <a
            href={FREEMIUM_CONFIG.PAYPAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Upgrade a Pro
          </a>
        </div>
      </div>
    </div>
  );
}
