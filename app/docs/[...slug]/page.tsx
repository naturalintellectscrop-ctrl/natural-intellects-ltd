import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DocsArticle, DocsShell } from '@/components/docs-shell'
import { docSections, getDoc } from '@/data/docs'

export function generateStaticParams() { return docSections.map((doc) => ({ slug: doc.slug.split('/') })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> { const { slug } = await params; const doc = getDoc(slug.join('/')); if (!doc) return {}; return { title: `${doc.label} — Natural Intellects Documentation`, description: doc.summary } }
export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) { const { slug } = await params; const activeSlug = slug.join('/'); if (!getDoc(activeSlug)) notFound(); return <DocsShell activeSlug={activeSlug}><DocsArticle slug={activeSlug} /></DocsShell> }
