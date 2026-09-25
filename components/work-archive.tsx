'use client'

import Image from 'next/image'
import { Pause, Play } from 'lucide-react'
import { useRef, useState } from 'react'
import { workArchive } from '@/data/site'

export function WorkArchive() {
  const [paused, setPaused] = useState(false)
  const [dragging, setDragging] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const dragStart = useRef({ x: 0, scroll: 0 })
  const items = [...workArchive, ...workArchive]

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    const marquee = event.currentTarget
    dragStart.current = { x: event.clientX, scroll: marquee.scrollLeft }
    setDragging(true)
    marquee.setPointerCapture(event.pointerId)
  }
  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!dragging) return
    event.currentTarget.scrollLeft = dragStart.current.scroll - (event.clientX - dragStart.current.x)
  }
  function onPointerUp(event: React.PointerEvent<HTMLDivElement>) {
    setDragging(false)
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  return (
    <section id="work" className="reveal-section overflow-hidden border-y border-line py-24 lg:py-32" aria-labelledby="work-heading">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div><div className="eyebrow">Selected work / archive</div><h2 id="work-heading" className="mt-5 text-4xl tracking-[-.04em] lg:text-6xl">Work that leaves a trace.</h2></div>
          <div className="flex items-end gap-6"><p className="max-w-xs text-sm leading-relaxed text-muted">A visual index of supplied work materials. No external destinations implied.</p><button type="button" onClick={() => setPaused((value) => !value)} className="archive-toggle flex shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted hover:text-accent" aria-label={paused ? 'Resume archive movement' : 'Pause archive movement'}>{paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}{paused ? 'Resume' : 'Pause'}</button></div>
        </div>
      </div>
      <div className={`marquee mt-10 overflow-x-auto border-y border-line ${dragging ? 'is-dragging' : ''}`} aria-label="Selected work logos" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}>
        <div ref={trackRef} className={`marquee-track flex w-max gap-4 py-4 pr-4 ${paused ? 'is-paused' : ''}`}>
          {items.map((item, index) => <div key={`${item.name}-${index}`} className="work-logo group flex h-36 w-64 shrink-0 items-center justify-center border border-line bg-transparent px-8 py-6 transition-all hover:border-accent sm:w-72" title={item.name}>
            <Image src={item.logo} alt={item.name} width={item.width} height={item.height} className="ni-logo max-h-24 w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-110" />
          </div>)}
        </div>
      </div>
      <div className="mx-auto mt-5 flex max-w-screen-2xl items-center justify-between px-6 font-mono text-[10px] uppercase tracking-[.18em] text-muted lg:px-10"><span>{workArchive.length.toString().padStart(2, '0')} supplied assets</span><span>Drag / hover to explore</span></div>
    </section>
  )
}
