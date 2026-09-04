'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type PaintRevealTextProps = {
  children: ReactNode
  className?: string
  revealColor?: string
  radius?: number
  background?: boolean
}

type Point = { x: number; y: number; life: number }

export function PaintRevealText({ children, className = '', revealColor = 'var(--accent)', radius = 26, background = false }: PaintRevealTextProps) {
  const rootRef = useRef<HTMLSpanElement>(null)
  const pointsRef = useRef<Point[]>([])
  const frameRef = useRef<number | null>(null)
  const [mask, setMask] = useState('')

  function paint(clientX: number, clientY: number) {
    const root = rootRef.current
    if (!root) return
    const rect = root.getBoundingClientRect()
    pointsRef.current = [{ x: clientX - rect.left, y: clientY - rect.top, life: 1 }, ...pointsRef.current].slice(0, 14)
    if (frameRef.current === null) frameRef.current = requestAnimationFrame(updateMask)
  }

  function updateMask() {
    frameRef.current = null
    pointsRef.current = pointsRef.current.map((point) => ({ ...point, life: point.life - 0.025 })).filter((point) => point.life > 0)
    setMask(pointsRef.current.map((point) => `radial-gradient(circle ${radius}px at ${point.x}px ${point.y}px, rgba(0,0,0,${point.life}) 0%, rgba(0,0,0,${point.life * .7}) 45%, transparent 100%)`).join(','))
    if (pointsRef.current.length) frameRef.current = requestAnimationFrame(updateMask)
  }

  useEffect(() => () => { if (frameRef.current !== null) cancelAnimationFrame(frameRef.current) }, [])

  return <span ref={rootRef} className={`paint-reveal relative inline-block ${className}`} data-background={background ? 'true' : undefined} onPointerMove={(event) => { if (event.pointerType !== 'touch') paint(event.clientX, event.clientY) }} onPointerEnter={(event) => { if (event.pointerType !== 'touch') paint(event.clientX, event.clientY) }} onTouchStart={(event) => paint(event.touches[0].clientX, event.touches[0].clientY)} onTouchMove={(event) => paint(event.touches[0].clientX, event.touches[0].clientY)}>
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 text-[color:var(--paint-color)]" style={{ '--paint-color': revealColor } as CSSProperties}>{children}</span>
    <span className="relative">{children}</span>
    {background ? <span aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] bg-[color:var(--paint-color)]" style={{ '--paint-color': revealColor, maskImage: mask || 'none', WebkitMaskImage: mask || 'none' } as CSSProperties} /> : <span aria-hidden="true" className="pointer-events-none absolute inset-0 text-[color:var(--paint-color)]" style={{ '--paint-color': revealColor, maskImage: mask || 'none', WebkitMaskImage: mask || 'none' } as CSSProperties}>{children}</span>}
  </span>
}
