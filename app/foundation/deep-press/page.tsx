import type { Metadata } from 'next'
import { DeepPressExperience } from '@/components/deep-press-experience'

export const metadata: Metadata = {
  title: 'Deep Press — Natural Intellects Foundation',
  description: 'Deep Press is a Natural Intellects Foundation concept exploring thoughtful digital experiences that could help someone find somewhere to begin.',
}

export default function FoundationDeepPressPage() {
  return <DeepPressExperience />
}
