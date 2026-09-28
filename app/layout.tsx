import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { HeadingPaintEnhancer } from '@/components/heading-paint-enhancer'
import { SiteFooter } from '@/components/site-footer'

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' })

const siteUrl = 'https://naturalintellects.com'
const title = 'Natural Intellects Ltd. — Tech Over, NI.'
const description = 'Natural Intellects is a Ugandan technology and innovation company building practical digital products, business systems and software platforms — and exploring what comes next.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: '%s — Natural Intellects' },
  description,
  applicationName: 'Natural Intellects Ltd.',
  keywords: ['Natural Intellects', 'Uganda technology company', 'digital products Uganda', 'business systems', 'software platforms', 'Tech Over NI'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Natural Intellects Ltd.',
    title,
    description,
    locale: 'en_US',
    images: [{ url: '/ni-logo-updated.png', width: 1024, height: 1024, alt: 'Natural Intellects Ltd. logo' }],
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: ['/ni-logo-updated.png'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/ni-logo-updated.png', apple: '/ni-logo-updated.png' },
}

export const viewport: Viewport = { themeColor: '#080909', colorScheme: 'dark light' }

// Applies the saved theme before first paint to avoid a dark/light flash.
const themeInit = `try{const m=document.cookie.match(/(?:^|; )ni-theme=(dark|light)/);const d=m?m[1]==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeInit }} /></head><body className={`${display.variable} ${mono.variable} font-sans`}><HeadingPaintEnhancer /><a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:border focus:border-accent focus:bg-background focus:px-4 focus:py-3 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest">Skip to content</a>{children}<SiteFooter /></body></html>
}
