import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina clases de Tailwind CSS de manera eficiente
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formatea un número como moneda USD
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Formatea una fecha de manera legible
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

/**
 * Trunca un texto a un número máximo de caracteres
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * Genera un ID único
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

/**
 * Copia texto al portapapeles
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Error copying to clipboard:', error);
    return false;
  }
}

/**
 * Descarga un texto como archivo
 */
export function downloadAsFile(content: string, filename: string): void {
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Valida un email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Espera un tiempo determinado (para delays)
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Obtiene un color basado en la categoría
 */
export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'AI & Automatización': 'from-purple-500 to-pink-500',
    'Productos Digitales': 'from-blue-500 to-cyan-500',
    'E-commerce & Dropshipping': 'from-green-500 to-emerald-500',
    'Inversión & Trading': 'from-yellow-500 to-orange-500',
    'Servicios de Alto Valor': 'from-red-500 to-rose-500',
    'Contenido & Economía Creadora': 'from-indigo-500 to-purple-500',
    'Crypto & DeFi': 'from-orange-500 to-amber-500',
  };

  return colors[category] || 'from-gray-500 to-slate-500';
}

/**
 * Obtiene un icono emoji basado en la categoría
 */
export function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    'AI & Automatización': '🤖',
    'Productos Digitales': '💻',
    'E-commerce & Dropshipping': '🛒',
    'Inversión & Trading': '📈',
    'Servicios de Alto Valor': '💼',
    'Contenido & Economía Creadora': '🎨',
    'Crypto & DeFi': '₿',
  };

  return icons[category] || '💡';
}
