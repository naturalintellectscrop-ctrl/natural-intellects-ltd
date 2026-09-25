'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const links = ['About', 'Capabilities', 'Products', 'Innovation', 'Contact']
  return <div className="md:hidden">
    <button type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)} className="border border-line p-3 text-muted hover:border-accent hover:text-accent">{open ? <X className="size-4" /> : <Menu className="size-4" />}</button>
    {open && <nav className="absolute left-0 top-20 flex w-full flex-col gap-6 border-b border-line bg-background px-6 py-8" aria-label="Mobile navigation">{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent">{link}</a>)}</nav>}
  </div>
}
