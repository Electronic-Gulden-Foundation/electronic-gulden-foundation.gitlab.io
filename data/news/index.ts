import NewsJson from './newsmanifest.json'

export interface NewsItem {
  date: Date
  title: string
  link: string
  linkTarget: string
  isExternalLink: boolean
}

export const getAllNewsItems = (): NewsItem[] => {
  return <any> NewsJson
}
