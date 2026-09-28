'use client'

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Pause, Play } from 'lucide-react'
import { products } from '@/data/site'
import { Status } from '@/components/site-chrome'

// Real, supplied product visuals only. Products without a published interface
// render an honest typographic sheet instead of a mock screen.
const productVisuals: Partial<Record<string, string>> = {
  // Verified assets: Smart Ride mark fetched from the official product (smartrideug.vercel.app/og-image.png).
  // House For Rent logo: the supplied asset files were cross-named at the source —
  // "smart-ride.png" actually contains the House For Rent logo and "house-for-rent.jpg"
  // contains a Smart Ride-branded image. The real HFR logo is served here under an
  // honest filename (house-for-rent-logo.png) to prevent future mix-ups.
  'smart-ride': '/work-done/smart-ride-og.png',
  'house-for-rent': '/work-done/house-for-rent-logo.png',
}

function monogram(name: string) {
  return name.split(/\s+/).map((word) => word[0]).join('').slice(0, 3).toUpperCase()
}

type Product = (typeof products)[number]

// The physical "page" of the book. Rendered identically on the stack and inside
// the turning overlay so the swap between them is pixel-perfect.
function ProductCardFace({ item, index, image, isActive }: { item: Product; index: number; image?: string; isActive: boolean }) {
  return <div className="relative w-full overflow-hidden rounded-sm border border-line/80 bg-background/95 p-2 shadow-[0_24px_80px_rgba(0,0,0,.6)] sm:p-3">
    <div className="flex items-center gap-2 border-b border-line pb-2"><span className={`size-1.5 rounded-full ${item.status === 'ACTIVE' ? 'bg-accent' : 'bg-line'}`} /><span className="size-1.5 rounded-full bg-line" /><span className="size-1.5 rounded-full bg-line" /><span className="ml-2 truncate font-mono text-[9px] uppercase tracking-widest text-muted">{item.slug} / {item.status}</span></div>
    {image ? (
      <div className="flex min-h-[15rem] items-center justify-center overflow-hidden bg-panel p-5 sm:min-h-[22rem] sm:p-8"><img src={image} alt={isActive ? `${item.name} product visual` : ''} className="max-h-[20rem] max-w-full object-contain" /></div>
    ) : (
      <div className="grid-lines flex min-h-[15rem] flex-col items-start justify-between bg-panel p-5 sm:min-h-[22rem] sm:p-8"><span className="eyebrow">NI system sheet</span><div className="font-mono text-6xl tracking-tight text-accent sm:text-8xl">{monogram(item.name)}</div><p className="font-mono text-[9px] uppercase tracking-[.18em] text-muted">Interface preview not published · {item.category}</p></div>
    )}
    <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/90 to-transparent px-5 pb-4 pt-20 transition-opacity duration-500 sm:px-7 sm:pb-6 ${isActive ? 'opacity-100' : 'pointer-events-none opacity-0'}`}><div className="eyebrow">{String(index + 1).padStart(2, '0')} · {item.status}</div><h3 className="mt-1 text-2xl tracking-[-.04em] sm:text-3xl">{item.name}</h3><p className="mt-1 max-w-md text-xs leading-relaxed text-muted sm:text-sm">{item.solution}</p><Link tabIndex={isActive ? 0 : -1} href={'url' in item && item.url ? item.url : `/products/${item.slug}`} target={'url' in item && item.url ? '_blank' : undefined} rel={'url' in item && item.url ? 'noreferrer' : undefined} className="group/link mt-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-foreground hover:text-accent">Explore {item.name} <ArrowUpRight className="size-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" /></Link></div>
  </div>
}

export function ProductsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  // Book page-turn: while a turn runs, a dedicated overlay page swings on the
  // left binding edge — forward it lifts off (0 -> -90deg, vanishing edge-on at
  // exactly -90deg so no opacity hack is needed); backward it swings shut onto
  // the deck (-90 -> 0deg) and unmounts seamlessly over the identical active card.
  const [flip, setFlip] = useState<{ dir: 1 | -1; page: number; nonce: number } | null>(null)
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const flipTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const flipNonce = useRef(0)
  const activeRef = useRef(0)
  const active = products[activeIndex]
  const reducedMotion = useSyncExternalStore(
    (onChange) => { const m = window.matchMedia('(prefers-reduced-motion: reduce)'); m.addEventListener('change', onChange); return () => m.removeEventListener('change', onChange) },
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false,
  )
  const stackItems = useMemo(() => products.map((item, index) => ({ item, index, image: productVisuals[item.slug], distance: (activeIndex - index + products.length) % products.length })).sort((a, b) => b.distance - a.distance), [activeIndex])

  const goTo = useCallback((index: number, fromAutoRotate = false) => {
    const current = activeRef.current
    if (index === current) return
    const forward = index > current || (current === products.length - 1 && index === 0)
    activeRef.current = index
    setActiveIndex(index)
    if (!reducedMotion) {
      setFlip({ dir: forward ? 1 : -1, page: forward ? current : index, nonce: ++flipNonce.current })
      if (flipTimer.current) clearTimeout(flipTimer.current)
      flipTimer.current = setTimeout(() => setFlip(null), 1050)
    }
    if (!fromAutoRotate) {
      setPaused(true)
      if (resumeTimer.current) clearTimeout(resumeTimer.current)
      resumeTimer.current = setTimeout(() => setPaused(false), 7000)
    }
  }, [reducedMotion])

  useEffect(() => () => { if (resumeTimer.current) clearTimeout(resumeTimer.current); if (flipTimer.current) clearTimeout(flipTimer.current) }, [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => goTo((activeRef.current + 1) % products.length, true), 5200)
    return () => clearInterval(timer)
  }, [paused, goTo])

  return <section id="products" className="reveal-section border-y border-line bg-panel/30 px-6 py-24 lg:px-10 lg:py-32" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
    <div className="mx-auto max-w-screen-2xl">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><div className="eyebrow">03 / Products &amp; systems · built for real-world use</div><h2 className="mt-6 max-w-3xl text-5xl tracking-[-.06em] lg:text-8xl">Technology being built for the real world.</h2></div><p className="max-w-xs text-sm leading-relaxed text-muted">Commercial products and systems NI is building for practical use, with clear constraints and room to evolve.</p></div>
      <div className="mt-16 grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <div role="tablist" aria-label="Products" className="flex flex-col gap-3 lg:justify-center">
          {products.map((item, index) => <button key={item.slug} type="button" role="tab" aria-selected={index === activeIndex} aria-controls={`product-preview-${item.slug}`} onClick={() => goTo(index)} className={`group flex w-full items-center gap-3 rounded-full border px-5 py-3 text-left transition-colors ${index === activeIndex ? 'border-accent bg-accent text-background' : 'border-line text-muted hover:border-foreground/40 hover:text-foreground'}`}><span className={`font-mono text-xs ${index === activeIndex ? 'text-background' : 'text-accent'}`}>{String(index + 1).padStart(2, '0')}</span><span className="min-w-0 flex-1"><span className="flex items-center justify-between gap-3"><strong className="text-sm font-medium tracking-tight sm:text-base">{item.name}</strong><Status value={item.status} /></span>{index === activeIndex && <span className="mt-2 block h-px w-full overflow-hidden bg-current/20"><span className="block h-full origin-left bg-current transition-transform" style={{ transform: paused ? 'scaleX(.35)' : 'scaleX(1)' }} /></span>}</span></button>)}
          <button type="button" onClick={() => setPaused((value) => !value)} className="flex items-center gap-2 py-4 font-mono text-[10px] uppercase tracking-widest text-muted hover:text-accent" aria-label={paused ? 'Resume product rotation' : 'Pause product rotation'}>{paused ? <Play className="size-3" /> : <Pause className="size-3" />}{paused ? 'Resume rotation' : 'Pause rotation'}</button>
        </div>
          <div id={`product-preview-${active.slug}`} role="tabpanel" aria-live="polite" className="min-w-0">
            <div className="group relative isolate min-h-[28rem] overflow-hidden bg-background sm:min-h-[36rem]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,var(--background)_78%)]" />
              {stackItems.map(({ item, index, image, distance }) => {
                const isActive = distance === 0
                const visibleDistance = Math.min(distance, 3)
                return <div key={item.slug} aria-hidden={!isActive} className={`absolute inset-0 flex items-center justify-center ${reducedMotion ? 'transition-opacity duration-200' : 'transition-[transform,opacity,filter] duration-[800ms] ease-[cubic-bezier(.22,.8,.24,1)] will-change-[transform,opacity,filter]'}`} style={{ zIndex: isActive ? 20 : 10 - visibleDistance, opacity: isActive ? 1 : visibleDistance === 1 ? .58 : visibleDistance === 2 ? .3 : .14, transform: `translate(${isActive ? 0 : visibleDistance % 2 ? -5 : 5}%, ${isActive ? 0 : visibleDistance * 3}px) scale(${isActive ? 1 : 1 - visibleDistance * .055}) rotate(${isActive ? 0 : visibleDistance % 2 ? -1.2 : 1.2}deg)`, filter: isActive ? 'none' : `blur(${visibleDistance * 1.5}px) grayscale(${visibleDistance * 18}%)`, transformOrigin: isActive ? 'center center' : `${visibleDistance % 2 ? '42%' : '58%'} center`, transitionDelay: reducedMotion ? '0ms' : `${Math.max(0, 3 - visibleDistance) * 35}ms`, pointerEvents: isActive ? undefined : 'none' }}>
                  <div className="w-[78%] sm:w-[64%]"><ProductCardFace item={item} index={index} image={image} isActive={isActive} /></div>
                </div>
              })}
              {flip && (() => {
                const item = products[flip.page]
                const image = productVisuals[item.slug]
                return <div key={`turn-${flip.nonce}`} aria-hidden="true" className="pointer-events-none absolute inset-0 z-40" style={{ perspective: '1800px' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`relative w-[78%] transform-gpu will-change-transform sm:w-[64%] ${flip.dir === 1 ? 'ni-page-open' : 'ni-page-close'}`}>
                      <ProductCardFace item={item} index={flip.page} image={image} isActive />
                      <div className={`ni-page-shade ${flip.dir === 1 ? 'ni-page-shade--open' : 'ni-page-shade--close'}`} />
                    </div>
                  </div>
                </div>
              })()}
            </div>
        </div>
      </div>
    </div>
  </section>
}
