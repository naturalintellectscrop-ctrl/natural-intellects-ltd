'use client'

import Link from 'next/link'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import { contact } from '@/data/site'
import { SocialLinks } from '@/components/site-chrome'

export function SiteFooter() {
  return <footer className="border-t border-line bg-background px-6 py-12 lg:px-10"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-end"><div><div className="eyebrow">Natural Intellects Ltd.</div><p className="mt-4 max-w-md text-sm leading-relaxed text-muted">Technology, products and ideas built with practical intent.</p><div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted"><a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-accent"><Mail className="size-4" aria-hidden="true" />{contact.email}</a><a href={contact.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent"><MessageCircle className="size-4" aria-hidden="true" />WhatsApp</a>{contact.phones.map((phone) => <a key={phone} href={`tel:${phone.replaceAll(' ', '')}`} className="inline-flex items-center gap-2 hover:text-accent"><Phone className="size-4" aria-hidden="true" />{phone}</a>)}</div></div><div className="flex flex-col gap-5 md:items-end"><SocialLinks /><Link href="/contact" className="font-mono text-[10px] uppercase tracking-widest text-muted hover:text-accent">Start a conversation</Link></div></div></footer>
}
