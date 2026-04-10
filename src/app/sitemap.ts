import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dbnss.in'

  const routes = [
    '',
    '/aboutus',
    '/courses',
    '/faculty',
    '/students',
    '/infrastructure',
    '/results',
    '/alumni',
    '/events',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
