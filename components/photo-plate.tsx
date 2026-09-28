import Image from 'next/image'
import type { MediaSlot } from '@/data/media'

/**
 * NI "asset plate": contextual photography framed in the site's technical language
 * (mono metadata header, grayscale treatment, accent-tick caption). The grayscale
 * plate returns to color on hover — the abstract becoming concrete.
 *
 * All imagery is resolved through @/data/media so approved NI assets can replace
 * the current files without touching any section code.
 */
export function PhotoPlate({ media, className = '', photoClassName = '', variant, sizes, priority = false }: {
  media: MediaSlot
  className?: string
  /** Height / aspect utilities for the photo viewport (object-fit: cover). */
  photoClassName?: string
  variant?: 'default' | 'foundation'
  sizes?: string
  priority?: boolean
}) {
  return (
    <figure className={`ni-plate ${variant === 'foundation' ? 'ni-plate--foundation' : ''} ${className}`}>
      <div className="ni-plate-head" aria-hidden="true"><span>{media.label}</span><span>Supplied imagery</span></div>
      <div className={`ni-photo ${photoClassName}`}>
        <Image src={media.src} alt={media.alt} width={media.width} height={media.height} sizes={sizes ?? '(max-width:1024px) 100vw, 55vw'} priority={priority} />
      </div>
      <figcaption className="ni-plate-cap">{media.caption}</figcaption>
    </figure>
  )
}
