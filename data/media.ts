// Central media registry.
//
// Photography here is TEMPORARY editorial imagery. Current set: brand-free
// compositions featuring Black African technologists and contexts (per client
// direction), held in /public/photography/. To swap in approved NI assets
// later: replace the file (same name) or point `src` at a new path. Sections
// read these slots only — no section redesign required.
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
    src: '/photography/team-table.jpg?v=2',
    alt: 'A young Black African product team gathered around a laptop, working through a problem together in a bright office',
    caption: 'Real work — the operational contexts NI builds for',
    label: 'IMG/01 · Context',
    width: 1344,
    height: 768,
  },
  /** 06 / How NI builds — engineering reality */
  engineering: {
    src: '/photography/engineering-bench.jpg?v=2',
    alt: 'A Black African electronics engineer soldering and testing a circuit board at a workbench, laptop with code nearby',
    caption: 'Systems verified at the bench — engineering before interface',
    label: 'IMG/02 · Engineering',
    width: 1344,
    height: 768,
  },
  /** 07 / Services — technology in use */
  inUse: {
    src: '/photography/technology-in-use.jpg?v=2',
    alt: 'A Black African shop owner using a tablet at the counter of his shop, shelves of goods behind him',
    caption: 'Technology in use — where delivered systems meet daily work',
    label: 'IMG/03 · In use',
    width: 1344,
    height: 768,
  },
  /** 09 / Foundation — access, learning, opportunity */
  foundation: {
    src: '/photography/foundation-access.jpg?v=2',
    alt: 'Three young Black African schoolchildren gathered around a tablet, leaning in and pointing at the screen',
    caption: 'Access · learning · opportunity',
    label: 'IMG/04 · Foundation',
    width: 1344,
    height: 768,
  },
} satisfies Record<string, MediaSlot>
