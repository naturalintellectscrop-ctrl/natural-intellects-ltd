import type { Metadata } from 'next'
import { DeepPressExperience } from '@/components/deep-press-experience'

export const metadata: Metadata = {
  // absolute: the title already names the Foundation, so the site-wide
  // "%s — Natural Intellects" template must not append the company again.
  title: { absolute: 'Deep Press · Natural Intellects Foundation' },
  description: 'A Natural Intellects Foundation initiative exploring a different approach to conversational support for people experiencing depression and difficult emotional periods.',
}

export default function FoundationDeepPressPage() {
  return <DeepPressExperience />
}
