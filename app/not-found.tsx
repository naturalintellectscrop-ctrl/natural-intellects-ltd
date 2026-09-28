import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteNav } from '@/components/site-chrome'

export const metadata = { title: 'Page not found', description: 'The page you are looking for does not exist on naturalintellects.com.' }

export default function NotFound() {
  return <main id="main" className="grid-lines flex min-h-screen flex-col justify-center px-6 pb-24 pt-40 lg:px-10"><SiteNav /><div className="mx-auto w-full max-w-screen-2xl"><div className="eyebrow">Error / 404</div><h1 className="mt-8 max-w-4xl text-6xl leading-[.9] tracking-[-.07em] lg:text-9xl">Signal not found.</h1><p className="mt-8 max-w-md leading-relaxed text-muted">The route you requested does not exist on this system. It may have moved, or it was never deployed.</p><div className="mt-12 flex flex-wrap gap-4"><Link href="/" className="group flex items-center gap-3 border border-foreground px-5 py-4 font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent">Back to homepage <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link><Link href="/contact" className="flex items-center gap-3 border border-line px-5 py-4 font-mono text-xs uppercase tracking-widest text-muted hover:border-accent hover:text-accent">Contact NI</Link></div></div></main>
}
