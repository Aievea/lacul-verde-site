import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.laculverde.com/', priority: 1.0 },
    { url: 'https://www.laculverde.com/specii', priority: 0.8 },
    { url: 'https://www.laculverde.com/pret', priority: 0.8 },
    { url: 'https://www.laculverde.com/capturi', priority: 0.6 },
    { url: 'https://www.laculverde.com/contact', priority: 0.7 },
    { url: 'https://www.laculverde.com/regulament', priority: 0.5 },
    { url: 'https://www.laculverde.com/bauturi', priority: 0.6 },
  ]
}
