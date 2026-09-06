import Link from 'next/link'
import { ArrowUpRight, Leaf, Sparkles } from 'lucide-react'
import { foundationFocus, foundationPrograms, foundationStats, foundationValues } from '@/data/foundation'

export const metadata = {
  title: 'Foundation — Natural Intellects',
  description: 'A people-first foundation for learning, creativity and a healthier digital future.',
}

export default function FoundationPage() {
  return (
    <main className="foundation-page min-h-screen overflow-hidden bg-[#f3eee4] text-[#17372f]">
      <header className="foundation-header mx-auto flex max-w-screen-2xl items-center justify-between gap-6 px-6 py-6 lg:px-10">
        <Link href="/" className="font-mono text-xs uppercase tracking-[0.24em] hover:text-[#ba553e]">Natural Intellects / Foundation</Link>
        <nav className="hidden items-center gap-6 font-mono text-[10px] uppercase tracking-[0.18em] md:flex" aria-label="Foundation navigation">
          <a href="#why">Why it exists</a><a href="#focus">Focus areas</a><a href="#programs">Programs</a><Link href="/contact" className="inline-flex items-center gap-2 border-b border-[#17372f] pb-1">Start a conversation <ArrowUpRight className="size-3" /></Link>
        </nav>
        <Link href="/contact" className="font-mono text-[10px] uppercase tracking-[0.18em] md:hidden">Contact <ArrowUpRight className="inline size-3" /></Link>
      </header>

      <section className="foundation-hero relative mx-auto grid max-w-screen-2xl gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:pb-36 lg:pt-24">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[#ba553e]"><Leaf className="size-4" /> A foundation for what comes next</div>
          <h1 className="max-w-4xl text-balance font-serif text-6xl leading-[.92] tracking-[-.07em] sm:text-8xl lg:text-[9.5rem]">Technology should leave people <em className="font-normal text-[#ba553e]">stronger.</em></h1>
          <p className="mt-10 max-w-xl text-lg leading-8 text-[#315247]">The Natural Intellects Foundation supports the human side of progress: confidence, creativity, opportunity and care for the world around us.</p>
          <div className="mt-10 flex flex-wrap items-center gap-5"><a href="#why" className="inline-flex items-center gap-3 rounded-full bg-[#17372f] px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-[#f3eee4] transition-transform hover:-translate-y-1">Explore the work <ArrowUpRight className="size-4" /></a><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6c8275]">A Natural Intellects initiative</span></div>
        </div>
        <div className="foundation-orbit relative min-h-[22rem] lg:min-h-0"><div className="absolute right-[5%] top-[8%] size-64 rounded-full border border-[#ba553e]/35 sm:size-80 lg:right-[10%] lg:top-[12%] lg:size-[28rem]" /><div className="absolute right-[18%] top-[20%] size-44 rounded-full border border-[#17372f]/25 sm:size-56 lg:right-[23%] lg:top-[24%] lg:size-64" /><div className="absolute right-[30%] top-[37%] size-20 rounded-full bg-[#ba553e] shadow-[12px_12px_0_#d6c4a5] sm:size-28 lg:right-[32%] lg:top-[38%] lg:size-36" /><Sparkles className="absolute right-[12%] top-[45%] size-7 text-[#ba553e]" /><p className="absolute bottom-0 right-0 max-w-[15rem] font-serif text-2xl leading-tight text-[#315247]">Small acts become shared momentum.</p></div>
      </section>

      <section id="why" className="border-y border-[#17372f]/15 bg-[#e8dfd0] px-6 py-20 lg:px-10 lg:py-28"><div className="mx-auto grid max-w-screen-2xl gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#ba553e]">Why it exists</div><h2 className="mt-5 max-w-md font-serif text-5xl leading-none tracking-[-.06em] sm:text-6xl">Progress is a practice.</h2></div><div className="max-w-2xl"><p className="text-2xl leading-relaxed text-[#315247]">We believe better technology is not only about what gets built. It is about who gets invited in, who gets to learn, and whether the result gives more back than it takes.</p><div className="mt-12 grid gap-8 border-t border-[#17372f]/20 pt-8 sm:grid-cols-3">{foundationStats.map((stat) => <div key={stat.label}><div className="font-serif text-5xl text-[#ba553e]">{stat.value}</div><div className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6c8275]">{stat.label}</div></div>)}</div></div></div></section>

      <section id="focus" className="mx-auto max-w-screen-2xl px-6 py-20 lg:px-10 lg:py-32"><div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#ba553e]">Where we put our energy</div><h2 className="mt-5 font-serif text-5xl leading-none tracking-[-.06em] sm:text-7xl">Three open doors.</h2></div><p className="max-w-xs text-sm leading-6 text-[#6c8275]">Focus areas are intentionally simple: useful, local and open to collaboration.</p></div><div className="grid gap-px overflow-hidden border border-[#17372f]/15 bg-[#17372f]/15 md:grid-cols-3">{foundationFocus.map((item) => <article key={item.number} className="bg-[#f3eee4] p-7 transition-colors hover:bg-[#e8dfd0] lg:p-10"><div className="font-mono text-xs text-[#ba553e]">{item.number}</div><h3 className="mt-20 font-serif text-3xl leading-none tracking-[-.04em]">{item.title}</h3><p className="mt-5 text-sm leading-6 text-[#6c8275]">{item.description}</p></article>)}</div></section>

      <section id="programs" className="bg-[#17372f] px-6 py-20 text-[#f3eee4] lg:px-10 lg:py-28"><div className="mx-auto max-w-screen-2xl"><div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#d6c4a5]">A living program</div><h2 className="mt-5 max-w-xl font-serif text-5xl leading-none tracking-[-.06em] sm:text-7xl">Work that starts close to home.</h2></div><p className="max-w-xs text-sm leading-6 text-[#c3d0c5]">The first chapters are taking shape through conversations, pilots and partnerships.</p></div><div className="mt-14 grid gap-0 border-t border-[#f3eee4]/20">{foundationPrograms.map((program, index) => <article key={program.title} className="grid gap-5 border-b border-[#f3eee4]/20 py-8 md:grid-cols-[.18fr_.35fr_1fr] md:items-start"><div className="font-mono text-xs text-[#d6c4a5]">0{index + 1}</div><div><div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#d6c4a5]">{program.meta}</div><h3 className="mt-3 font-serif text-3xl tracking-[-.04em]">{program.title}</h3></div><p className="max-w-md text-sm leading-6 text-[#c3d0c5]">{program.description}</p></article>)}</div></div></section>

      <section className="mx-auto grid max-w-screen-2xl gap-10 px-6 py-20 lg:grid-cols-[1fr_.8fr] lg:px-10 lg:py-28"><div><div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#ba553e]">A shared standard</div><h2 className="mt-5 max-w-2xl font-serif text-5xl leading-none tracking-[-.06em] sm:text-7xl">Make room. Share what works. Keep showing up.</h2></div><div className="flex flex-col justify-end gap-6"><p className="text-lg leading-8 text-[#315247]">These are the values we bring to every partnership, workshop and experiment.</p><ul className="border-t border-[#17372f]/20">{foundationValues.map((value) => <li key={value} className="border-b border-[#17372f]/20 py-4 font-mono text-xs uppercase tracking-[0.14em]">{value}</li>)}</ul></div></section>

      <footer className="border-t border-[#17372f]/15 px-6 py-8 lg:px-10"><div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#6c8275] sm:flex-row"><span>Natural Intellects Foundation</span><div className="flex gap-5"><Link href="/" className="hover:text-[#ba553e]">Return to Natural Intellects</Link><Link href="/contact" className="hover:text-[#ba553e]">Talk with us</Link></div></div></footer>
    </main>
  )
}
