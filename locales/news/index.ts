import NewsJson from '~/assets/newsmanifest.json'

export interface NewsItem {
  date: Date
  title: string
  text: string
}

export const getAllNewsItems = (): NewsItem[] => {
  return NewsJson
}
