// Central media registry.
//
// Photography here is TEMPORARY editorial imagery (contextually chosen, watermarked-
// source rejected). To swap in approved NI assets later: replace the file in
// /public/photography/ (same name) or point `src` at a new path. Sections read
// these slots only — no section redesign required.
//
// Rules preserved from the design brief:
// - Team members NEVER get photographs (typographic treatment only).
// - Every image must earn its place: it grounds a concrete claim made by its section.
// - Captions describe context honestly; they never claim the people pictured
//   are NI staff, clients or partners.

export type MediaSlot = {
  src: string
  alt: string
  /** Editorial caption shown under the image (technical / thematic, not a factual claim about the pictured people). */
  caption: string
  /** Mono index label shown above the image (asset-plate style). */
  label: string
  width: number
  height: number
}

export const media = {
  /** 04 / Who NI builds for — real work context */
  builtFor: {
    src: '/photography/team-table.jpg',
    alt: 'A team gathered around a table, working through a problem together with laptops and notes',
    caption: 'Real work — the operational contexts NI builds for',
    label: 'IMG/01 · Context',
    width: 2000,
    height: 1500,
  },
  /** 06 / How NI builds — engineering reality */
  engineering: {
    src: '/photography/engineering-bench.jpg',
    alt: 'An engineer testing hardware on a workbench with an oscilloscope, power supplies and wiring',
    caption: 'Systems verified at the bench — engineering before interface',
    label: 'IMG/02 · Engineering',
    width: 1611,
    height: 1074,
  },
  /** 07 / Services — technology in use */
  inUse: {
    src: '/photography/technology-in-use.jpg',
    alt: 'A business owner using a tablet at his workplace',
    caption: 'Technology in use — where delivered systems meet daily work',
    label: 'IMG/03 · In use',
    width: 1499,
    height: 1001,
  },
  /** 09 / Foundation — access, learning, opportunity */
  foundation: {
    src: '/photography/foundation-access.jpg',
    alt: 'Children learning together on a tablet, leaning in and pointing at the screen',
    caption: 'Access · learning · opportunity',
    label: 'IMG/04 · Foundation',
    width: 1200,
    height: 832,
  },
} satisfies Record<string, MediaSlot>
