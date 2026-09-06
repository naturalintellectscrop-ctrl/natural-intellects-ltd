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
        <div role="tablist" aria-label="Products" className="flex flex-col gap-3 lg:justify-center">
          {products.map((item, index) => <button key={item.slug} type="button" role="tab" aria-selected={index === activeIndex} aria-controls={`product-preview-${item.slug}`} onClick={() => selectProduct(index)} className={`group flex w-full items-center gap-3 rounded-full border px-5 py-3 text-left transition-colors ${index === activeIndex ? 'border-accent bg-accent text-background' : 'border-line text-muted hover:border-foreground/40 hover:text-foreground'}`}><span className={`font-mono text-xs ${index === activeIndex ? 'text-accent' : ''}`}>{String(index + 1).padStart(2, '0')}</span><span className="min-w-0 flex-1"><span className="flex items-center justify-between gap-3"><strong className="text-sm font-medium tracking-tight sm:text-base">{item.name}</strong><Status value={item.status} /></span>{index === activeIndex && <span className="mt-2 block h-px w-full overflow-hidden bg-current/20"><span className="block h-full origin-left bg-current transition-transform" style={{ transform: paused ? 'scaleX(.35)' : 'scaleX(1)' }} /></span>}</span></button>)}
          <button type="button" onClick={() => setPaused((value) => !value)} className="flex items-center gap-2 py-4 font-mono text-[10px] uppercase tracking-widest text-muted hover:text-accent" aria-label={paused ? 'Resume product rotation' : 'Pause product rotation'}>{paused ? <Play className="size-3" /> : <Pause className="size-3" />}{paused ? 'Resume rotation' : 'Pause rotation'}</button>
        </div>
          <div id={`product-preview-${active.slug}`} role="tabpanel" aria-live="polite" className="min-w-0">
            <div className="group relative isolate min-h-[26rem] overflow-hidden bg-background sm:min-h-[34rem]" key={active.slug}>
              <div className="absolute inset-0 overflow-hidden opacity-45"><img src={preview} alt="" aria-hidden="true" className="absolute left-[58%] top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 scale-125 object-contain blur-xl grayscale transition-all duration-700" /><img src={preview} alt="" aria-hidden="true" className="absolute left-[42%] top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 scale-125 object-contain blur-2xl grayscale opacity-50 transition-all duration-700" /></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_62%_48%,transparent_8%,var(--background)_72%)]" />
              <div className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_24px_var(--accent)]" />
              <div className="relative z-10 flex min-h-[26rem] items-center justify-center p-8 sm:min-h-[34rem] sm:p-12"><div className="w-[72%] overflow-hidden border border-line/80 bg-background/95 p-2 shadow-[0_24px_80px_rgba(0,0,0,.6)] transition-transform duration-700 group-hover:-translate-y-2 sm:w-[62%] sm:p-3"><div className="flex items-center gap-2 border-b border-line pb-2"><span className="size-1.5 rounded-full bg-accent" /><span className="size-1.5 rounded-full bg-line" /><span className="size-1.5 rounded-full bg-line" /><span className="ml-2 truncate font-mono text-[9px] uppercase tracking-widest text-muted">live / {active.slug}</span></div><div className="flex min-h-[14rem] items-center justify-center overflow-hidden bg-panel p-5 sm:min-h-[20rem] sm:p-8"><img src={preview} alt={`${active.name} product interface`} className="max-h-[18rem] max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]" /></div></div></div>
              <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-4 bg-gradient-to-t from-background via-background/70 to-transparent px-6 pb-5 pt-20 sm:px-10 sm:pb-7"><div><div className="eyebrow">{String(activeIndex + 1).padStart(2, '0')} · {active.status}</div><h3 className="mt-2 text-2xl tracking-[-.04em] sm:text-3xl">{active.name}</h3></div><Link href={`/products/${active.slug}`} className="group/link inline-flex shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-foreground hover:text-accent">Explore <ArrowUpRight className="size-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" /></Link></div>
            </div>
        </div>
      </div>
    </div>
  </section>
}
