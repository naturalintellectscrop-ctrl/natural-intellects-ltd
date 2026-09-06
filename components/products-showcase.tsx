'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Pause, Play } from 'lucide-react'
import { products } from '@/data/site'
import { Status } from '@/components/site-chrome'

const previewImages: Record<string, string> = {
  'smart-ride': '/work-done/smart-ride.png',
  'house-for-rent': '/work-done/house-for-rent.jpg',
  nisms: '/ni-logo-updated.png',
  disms: '/ni-logo-updated.png',
  'employee-reporting': '/ni-logo-updated.png',
  ticketug: '/ni-logo-updated.png',
}

export function ProductsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const active = products[activeIndex]
  const preview = useMemo(() => previewImages[active.slug] ?? '/ni-logo-updated.png', [active.slug])

  const selectProduct = useCallback((index: number) => {
    setActiveIndex(index)
    setPaused(true)
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => setPaused(false), 7000)
  }, [])

  useEffect(() => () => { if (resumeTimer.current) clearTimeout(resumeTimer.current) }, [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => setActiveIndex((index) => (index + 1) % products.length), 5200)
    return () => clearInterval(timer)
  }, [paused])

  return <section id="products" className="reveal-section border-y border-line bg-panel/30 px-6 py-24 lg:px-10 lg:py-32" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
    <div className="mx-auto max-w-screen-2xl">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><div className="eyebrow">03 / Products</div><h2 className="mt-6 max-w-3xl text-5xl tracking-[-.06em] lg:text-8xl">Technology being built for the real world.</h2></div><p className="max-w-xs text-sm leading-relaxed text-muted">Products and systems developed with practical intent, clear constraints and room to evolve.</p></div>
      <div className="mt-16 grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <div role="tablist" aria-label="Products" className="divide-y divide-line border-y border-line">
          {products.map((item, index) => <button key={item.slug} type="button" role="tab" aria-selected={index === activeIndex} aria-controls={`product-preview-${item.slug}`} onClick={() => selectProduct(index)} className={`group flex w-full items-start gap-4 py-6 text-left transition-colors ${index === activeIndex ? 'text-foreground' : 'text-muted hover:text-foreground'}`}><span className={`font-mono text-xs ${index === activeIndex ? 'text-accent' : ''}`}>{String(index + 1).padStart(2, '0')}</span><span className="min-w-0 flex-1"><span className="flex items-center justify-between gap-4"><strong className="text-xl font-medium tracking-tight">{item.name}</strong><Status value={item.status} /></span><span className="mt-2 block text-sm leading-relaxed">{item.overview}</span>{index === activeIndex && <span className="mt-5 block h-px w-full overflow-hidden bg-line"><span className="block h-full origin-left bg-accent transition-transform" style={{ transform: paused ? 'scaleX(.35)' : 'scaleX(1)' }} /></span>}</span></button>)}
          <button type="button" onClick={() => setPaused((value) => !value)} className="flex items-center gap-2 py-4 font-mono text-[10px] uppercase tracking-widest text-muted hover:text-accent" aria-label={paused ? 'Resume product rotation' : 'Pause product rotation'}>{paused ? <Play className="size-3" /> : <Pause className="size-3" />}{paused ? 'Resume rotation' : 'Pause rotation'}</button>
        </div>
        <div id={`product-preview-${active.slug}`} role="tabpanel" aria-live="polite" className="min-w-0">
          <div className="relative overflow-hidden border border-line bg-background p-3 shadow-[0_24px_70px_rgba(0,0,0,.22)] sm:p-5"><div className="flex items-center gap-2 border-b border-line pb-3"><span className="size-2 rounded-full bg-accent" /><span className="size-2 rounded-full bg-line" /><span className="size-2 rounded-full bg-line" /><span className="ml-3 font-mono text-[10px] uppercase tracking-widest text-muted">naturalintellects / {active.slug}</span></div><div className="flex min-h-[19rem] items-center justify-center overflow-hidden bg-panel p-8 transition-all duration-500 sm:min-h-[28rem]"><img src={preview} alt={`${active.name} product mark`} className="max-h-64 max-w-[70%] object-contain transition-transform duration-700 hover:scale-105" /></div></div>
          <div className="mt-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><div className="eyebrow">{active.category}</div><p className="mt-3 max-w-xl text-lg leading-relaxed">{active.solution}</p></div><Link href={`/products/${active.slug}`} className="group inline-flex shrink-0 items-center gap-2 border-b border-foreground/40 pb-3 font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent">Explore product <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link></div>
        </div>
      </div>
    </div>
  </section>
}
