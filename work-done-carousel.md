# Work Done Carousel

This is the code used for the Natural Intellects “Selected work / archive” carousel, with all logo assets removed. Replace each `logo` value in the data example with your own image path.

## `components/work-archive.tsx`

```tsx
'use client'

import Image from 'next/image'
import { Pause, Play } from 'lucide-react'
import { useRef, useState } from 'react'
import { workArchive } from '@/data/site'

export function WorkArchive() {
  const [paused, setPaused] = useState(false)
  const [dragging, setDragging] = useState(false)
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
    event.currentTarget.scrollLeft =
      dragStart.current.scroll - (event.clientX - dragStart.current.x)
  }

  function onPointerUp(event: React.PointerEvent<HTMLDivElement>) {
    setDragging(false)
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  return (
    <section
      id="work"
      className="reveal-section overflow-hidden border-y border-line py-24 lg:py-32"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="eyebrow">Selected work / archive</div>
            <h2 id="work-heading" className="mt-5 text-4xl tracking-[-.04em] lg:text-6xl">
              Work that leaves a trace.
            </h2>
          </div>

          <div className="flex items-end gap-6">
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              A visual index of selected work.
            </p>
            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              className="archive-toggle flex shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted hover:text-accent"
              aria-label={paused ? 'Resume archive movement' : 'Pause archive movement'}
            >
              {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
              {paused ? 'Resume' : 'Pause'}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`marquee mt-10 overflow-x-auto border-y border-line ${dragging ? 'is-dragging' : ''}`}
        aria-label="Selected work items"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div className={`marquee-track flex w-max gap-4 py-4 pr-4 ${paused ? 'is-paused' : ''}`}>
          {items.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="work-logo group flex h-36 w-64 shrink-0 items-center justify-center border border-line bg-transparent px-8 py-6 transition-all hover:border-accent sm:w-72"
              title={item.name}
            >
              {/* Replace this placeholder with your own logo/image. */}
              <div
                className="flex h-full w-full items-center justify-center text-center font-mono text-xs uppercase tracking-[.18em] text-muted"
                aria-label={`${item.name} logo placeholder`}
              >
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-5 flex max-w-screen-2xl items-center justify-between px-6 font-mono text-[10px] uppercase tracking-[.18em] text-muted lg:px-10">
        <span>{workArchive.length.toString().padStart(2, '0')} selected items</span>
        <span>Drag / hover to explore</span>
      </div>
    </section>
  )
}
```

## `data/site.ts`

Use your own image paths in the `logo` fields. The carousel itself does not depend on any specific logo filenames.

```ts
export const workArchive = [
  { name: 'ACA', logo: '/your-assets/aca.png' },
  { name: 'Aicher IT', logo: '/your-assets/aicher-it.png' },
  { name: 'Daily Sports', logo: '/your-assets/daily-sports.png' },
  { name: 'IPD', logo: '/your-assets/ipd.png' },
  { name: 'Sorriso Hostesses', logo: '/your-assets/sorriso-hostesses.png' },
  { name: 'UFMI', logo: '/your-assets/ufmi.png' },
  { name: 'WUFPA', logo: '/your-assets/wufpa.png' },
  { name: 'Smart Ride', logo: '/your-assets/smart-ride.png' },
  { name: 'House For Rent', logo: '/your-assets/house-for-rent.png' },
] as const
```

## `app/globals.css`

Add the carousel styles to your global stylesheet. These styles include automatic movement, hover pausing, drag cursor feedback, mobile sizing, and reduced-motion support.

```css
@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .marquee {
    cursor: grab;
    scrollbar-width: none;
  }

  .marquee::-webkit-scrollbar {
    display: none;
  }

  .marquee.is-dragging {
    cursor: grabbing;
  }

  .marquee-track {
    animation: marquee 30s linear infinite;
    will-change: transform;
  }

  .marquee:hover .marquee-track,
  .marquee-track.is-paused {
    animation-play-state: paused;
  }

  .work-logo {
    position: relative;
    overflow: hidden;
    background: color-mix(in srgb, var(--background) 92%, var(--foreground));
  }

  .work-logo::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      90deg,
      transparent,
      color-mix(in srgb, var(--accent) 20%, transparent),
      transparent
    );
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 0.4s ease, transform 0.7s ease;
  }

  .work-logo:hover::after {
    opacity: 1;
    transform: translateX(100%);
  }
}

@media (max-width: 639px) {
  .marquee {
    mask-image: linear-gradient(to right, transparent, black 4%, black 96%, transparent);
  }

  .work-logo {
    width: 15rem;
    height: 8rem;
  }

  .marquee-track {
    gap: 0.75rem;
    animation-duration: 38s;
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none !important;
  }

  .work-logo::after {
    display: none;
  }
}
```

## Usage

```tsx
import { WorkArchive } from '@/components/work-archive'

export default function Page() {
  return <WorkArchive />
}
```

The carousel expects Tailwind/design tokens named `border-line`, `text-muted`, `text-accent`, `bg-background`, and `var(--background)`. Rename those classes or variables if your project uses different tokens.
