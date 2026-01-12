/**
 * Sistema Freemium - Gestión de límites de prompts
 */

export const FREEMIUM_CONFIG = {
  FREE_PROMPTS_PER_DAY: 5,
  PRO_PRICE: 47,
  PAYPAL_URL: 'https://paypal.me/DW3IA/47',
  STORAGE_KEY: 'mgx_freemium_data',
};

export interface FreemiumData {
  promptsUsedToday: number;
  lastResetDate: string;
  isPro: boolean;
  proActivatedDate?: string;
}

/**
 * Obtiene los datos del sistema freemium desde localStorage
 */
export function getFreemiumData(): FreemiumData {
  if (typeof window === 'undefined') {
    return {
      promptsUsedToday: 0,
      lastResetDate: new Date().toISOString().split('T')[0],
      isPro: false,
    };
  }

  const stored = localStorage.getItem(FREEMIUM_CONFIG.STORAGE_KEY);
  
  if (!stored) {
    const initialData: FreemiumData = {
      promptsUsedToday: 0,
      lastResetDate: new Date().toISOString().split('T')[0],
      isPro: false,
    };
    saveFreemiumData(initialData);
    return initialData;
  }

  return JSON.parse(stored);
}

/**
 * Guarda los datos del sistema freemium en localStorage
 */
export function saveFreemiumData(data: FreemiumData): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(FREEMIUM_CONFIG.STORAGE_KEY, JSON.stringify(data));
}

/**
 * Verifica si necesita resetear el contador diario
 */
export function checkAndResetDaily(): FreemiumData {
  const data = getFreemiumData();
  const today = new Date().toISOString().split('T')[0];

  if (data.lastResetDate !== today) {
    data.promptsUsedToday = 0;
    data.lastResetDate = today;
    saveFreemiumData(data);
  }

  return data;
}

/**
 * Verifica si el usuario puede generar un prompt
 */
export function canGeneratePrompt(): {
  allowed: boolean;
  remaining: number;
  isPro: boolean;
  message?: string;
} {
  const data = checkAndResetDaily();

  if (data.isPro) {
    return {
      allowed: true,
      remaining: -1, // Ilimitado
      isPro: true,
    };
  }

  const remaining = FREEMIUM_CONFIG.FREE_PROMPTS_PER_DAY - data.promptsUsedToday;

  if (remaining > 0) {
    return {
      allowed: true,
      remaining,
      isPro: false,
    };
  }

  return {
    allowed: false,
    remaining: 0,
    isPro: false,
    message: `Has alcanzado el límite de ${FREEMIUM_CONFIG.FREE_PROMPTS_PER_DAY} prompts gratuitos por día. Actualiza a Pro para acceso ilimitado.`,
  };
}

/**
 * Incrementa el contador de prompts usados
 */
export function incrementPromptUsage(): void {
  const data = checkAndResetDaily();
  
  if (!data.isPro) {
    data.promptsUsedToday += 1;
    saveFreemiumData(data);
  }
}

/**
 * Activa la versión Pro
 */
export function activatePro(): void {
  const data = getFreemiumData();
  data.isPro = true;
  data.proActivatedDate = new Date().toISOString();
  saveFreemiumData(data);
}

/**
 * Desactiva la versión Pro (para testing)
 */
export function deactivatePro(): void {
  const data = getFreemiumData();
  data.isPro = false;
  data.proActivatedDate = undefined;
  saveFreemiumData(data);
}

/**
 * Resetea todos los datos (para testing)
 */
export function resetFreemiumData(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(FREEMIUM_CONFIG.STORAGE_KEY);
}

/**
 * Obtiene estadísticas de uso
 */
export function getUsageStats(): {
  promptsUsedToday: number;
  promptsRemaining: number;
  isPro: boolean;
  resetTime: string;
} {
  const data = checkAndResetDaily();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  return {
    promptsUsedToday: data.isPro ? 0 : data.promptsUsedToday,
    promptsRemaining: data.isPro 
      ? -1 
      : Math.max(0, FREEMIUM_CONFIG.FREE_PROMPTS_PER_DAY - data.promptsUsedToday),
    isPro: data.isPro,
    resetTime: tomorrow.toISOString(),
  };
}
