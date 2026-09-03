import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' })
export const metadata: Metadata = { title: 'Natural Intellects Ltd. — Tech Over, NI.', description: 'A Ugandan technology and innovation company building practical digital products and imagining what comes next.', openGraph: { title: 'Natural Intellects Ltd.', description: 'Optimize what exists. Transform how it works. Invent what comes next.', type: 'website' } }
export const viewport: Viewport = { themeColor: '#080909', colorScheme: 'dark light', userScalable: false }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className="dark" suppressHydrationWarning><body className={`${display.variable} ${mono.variable} font-sans`}>{children}</body></html> }
