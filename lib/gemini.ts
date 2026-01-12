import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(apiKey);

export interface GenerationConfig {
  temperature?: number;
  topK?: number;
  topP?: number;
  maxOutputTokens?: number;
}

export interface PromptTemplate {
  category: string;
  title: string;
  description: string;
  incomeGoal: string;
  isPro: boolean;
}

/**
 * Genera un prompt de monetización usando Gemini AI
 */
export async function generateMonetizationPrompt(
  template: PromptTemplate,
  userInput?: string
): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const systemPrompt = `Eres un experto en estrategias de monetización y generación de ingresos online. 
Tu objetivo es crear planes detallados, accionables y realistas para ayudar a las personas a alcanzar sus objetivos financieros.

Categoría: ${template.category}
Objetivo de Ingresos: ${template.incomeGoal}
Título: ${template.title}
Descripción: ${template.description}
${template.isPro ? '\n[VERSIÓN PRO - Incluye estrategias avanzadas y detalles específicos]' : '\n[VERSIÓN GRATUITA - Incluye estrategias básicas]'}

Genera un plan detallado que incluya:

1. **Resumen Ejecutivo**
   - Visión general de la estrategia
   - Potencial de ingresos realista
   - Tiempo estimado para resultados

2. **Análisis de Mercado**
   - Oportunidades actuales
   - Competencia y diferenciación
   - Tendencias relevantes

3. **Plan de Acción Paso a Paso**
   - Fase 1: Preparación (0-30 días)
   - Fase 2: Lanzamiento (30-90 días)
   - Fase 3: Escalamiento (90+ días)

4. **Recursos Necesarios**
   - Inversión inicial estimada
   - Herramientas y plataformas
   - Habilidades requeridas

5. **Estrategias de Marketing**
   - Canales de adquisición
   - Tácticas de conversión
   - Retención de clientes

6. **Métricas Clave (KPIs)**
   - Indicadores de éxito
   - Objetivos mensuales
   - Puntos de control

7. **Riesgos y Mitigación**
   - Desafíos comunes
   - Soluciones preventivas
   - Plan B

8. **Próximos Pasos Inmediatos**
   - Acciones para las próximas 24-48 horas
   - Quick wins
   - Recursos adicionales

${userInput ? `\nContexto adicional del usuario: ${userInput}` : ''}

Formatea la respuesta de manera clara y profesional, usando markdown para mejor legibilidad.`;

    const result = await model.generateContent(systemPrompt);
    const response = await result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error('Error generating prompt:', error);
    throw new Error('No se pudo generar el prompt. Por favor, intenta de nuevo.');
  }
}

/**
 * Genera múltiples variaciones de un prompt
 */
export async function generatePromptVariations(
  template: PromptTemplate,
  count: number = 3
): Promise<string[]> {
  const variations: string[] = [];

  for (let i = 0; i < count; i++) {
    try {
      const variation = await generateMonetizationPrompt(template);
      variations.push(variation);
    } catch (error) {
      console.error(`Error generating variation ${i + 1}:`, error);
    }
  }

  return variations;
}

/**
 * Valida que la API key esté configurada
 */
export function validateApiKey(): boolean {
  return !!apiKey && apiKey.length > 0;
}

/**
 * Obtiene información sobre el modelo
 */
export async function getModelInfo() {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    return {
      name: 'gemini-pro',
      available: true,
    };
  } catch (error) {
    console.error('Error getting model info:', error);
    return {
      name: 'gemini-pro',
      available: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
