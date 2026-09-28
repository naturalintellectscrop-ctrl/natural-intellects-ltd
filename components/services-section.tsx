'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/data/site'
import { media } from '@/data/media'
import { PaintRevealText } from '@/components/paint-reveal-text'
import { PhotoPlate } from '@/components/photo-plate'

/**
 * Services — split editorial composition: sticky engagement framing + contextual
 * "technology in use" plate on the left, a full service ledger on the right.
 * Each ledger row surfaces the capability lens the engagement falls under
 * (verified mapping from the services record — no invented relations).
 */
export function ServicesSection({ compact = false, eyebrow = 'Services / Commercial layer', intro }: { compact?: boolean; eyebrow?: string; intro?: string }) {
  const items = compact ? services.map(({ number, title, description }) => ({ number, title, description })) : services
  const capabilityByNumber = new Map(services.map((service) => [service.number, service.capability]))
  return <section id="services" className="reveal-section mx-auto max-w-screen-2xl border-t border-line px-6 py-24 lg:px-10 lg:py-36">
    <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="mt-7 text-5xl leading-[.95] tracking-[-.06em] lg:text-7xl">Technology that works for you.</h2>
        <p className="mt-8 max-w-md leading-relaxed text-muted">{intro ?? 'Practical technology for businesses, institutions and individuals. Services are work you can engage NI to perform — distinct from the products NI builds.'}</p>
        <PhotoPlate media={media.inUse} className="mt-10 max-w-lg" photoClassName="h-[220px] sm:h-[300px] lg:h-[340px]" sizes="(max-width:1024px) 100vw, 40vw" />
      </div>
      <div className="border-y border-line">
        {items.map((service, index) => <Link key={service.number} href="/services" className="group grid grid-cols-[auto_1fr_auto] items-start gap-x-5 border-b border-line py-7 transition-colors last:border-0 hover:bg-panel sm:gap-x-10 sm:py-8" style={{ animationDelay: `${index * 70}ms` }}><span className="ghost-number font-mono text-2xl leading-none transition-colors sm:text-3xl" aria-hidden="true">{service.number}</span><div className="min-w-0"><h3 className="max-w-md text-xl leading-tight tracking-tight transition-colors group-hover:text-accent sm:text-2xl">{service.title}</h3>{service.description && <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{service.description}</p>}{capabilityByNumber.get(service.number) && <p className="mt-3 font-mono text-[10px] uppercase tracking-[.18em] text-muted">Lens · {capabilityByNumber.get(service.number)}</p>}</div><ArrowUpRight className="mt-1 size-4 shrink-0 text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" /></Link>)}
      </div>
    </div>
    {compact && <Link href="/services" className="group mt-8 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest hover:text-accent"><PaintRevealText radius={24} background className="px-1">View all services</PaintRevealText> <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>}
  </section>
}
