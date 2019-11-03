import NewsJson from './newsmanifest.json'

export interface NewsItem {
  date: Date
  title: string
  link: string
  linkTarget: string
}

export const getAllNewsItems = (): NewsItem[] => {
  return <any> NewsJson
}
