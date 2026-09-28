'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

// Read at build time; set via .env.local (local) or the hosting env (production):
//   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

/**
 * Google Analytics 4 (gtag.js) for the App Router.
 *
 * - Renders nothing when NEXT_PUBLIC_GA_ID is not set, so the site stays clean
 *   in environments where analytics is not configured.
 * - The initial page_view is sent by the inline init snippet (config uses
 *   `send_page_view: false` to avoid double counting).
 * - Client-side navigations send a page_view via the dataLayer queue, which is
 *   safe whether or not gtag.js has finished loading yet.
 */
export function GoogleAnalytics() {
  const pathname = usePathname()
  const firstRun = useRef(true)

  useEffect(() => {
    if (!GA_ID) return
    // The initial page_view is handled by the init snippet; skip it here.
    if (firstRun.current) {
      firstRun.current = false
      return
    }
    const w = window as Window & { dataLayer?: unknown[] }
    w.dataLayer = w.dataLayer || []
    w.dataLayer.push(['event', 'page_view', { page_path: pathname, page_title: document.title }])
  }, [pathname])

  if (!GA_ID) return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ni-ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments)};gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:false});gtag('event','page_view',{page_path:window.location.pathname,page_title:document.title});`}
      </Script>
    </>
  )
}
