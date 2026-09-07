import type { Metadata } from 'next'
import { DeepPressExperience } from '@/components/deep-press-experience'

export const metadata: Metadata = {
  title: 'Deep Press — Natural Intellects Foundation',
  description: 'Deep Press is a Natural Intellects Foundation initiative exploring a different approach to conversational support for people experiencing depression and difficult emotional periods.',
}

export default function FoundationDeepPressPage() {
  return <DeepPressExperience />
}
