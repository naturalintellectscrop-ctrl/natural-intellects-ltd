import type { Metadata } from 'next'

// Canonical public domain (Vercel-managed). Used to resolve relative OG URLs.
export const SITE_URL = 'https://naturalintellects.com'

// Landscape share card for WhatsApp / X / LinkedIn link previews.
export const OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Natural Intellects Ltd. — Tech Over, NI.',
}

type OgInput = { title?: string; description?: string; url?: string }

/**
 * Builds a complete openGraph object in NI's voice.
 * Title/description are intentionally optional: when omitted, Next.js falls back
 * to the resolved page title/description, so every route shares itself accurately.
 */
export function niOg(opts: OgInput = {}): NonNullable<Metadata['openGraph']> {
  return {
    type: 'website',
    siteName: 'Natural Intellects Ltd.',
    locale: 'en_US',
    ...(opts.url ? { url: opts.url } : {}),
    ...(opts.title ? { title: opts.title } : {}),
    ...(opts.description ? { description: opts.description } : {}),
    images: [OG_IMAGE],
  }
}
