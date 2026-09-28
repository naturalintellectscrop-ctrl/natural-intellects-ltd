import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Orbit } from 'lucide-react'
import { audiences, buildLoop, buildSequence, capabilities, dimensions, innovation, niFacts, team, timeline } from '@/data/site'
import { foundationFocus, foundationProjects } from '@/data/foundation'
import { media } from '@/data/media'
import { SiteNav, Status } from '@/components/site-chrome'
import { WorkArchive } from '@/components/work-archive'
import { ServicesSection } from '@/components/services-section'
import { PaintRevealText } from '@/components/paint-reveal-text'
import { ProductsShowcase } from '@/components/products-showcase'
import { PhotoPlate } from '@/components/photo-plate'

const Card = ({ href, number, title, description, status }: { href: string; number?: string; title: string; description: string; status?: string }) => <Link href={href} className="group reveal-card flex min-h-64 flex-col justify-between border border-line bg-panel p-6 hover:-translate-y-1 hover:border-accent sm:p-8"><div className="flex items-start justify-between gap-4"><span className="eyebrow">{number ?? 'NI'}</span>{status && <Status value={status} />}</div><div><h3 className="text-2xl tracking-tight group-hover:text-accent">{title}</h3><p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{description}</p><ArrowUpRight className="mt-7 size-5 text-muted group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" /></div></Link>

export default function Home() {
  return <main id="main"><SiteNav />

  {/* WHAT NI IS — identity kept, explained in plain language immediately */}
  <section id="top" className="grid-lines relative flex min-h-[760px] items-end overflow-hidden border-b border-line px-6 pb-20 pt-40 lg:min-h-screen lg:px-10 lg:pb-24">
    <div className="technical-orbit pointer-events-none absolute right-[-8%] top-[18%] size-[560px] rounded-full border border-accent/50 p-20 lg:size-[760px] lg:p-28"><Orbit className="absolute -left-4 top-1/2 size-8 text-accent" /></div>
    <div className="relative mx-auto w-full max-w-screen-2xl">
      <div className="eyebrow mb-8 reveal">Uganda / Technology &amp; Innovation</div>
      <h1 className="max-w-6xl text-balance text-[clamp(3.8rem,10vw,9.8rem)] font-medium leading-[.88] tracking-[-.075em] reveal"><PaintRevealText accessibleLabel="Tech Over, NI." className="paint-hero" radius={42}>Tech<br /><span className="text-accent" aria-hidden="true">Over,</span> NI.</PaintRevealText></h1>
      <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted reveal sm:text-xl">Natural Intellects is a Ugandan technology &amp; innovation company. We build practical digital products, business systems and software platforms — and explore the technologies that come next.</p>
      <div className="mt-10 flex flex-wrap items-center gap-5">
        <Link href="/contact" className="group flex items-center gap-3 border border-foreground bg-foreground px-5 py-4 font-mono text-xs uppercase tracking-widest text-background transition-colors hover:border-accent hover:bg-accent hover:text-foreground">Start a conversation <ArrowUpRight className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
        <Link href="#products" className="group flex items-center gap-3 border border-line px-5 py-4 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:border-accent hover:text-accent">See what NI builds <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
      </div>
      <div className="mt-14 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-4 border-t border-line pt-6 sm:grid-cols-4">{niFacts.map((fact) => <div key={fact.label}><div className="font-mono text-[10px] uppercase tracking-[.18em] text-muted">{fact.label}</div><div className="mt-1 font-mono text-sm text-foreground">{fact.value}</div></div>)}</div>
    </div>
  </section>

  {/* 01 / THE COMPANY — orientation map: how the four dimensions of NI relate */}
  <section id="about" className="reveal-section mx-auto grid max-w-screen-2xl gap-16 px-6 py-28 lg:grid-cols-[.75fr_1.25fr] lg:px-10 lg:py-40">
    <div>
      <div className="eyebrow">01 / What NI is</div>
      <h2 className="mt-8 max-w-md text-4xl leading-tight tracking-[-.04em] lg:text-6xl">One company, four connected dimensions.</h2>
      <p className="mt-8 max-w-sm leading-relaxed text-muted">NI is broader than a digital agency. The same engineering mindset runs through client work, own products, research and social impact.</p>
      <p className="mt-6 font-mono text-xs uppercase tracking-[.18em] text-muted">Building since 2023 · Officially registered 2026</p>
    </div>
    <div className="ni-system max-w-3xl border-y border-line">
      {dimensions.map((d) => <Link key={d.number} href={d.href} className="group flex flex-col gap-2 border-b border-line py-6 transition-colors last:border-0 hover:bg-panel sm:flex-row sm:items-center sm:gap-8"><span className="font-mono text-xs text-accent">{d.number}</span><div className="min-w-0 flex-1"><h3 className="text-xl tracking-tight transition-colors group-hover:text-accent sm:text-2xl">{d.title}</h3><p className="mt-1 max-w-lg text-sm leading-relaxed text-muted">{d.description}</p></div><span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[.18em] text-muted group-hover:text-accent md:inline">{d.meta}</span><ArrowUpRight className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" /></Link>)}
    </div>
  </section>

  {/* 02 / WHAT NI DOES — editorial ledger: four working lenses with the concrete work each one holds */}
  <section id="capabilities" className="reveal-section border-y border-line px-6 py-24 lg:px-10 lg:py-32">
    <div className="mx-auto grid max-w-screen-2xl gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="eyebrow">02 / What NI does</div>
        <h2 className="mt-6 text-5xl tracking-[-.06em] lg:text-6xl">Four working lenses.</h2>
        <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted">Every service NI offers, product NI builds and concept NI explores falls under one of these capabilities.</p>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">Not sure where your need sits? The <a href="#services" className="text-foreground underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent">services index</a> maps each engagement onto its lens.</p>
      </div>
      <div className="ni-lens border-y border-line">
        {capabilities.map((item) => <Link key={item.slug} href={`/capabilities/${item.slug}`} className="group grid grid-cols-[auto_1fr_auto] items-start gap-x-5 border-b border-line py-7 transition-colors last:border-0 hover:bg-panel sm:gap-x-10 sm:py-9"><span className="ghost-number font-mono text-4xl leading-none transition-colors sm:text-6xl" aria-hidden="true">{item.number}</span><div className="min-w-0"><h3 className="text-2xl tracking-tight transition-colors group-hover:text-accent sm:text-3xl">{item.title}</h3><p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">{item.description}</p><p className="mt-4 font-mono text-[10px] uppercase tracking-[.18em] text-muted">{item.projects.length.toString().padStart(2, '0')} linked {item.projects.length > 1 ? 'projects' : 'project'} · {item.slug}</p></div><ArrowUpRight className="mt-2 size-5 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" /></Link>)}
      </div>
    </div>
  </section>

  <ProductsShowcase />

  {/* 04 / WHO NI BUILDS FOR — image-led: the real-world contexts, then the audiences */}
  <section id="built-for" className="reveal-section mx-auto max-w-screen-2xl px-6 py-24 lg:px-10 lg:py-28">
    <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><div className="eyebrow">04 / Who NI builds for</div><h2 className="mt-6 max-w-3xl text-4xl tracking-[-.05em] lg:text-6xl">Built for people doing real work.</h2></div><p className="max-w-sm text-sm leading-relaxed text-muted">The same practical intent, applied at different scales — from a single business to a national institution.</p></div>
    <PhotoPlate media={media.builtFor} className="mt-12" photoClassName="h-[280px] sm:h-[400px] lg:h-[480px]" sizes="(max-width:1536px) 100vw, 1440px" />
    <div className="mt-4 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">{audiences.map((item) => <div key={item.number} className="reveal-card bg-background p-6 sm:p-7"><div className="flex items-center justify-between"><span className="font-mono text-xs text-accent">{item.number}</span></div><h3 className="mt-5 text-xl tracking-tight">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p></div>)}</div>
  </section>

  {/* 05 / EVIDENCE — real work, moved up the journey */}
  <WorkArchive eyebrow="05 / Evidence" />

  {/* 06 / HOW NI BUILDS — verified working sequence from NI's engineering documentation, paired with engineering evidence */}
  <section id="how" className="reveal-section border-y border-line px-6 py-24 lg:px-10 lg:py-32">
    <div className="mx-auto grid max-w-screen-2xl gap-14 lg:grid-cols-2 lg:gap-16">
      <div>
        <div className="eyebrow">06 / How NI builds</div>
        <h2 className="mt-6 max-w-md text-4xl leading-tight tracking-[-.05em] lg:text-6xl">Systems first. Interfaces follow.</h2>
        <p className="mt-8 max-w-md leading-relaxed text-muted">NI treats software as engineering, not decoration. Work is documented as an explicit sequence, and progress is measured against the system — not the screenshot.</p>
        <p className="mt-6 border-l-2 border-accent pl-5 text-lg leading-snug text-foreground/80">A finished interface is not the same thing as a finished system.</p>
        <div className="mt-12 max-w-lg">
          <div className="font-mono text-[10px] uppercase tracking-[.18em] text-muted">The working sequence</div>
          <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-3">{buildSequence.map((step, i) => <span key={step} className="flex items-center gap-2"><span className={`border px-3 py-2 font-mono text-xs uppercase tracking-widest ${i === 0 || i === buildSequence.length - 1 ? 'border-accent text-accent' : 'border-line text-foreground'}`}>{step}</span>{i < buildSequence.length - 1 && <ArrowRight className="size-3 text-muted" aria-hidden="true" />}</span>)}</div>
        </div>
      </div>
      <div className="max-w-xl">
        <PhotoPlate media={media.engineering} photoClassName="h-[260px] sm:h-[340px] lg:h-[400px]" sizes="(max-width:1024px) 100vw, 45vw" />
        <div className="mt-8">
          <div className="font-mono text-[10px] uppercase tracking-[.18em] text-muted">The practical loop</div>
          <div className="mt-5 grid gap-4 grid-cols-2 sm:grid-cols-5">{buildLoop.map((step, i) => <div key={step} className="border-t border-line pt-3"><span className="font-mono text-xs text-accent">0{i + 1}</span><div className="mt-2 text-sm">{step}</div></div>)}</div>
        </div>
      </div>
    </div>
  </section>

  {/* 07 / SERVICES — what can be engaged, now inside the main journey */}
  <ServicesSection eyebrow="07 / Services · engage NI" intro="Practical technology for businesses, institutions and individuals. Services are work you can engage NI to perform — distinct from the products NI builds on its own." />

  {/* 08 / INNOVATION — exploration stays clearly distinct from commercial products */}
  <section id="innovation" className="reveal-section border-y border-line px-6 py-24 lg:px-10 lg:py-32">
    <div className="mx-auto max-w-screen-2xl">
      <div className="eyebrow">08 / Innovation · NI Lab</div>
      <h2 className="mt-6 max-w-3xl text-5xl tracking-[-.06em] lg:text-7xl">There&apos;s No Earth 2.</h2>
      <p className="mt-8 max-w-xl text-muted leading-relaxed">A lab for responsible ideas across mobility, education, sustainability and digital independence. Every concept below is an exploration or research direction — clearly marked, never presented as a deployed product.</p>
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{innovation.map((item) => <Card key={item.slug} href={`/innovation/${item.slug}`} title={item.name} description={item.description} status={item.status} />)}</div>
    </div>
  </section>

  {/* 09 / FOUNDATION — the social-impact arm, visually distinct, image-led, never sold */}
  <section id="foundation" className="reveal-section relative overflow-hidden border-y border-line bg-[var(--foundation-background)] px-6 py-24 text-[var(--foundation-text)] lg:px-10 lg:py-32">
    <div className="mx-auto max-w-screen-2xl">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-16">
        <PhotoPlate media={media.foundation} variant="foundation" className="order-2 lg:order-1" photoClassName="h-[280px] sm:h-[360px] lg:h-[430px]" sizes="(max-width:1024px) 100vw, 50vw" />
        <div className="order-1 lg:order-2">
          <div className="font-mono text-[10px] uppercase tracking-[.24em] text-[var(--foundation-orange)]">09 / Natural Intellects Foundation · One Life at a Time.</div>
          <h2 className="mt-6 max-w-3xl text-5xl leading-[.95] tracking-[-.06em] lg:text-7xl">Technology in service of people.</h2>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-[var(--foundation-muted)]">The Foundation is NI&apos;s social-impact arm — separate from commercial work. It focuses on people, access, learning and opportunity: making sure technology reaches the people who need it, one life at a time.</p>
        </div>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">{foundationFocus.map((item) => <div key={item.number} className="reveal-card border border-[var(--foundation-text)]/15 bg-[var(--foundation-surface)] p-6 sm:p-8"><span className="font-mono text-xs text-[var(--foundation-orange)]">{item.number}</span><h3 className="mt-5 text-xl tracking-tight sm:text-2xl">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-[var(--foundation-muted)]">{item.description}</p></div>)}</div>
      <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="reveal-card flex flex-col justify-between gap-6 border border-[var(--foundation-text)]/15 bg-[var(--foundation-surface)] p-6 sm:p-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <div className="flex items-center gap-3"><h3 className="text-2xl tracking-tight">{foundationProjects.deepPress.name}</h3><span className="border border-[var(--foundation-orange)] px-2 py-1 font-mono text-[9px] uppercase tracking-[.14em] text-[var(--foundation-orange)]">{foundationProjects.deepPress.status}</span></div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--foundation-muted)]">{foundationProjects.deepPress.shortDescription}</p>
            <p className="mt-3 font-mono text-[9px] uppercase tracking-[.16em] text-[var(--foundation-muted)]">A Foundation initiative — not a commercial NI product, medical service or therapist.</p>
          </div>
          <Link href={foundationProjects.deepPress.route} className="group inline-flex shrink-0 items-center gap-3 self-start border border-[var(--foundation-primary)] px-5 py-4 font-mono text-[10px] uppercase tracking-widest text-[var(--foundation-primary)] transition-colors hover:bg-[var(--foundation-primary)] hover:text-white lg:self-center">Explore Deep Press <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
        </div>
        <Link href="/foundation" className="reveal-card group flex min-h-44 flex-col justify-between border border-[var(--foundation-text)] bg-[var(--foundation-text)] p-6 text-[var(--foundation-background)] sm:p-8"><span className="font-mono text-[10px] uppercase tracking-[.2em] text-[var(--foundation-yellow)]">Foundation</span><div><div className="text-3xl leading-none tracking-[-.04em]">One Life<br /><em className="font-normal text-[var(--foundation-yellow)]">at a Time.</em></div><span className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[var(--foundation-surface)]/80 group-hover:text-[var(--foundation-yellow)]">Visit the Foundation <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span></div></Link>
      </div>
    </div>
  </section>

  {/* 10 / COMPANY RECORD — timeline and team, compact */}
  <section id="team" className="reveal-section mx-auto max-w-screen-2xl px-6 py-24 lg:px-10 lg:py-32">
    <div className="eyebrow">10 / Company record</div>
    <div className="mt-12 grid gap-16 lg:grid-cols-2">
      <div>
        <h2 className="text-2xl tracking-tight lg:text-3xl">Timeline</h2>
        <div className="mt-8 grid gap-8 border-l border-line pl-6">{timeline.map(([year, label, text]) => <div key={label} className="timeline-item border-b border-line pb-6 last:border-0"><div className="flex flex-wrap items-baseline gap-4"><span className="font-mono text-accent">{year}</span><h3 className="text-lg">{label}</h3></div><p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{text}</p></div>)}</div>
      </div>
      <div>
        <h2 className="text-2xl tracking-tight lg:text-3xl">People</h2>
        <div className="mt-8 grid gap-px bg-line">{team.map((person) => <div key={person.name} className="team-entry bg-panel p-6 sm:p-7"><h3 className="text-xl">{person.name}</h3><p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-accent">{person.role}</p><p className="mt-4 text-sm leading-relaxed text-muted">{person.bio}</p></div>)}</div>
      </div>
    </div>
  </section>

  {/* CONTACT */}
  <section id="contact" className="grid-lines reveal-section border-t border-line px-6 py-28 lg:px-10 lg:py-40">
    <div className="mx-auto flex w-full max-w-screen-2xl flex-col justify-between gap-12 lg:flex-row lg:items-end">
      <div>
        <div className="eyebrow">Contact</div>
        <h2 className="mt-6 max-w-3xl text-5xl tracking-[-.06em] lg:text-8xl">Make the next<br /><span className="text-accent">useful.</span></h2>
        <p className="mt-8 max-w-md leading-relaxed text-muted">Tell NI what you are trying to build, improve or digitize — a website, a system, a platform or something more experimental.</p>
      </div>
      <Link href="/contact" className="group flex items-center gap-3 border border-foreground px-5 py-4 font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent"><PaintRevealText radius={24} background className="px-1">Start a conversation</PaintRevealText> <ArrowUpRight className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
    </div>
  </section>
</main> }
