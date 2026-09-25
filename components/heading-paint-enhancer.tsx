"use client"

import { useEffect } from 'react'

export function HeadingPaintEnhancer() {
  useEffect(() => {
    const headings = Array.from(document.querySelectorAll<HTMLElement>('h1, h2'))
    const cleanups = headings.map((heading) => {
      heading.classList.add('paint-heading')
      const move = (event: PointerEvent) => {
        const rect = heading.getBoundingClientRect()
        heading.style.setProperty('--paint-x', `${event.clientX - rect.left}px`)
        heading.style.setProperty('--paint-y', `${event.clientY - rect.top}px`)
      }
      heading.addEventListener('pointermove', move)
      return () => heading.removeEventListener('pointermove', move)
    })
    return () => cleanups.forEach((cleanup) => cleanup())
  }, [])

  return null
}
