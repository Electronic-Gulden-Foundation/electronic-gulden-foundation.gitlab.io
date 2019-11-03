import NewsJson from './newsmanifest.json'

export const getAllNewsItems = (): NewsItem[] => {
  return <any> NewsJson
}

const indexedBySlug = getAllNewsItems().reduce((map, item) => {
  map[item.slug] = item
  return map
}, {})

export interface NewsItem {
  date: Date
  title: string
  slug: string
  path: string
  link: string
  linkTarget: string
  isExternalLink: boolean
}

export const getItemBySlug = (slug: string): NewsItem|undefined => {
  return indexedBySlug.hasOwnProperty(slug)
    ? indexedBySlug[slug]
    : undefined
}
