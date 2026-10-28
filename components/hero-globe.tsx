'use client'

import { useEffect, useRef } from 'react'
import { geoOrthographic, geoPath, geoGraticule10 } from 'd3-geo'

type LandCoords = number[][][][]
type LandData = { africa: LandCoords; other: LandCoords }

// Realistic transparent 2D globe for the hero orbit. A true orthographic
// projection of Natural Earth land (110m) spins in JS via d3-geo — the same
// maths as a physical desk globe: continents foreshorten at the rim and sink
// behind the horizon, so the "transparent 2D element that turns with the
// rotations" now carries real geography. Africa is filled at near-full accent
// strength and faces the viewer on first paint (20°E centred); the rest of the
// world renders dimmed and oceans stay fully transparent. A faint graticule
// keeps the wireframe heritage of the element it replaced.
//
// Spin: one revolution averages ~55s, in the physically correct direction
// (surface drifts west→east), but the angular rate is modulated — the
// Africa-facing hemisphere glides ~4× slower while the far side sweeps
// quickly (rate ∝ 1 − DWELL·cos(angle)). Africa therefore sits comfortably in
// view for roughly two-thirds of every cycle — it is "mostly" the globe we
// see — yet the rotation never stalls or reverses. Frozen to a static
// Africa-centred frame under prefers-reduced-motion; the rAF loop pauses
// while the globe is offscreen. If the land data fails to load, the globe
// degrades to rim + graticule so the hero never shows an empty circle.
const LON0 = 20 // longitude centred on first paint — Gulf of Guinea / Congo basin
const LAT0 = 8 // slight northern tilt so the sphere reads as a lit 3D body
const REVOLVE_S = 55 // average seconds per full revolution
const DWELL = 0.75 // rate dip at the Africa-facing side (slow: 1−.75, fast: 1+.75)

const asMulti = (coordinates: LandCoords): { type: 'MultiPolygon'; coordinates: LandCoords } => ({ type: 'MultiPolygon', coordinates })

export function HeroGlobe({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const gratRef = useRef<SVGPathElement | null>(null)
  const landRef = useRef<SVGPathElement | null>(null)
  const africaRef = useRef<SVGPathElement | null>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const projection = geoOrthographic().translate([100, 100]).scale(98).clipAngle(90)
    const pathGen = geoPath(projection)
    const graticule = geoGraticule10()

    let other: LandCoords | null = null
    let africa: LandCoords | null = null
    let angle = 0
    let raf = 0
    let running = false
    let inView = true
    let last = 0
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const draw = (a: number) => {
      projection.rotate([a - LON0, -LAT0, 0])
      gratRef.current?.setAttribute('d', pathGen(graticule) ?? '')
      landRef.current?.setAttribute('d', other ? pathGen(asMulti(other)) ?? '' : '')
      africaRef.current?.setAttribute('d', africa ? pathGen(asMulti(africa)) ?? '' : '')
    }

    const tick = (now: number) => {
      if (last) {
        const dt = Math.min((now - last) / 1000, 0.1)
        // modulated rate: cos dips the speed while Africa is front-and-centre,
        // doubles it around the back — mean rate stays 360°/REVOLVE_S
        angle = (angle + dt * (360 / REVOLVE_S) * (1 - DWELL * Math.cos((angle * Math.PI) / 180))) % 360
      }
      last = now
      draw(angle)
      raf = requestAnimationFrame(tick)
    }

    const start = () => {
      if (!running && !reduced && inView) {
        running = true
        last = 0
        raf = requestAnimationFrame(tick)
      }
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    const io = new IntersectionObserver((entries) => {
      inView = entries[0]?.isIntersecting ?? true
      if (inView) start()
      else stop()
    })
    io.observe(svg)

    fetch('/data/globe-land.json')
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status))
        return r.json() as Promise<LandData>
      })
      .then((j) => {
        other = j.other
        africa = j.africa
        draw(angle) // paint continents the moment data lands (also the reduced-motion frame)
      })
      .catch(() => {
        /* land stays empty — rim + graticule fallback keeps the element alive */
      })

    draw(0) // first paint: Africa centred, wireframe until data arrives

    if (reduced) return () => io.disconnect()
    start()
    return () => {
      stop()
      io.disconnect()
    }
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 200 200" fill="none" aria-hidden="true" className={className}>
      <defs>
        {/* single fixed light source, top-left: soft highlight falling to a
            dark limb — this shading is what makes the flat disc read as a
            sphere without faking an ocean fill */}
        <radialGradient id="ni-globe-light" cx="34%" cy="28%" r="80%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity=".14" />
          <stop offset="42%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="78%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity=".34" />
        </radialGradient>
      </defs>
      {/* graticule: faintest layer, keeps the technical wireframe lineage */}
      <path ref={gratRef} stroke="currentColor" strokeOpacity=".16" fill="none" vectorEffect="non-scaling-stroke" />
      {/* rest of the world, dimmed */}
      <path ref={landRef} fill="currentColor" fillOpacity=".3" stroke="currentColor" strokeOpacity=".35" strokeWidth=".35" />
      {/* Africa, highlighted */}
      <path ref={africaRef} fill="currentColor" fillOpacity=".92" stroke="currentColor" strokeOpacity=".95" strokeWidth=".45" />
      {/* sphere shading + silhouette rim, drawn over the land */}
      <circle cx="100" cy="100" r="98" fill="url(#ni-globe-light)" />
      <circle cx="100" cy="100" r="98" stroke="currentColor" strokeOpacity=".85" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}
