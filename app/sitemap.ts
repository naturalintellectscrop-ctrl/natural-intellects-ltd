import type { MetadataRoute } from 'next'
import { allSlugs } from '@/data/site'

const siteUrl = 'https://naturalintellects.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const { products, capabilities, innovation } = allSlugs()
  const now = new Date()
  return [
    { url: siteUrl, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/foundation`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/foundation/deep-press`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${siteUrl}/docs`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    ...products.map((slug) => ({ url: `${siteUrl}/products/${slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...capabilities.map((slug) => ({ url: `${siteUrl}/capabilities/${slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 })),
    ...innovation.map((slug) => ({ url: `${siteUrl}/innovation/${slug}`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.5 })),
  ]
}
