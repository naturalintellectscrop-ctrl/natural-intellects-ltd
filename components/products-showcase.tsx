'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Pause, Play } from 'lucide-react'
import { products } from '@/data/site'
import { Status } from '@/components/site-chrome'

const previewImages: Record<string, string> = {
  'smart-ride': '/work-done/house-for-rent.jpg',
  'house-for-rent': '/work-done/smart-ride.png',
  nisms: '/ni-logo-updated.png',
  disms: '/ni-logo-updated.png',
  'employee-reporting': '/ni-logo-updated.png',
  ticketug: '/ni-logo-updated.png',
}

export function ProductsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const active = products[activeIndex]
  const stackItems = useMemo(() => products.map((item, index) => ({ item, index, image: previewImages[item.slug] ?? '/ni-logo-updated.png', distance: (activeIndex - index + products.length) % products.length })).sort((a, b) => b.distance - a.distance), [activeIndex])

  const selectProduct = useCallback((index: number) => {
    setActiveIndex(index)
    setPaused(true)
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => setPaused(false), 7000)
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => () => { if (resumeTimer.current) clearTimeout(resumeTimer.current) }, [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => setActiveIndex((index) => (index + 1) % products.length), 5200)
    return () => clearInterval(timer)
  }, [paused])

  return <section id="products" className="reveal-section border-y border-line bg-panel/30 px-6 py-24 lg:px-10 lg:py-32" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
    <div className="mx-auto max-w-screen-2xl">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><div className="eyebrow">03 / Products</div><h2 className="mt-6 max-w-3xl text-5xl tracking-[-.06em] lg:text-8xl">Technology being built for the real world.</h2></div><p className="max-w-xs text-sm leading-relaxed text-muted">Products and systems developed with practical intent, clear constraints and room to evolve.</p></div>
      <div className="mt-16 grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <div role="tablist" aria-label="Products" className="flex flex-col gap-3 lg:justify-center">
          {products.map((item, index) => <button key={item.slug} type="button" role="tab" aria-selected={index === activeIndex} aria-controls={`product-preview-${item.slug}`} onClick={() => selectProduct(index)} className={`group flex w-full items-center gap-3 rounded-full border px-5 py-3 text-left transition-colors ${index === activeIndex ? 'border-accent bg-accent text-background' : 'border-line text-muted hover:border-foreground/40 hover:text-foreground'}`}><span className={`font-mono text-xs ${index === activeIndex ? 'text-accent' : ''}`}>{String(index + 1).padStart(2, '0')}</span><span className="min-w-0 flex-1"><span className="flex items-center justify-between gap-3"><strong className="text-sm font-medium tracking-tight sm:text-base">{item.name}</strong><Status value={item.status} /></span>{index === activeIndex && <span className="mt-2 block h-px w-full overflow-hidden bg-current/20"><span className="block h-full origin-left bg-current transition-transform" style={{ transform: paused ? 'scaleX(.35)' : 'scaleX(1)' }} /></span>}</span></button>)}
          <button type="button" onClick={() => setPaused((value) => !value)} className="flex items-center gap-2 py-4 font-mono text-[10px] uppercase tracking-widest text-muted hover:text-accent" aria-label={paused ? 'Resume product rotation' : 'Pause product rotation'}>{paused ? <Play className="size-3" /> : <Pause className="size-3" />}{paused ? 'Resume rotation' : 'Pause rotation'}</button>
        </div>
          <div id={`product-preview-${active.slug}`} role="tabpanel" aria-live="polite" className="min-w-0">
            <div className="group relative isolate min-h-[28rem] overflow-hidden bg-background sm:min-h-[36rem]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,var(--background)_78%)]" />
              {stackItems.map(({ item, index, image, distance }) => {
                const isActive = distance === 0
                const visibleDistance = Math.min(distance, 3)
                return <div key={item.slug} aria-hidden={!isActive} className={`absolute inset-0 flex items-center justify-center ${reducedMotion ? 'transition-opacity duration-200' : 'transition-[transform,opacity,filter] duration-[800ms] ease-[cubic-bezier(.22,.8,.24,1)] will-change-[transform,opacity,filter]'}`} style={{ zIndex: isActive ? 20 : 10 - visibleDistance, opacity: isActive ? 1 : visibleDistance === 1 ? .58 : visibleDistance === 2 ? .3 : .14, transform: `translate(${isActive ? 0 : visibleDistance % 2 ? -5 : 5}%, ${isActive ? 0 : visibleDistance * 3}px) scale(${isActive ? 1 : 1 - visibleDistance * .055}) rotate(${isActive ? 0 : visibleDistance % 2 ? -1.2 : 1.2}deg)`, filter: isActive ? 'none' : `blur(${visibleDistance * 1.5}px) grayscale(${visibleDistance * 18}%)`, transformOrigin: isActive ? 'center center' : `${visibleDistance % 2 ? '42%' : '58%'} center`, transitionDelay: reducedMotion ? '0ms' : `${Math.max(0, 3 - visibleDistance) * 35}ms` }}>
                  <div className="relative w-[78%] overflow-hidden rounded-sm border border-line/80 bg-background/95 p-2 shadow-[0_24px_80px_rgba(0,0,0,.6)] sm:w-[64%] sm:p-3"><div className="flex items-center gap-2 border-b border-line pb-2"><span className="size-1.5 rounded-full bg-accent" /><span className="size-1.5 rounded-full bg-line" /><span className="size-1.5 rounded-full bg-line" /><span className="ml-2 truncate font-mono text-[9px] uppercase tracking-widest text-muted">live / {item.slug}</span></div><div className="flex min-h-[15rem] items-center justify-center overflow-hidden bg-panel p-5 sm:min-h-[22rem] sm:p-8"><img src={image} alt={isActive ? `${item.name} product interface` : ''} className="max-h-[20rem] max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]" /></div><div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/90 to-transparent px-5 pb-4 pt-20 transition-opacity duration-500 sm:px-7 sm:pb-6 ${isActive ? 'opacity-100' : 'pointer-events-none opacity-0'}`}><div className="eyebrow">{String(index + 1).padStart(2, '0')} · {item.status}</div><h3 className="mt-1 text-2xl tracking-[-.04em] sm:text-3xl">{item.name}</h3><p className="mt-1 max-w-md text-xs leading-relaxed text-muted sm:text-sm">{item.solution}</p><Link tabIndex={isActive ? 0 : -1} href={`/products/${item.slug}`} className="group/link mt-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-foreground hover:text-accent">Explore {item.name} <ArrowUpRight className="size-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" /></Link></div></div>
                </div>
              })}
            </div>
        </div>
      </div>
    </div>
  </section>
}
