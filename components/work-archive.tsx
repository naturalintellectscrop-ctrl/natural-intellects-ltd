import Image from 'next/image'
import { workArchive } from '@/data/site'

export function WorkArchive() {
  const items = [...workArchive, ...workArchive]
  return (
    <section id="work" className="reveal-section overflow-hidden border-y border-line py-24 lg:py-32" aria-labelledby="work-heading">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div><div className="eyebrow">Selected work / archive</div><h2 id="work-heading" className="mt-5 text-4xl tracking-[-.04em] lg:text-6xl">Work that leaves a trace.</h2></div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">A visual index of supplied work materials. No external destinations implied.</p>
        </div>
      </div>
      <div className="marquee mt-10 overflow-hidden border-y border-line" aria-label="Selected work logos">
        <div className="marquee-track flex w-max gap-4 py-4 pr-4">
          {items.map((item, index) => <div key={`${item.name}-${index}`} className="work-logo group flex h-36 w-64 shrink-0 items-center justify-center border border-line bg-panel px-8 py-6 transition-colors hover:border-accent sm:w-72" title={item.name}>
            <Image src={item.logo} alt={item.name} width={item.width} height={item.height} className="max-h-20 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-110" />
          </div>)}
        </div>
      </div>
      <div className="mx-auto mt-5 flex max-w-screen-2xl items-center justify-between px-6 font-mono text-[10px] uppercase tracking-[.18em] text-muted lg:px-10"><span>07 supplied assets</span><span>Hover to pause</span></div>
    </section>
  )
}
