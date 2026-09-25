'use client'

import Link from 'next/link'
import { ArrowUpRight, AtSign, Code2, Menu, MessageCircle, Moon, Play, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export function ThemeToggle() {
  const [dark, setDark] = useState(true)
  useEffect(() => { const saved = document.cookie.match(/(?:^|; )ni-theme=(dark|light)/)?.[1]; const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; const next = saved ? saved === 'dark' : prefersDark; setDark(next); document.documentElement.classList.toggle('dark', next) }, [])
  function toggle() { const next = !dark; setDark(next); document.documentElement.classList.toggle('dark', next); document.cookie = `ni-theme=${next ? 'dark' : 'light'}; path=/; max-age=31536000` }
  return <button onClick={toggle} aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`} className="border border-line p-3 text-muted hover:border-accent hover:text-accent">{dark ? <Sun className="size-4" /> : <Moon className="size-4" />}</button>
}

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/intellectscorp?stkn=eW0zdzVjMTJwN3N2', icon: AtSign },
  { label: 'X / Twitter', href: 'https://x.com/nicorp256', icon: MessageCircle },
  { label: 'GitHub', href: 'https://github.com/naturalintellectscrop-ctrl', icon: Code2 },
  { label: 'YouTube', href: 'https://youtube.com/@NATURALINTELLECTSCROP', icon: Play },
]

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return <nav aria-label="Social media" className={`flex items-center ${compact ? 'gap-2' : 'gap-3'}`}>{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label} className="border border-line p-2 text-muted transition-colors hover:border-accent hover:text-accent"><Icon className={compact ? 'size-3.5' : 'size-4'} aria-hidden="true" /></a>)}</nav>
}

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const links = [['About','#about'],['Capabilities','#capabilities'],['Services','/services'],['Products','#products'],['Innovation','#innovation'],['Foundation','/foundation'],['Docs','/docs'],['Team','#team']]
  return <header className="fixed top-0 z-40 w-full border-b border-line/80 bg-background/90 backdrop-blur-md"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10"><Link href="/#top" className="flex items-center gap-3" aria-label="Natural Intellects home"><img src="/ni-logo-updated.png" alt="Natural Intellects" className="size-12 object-contain" /><span className="hidden font-mono text-[10px] uppercase tracking-[.18em] text-muted sm:inline">N.I. / 2026</span></Link><nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">{links.map(([label, href]) => <a key={label} href={href} aria-current={pathname === '/foundation' && label === 'Foundation' ? 'page' : undefined} className={`font-mono text-[10px] uppercase tracking-widest transition-colors ${pathname === '/foundation' && label === 'Foundation' ? 'text-accent' : 'text-muted hover:text-foreground'}`}>{label}</a>)}<ThemeToggle /><Link href="/contact" className="border border-foreground/50 px-4 py-3 font-mono text-[10px] uppercase tracking-widest hover:border-accent hover:text-accent">Start a conversation <ArrowUpRight className="ml-2 inline size-3" /></Link></nav><div className="flex items-center gap-2 md:hidden"><ThemeToggle /><button onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} className="border border-line p-3 text-muted">{open ? <X className="size-4" /> : <Menu className="size-4" />}</button></div></div>{open && <nav className="mobile-menu flex flex-col gap-5 border-t border-line bg-background px-6 py-6 md:hidden" aria-label="Mobile navigation">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} aria-current={pathname === '/foundation' && label === 'Foundation' ? 'page' : undefined} className={`font-mono text-xs uppercase tracking-widest ${pathname === '/foundation' && label === 'Foundation' ? 'text-accent' : 'text-muted'}`}>{label}</a>)}<Link href="/contact" className="font-mono text-xs uppercase tracking-widest text-accent">Start a conversation <ArrowUpRight className="ml-2 inline size-3" /></Link></nav>}</header>
}

export function Status({ value }: { value: string }) { return <span className="font-mono text-[10px] uppercase tracking-widest text-muted"><i className="mr-2 inline-block size-1.5 rounded-full bg-accent align-middle" />{value}</span> }
