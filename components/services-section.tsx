'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/data/site'

export function ServicesSection({ compact = false }: { compact?: boolean }) {
  const items = compact ? services.map(({ number, title }) => ({ number, title, description: '' })) : services
  return <section id={compact ? 'services' : undefined} className="reveal-section mx-auto max-w-screen-2xl border-t border-line px-6 py-24 lg:px-10 lg:py-36">
    <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div><div className="eyebrow">Services / Commercial layer</div><h2 className="mt-7 max-w-3xl text-5xl leading-[.95] tracking-[-.06em] lg:text-8xl">Technology that works for you.</h2></div>
      <p className="max-w-sm leading-relaxed text-muted">Practical technology for businesses, institutions and individuals.</p>
    </div>
    <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">{items.map((service, index) => <Link key={service.number} href="/services" className="group reveal-card flex min-h-48 flex-col justify-between bg-background p-6 transition-transform hover:-translate-y-1 hover:bg-panel sm:p-8" style={{ animationDelay: `${index * 70}ms` }}><div className="flex items-start justify-between"><span className="eyebrow transition-colors group-hover:text-accent">{service.number}</span><ArrowUpRight className="size-4 text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" /></div><h3 className="max-w-xs text-xl leading-tight tracking-tight transition-colors group-hover:text-accent">{service.title}</h3>{service.description && <p className="mt-4 text-sm leading-relaxed text-muted">{service.description}</p>}</Link>)}</div>
    {compact && <Link href="/services" className="group mt-8 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest hover:text-accent">View all services <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>}
  </section>
}
