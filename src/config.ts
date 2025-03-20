import { getCollection, type CollectionEntry } from 'astro:content'

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'Siam Software',
  description: 'Solución integral para la transformación tecnológica.',
  author: {
    name: 'Diego Andres Quevedo',
    url: 'https://christham.net',
    email: 'diego01andres@hotmail.com',
    summary: 'Page Web Siam.'
  },
  org: {
    name: 'Siam Software',
    url: 'https://hellotham.com',
    email: 'informacion@siamsoftwarecolombia.com',
    summary:
      'Nos especializamos en estrategias empresariales y de TI, modelos operativos, hojas de ruta estratégicas, arquitectura empresarial, análisis y diseño de procesos de negocio.'
  },
  location: 'Soacha - Cundinamarca - Colombia',
  latlng: [4.578056, -74.214444] as [number, number],
  buildTime: new Date()
}

export { default as Logo } from './assets/svg/astro/siam.svg' 
export { default as LogoImage } from './assets/astro/siamdark.png'
export { default as DefaultSVG } from './assets/svg/undraw/undraw_my_feed.svg'
export { default as DefaultImage } from './assets/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Inicio', href: '' },
  { name: 'Nosotros', href: '/about' },
  { name: 'Contactanos', href: '/contact' },
  { name: 'Blog', href: '/blog' },
  { name: 'Servicios', href: '/doc/introduction' }
]

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = ``

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export type Sidebar = Record<string, { text: string; link: string }[]>

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => {
    return data.draft !== true
  })
  return posts.sort((a, b) =>
    a.data.pubDate && b.data.pubDate ? +b.data.pubDate - +a.data.pubDate : 0
  )
}
