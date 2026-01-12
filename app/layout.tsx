import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MGX - Generador de Prompts de Monetización',
  description: 'Genera estrategias personalizadas de monetización con IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
