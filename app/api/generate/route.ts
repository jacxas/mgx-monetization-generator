import { NextRequest, NextResponse } from 'next/server';
import { generateMonetizationPrompt, PromptTemplate } from '@/lib/gemini';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { template, userInput } = body as {
      template: PromptTemplate;
      userInput?: string;
    };

    if (!template) {
      return NextResponse.json(
        { error: 'Template is required' },
        { status: 400 }
      );
    }

    const result = await generateMonetizationPrompt(template, userInput);

    return NextResponse.json({ result });
  } catch (error) {
    console.error('Error in generate API:', error);
    return NextResponse.json(
      { error: 'Failed to generate prompt' },
      { status: 500 }
    );
  }
}
