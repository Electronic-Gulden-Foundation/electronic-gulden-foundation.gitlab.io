import NewsJson from '~/data/newsmanifest.json'

export interface NewsItem {
  date: Date
  title: string
  text: string
}

export const getAllNewsItems = (): NewsItem[] => {
  return NewsJson.map(
    (item): NewsItem => {
      return {
        ...item,
        date: new Date(item.date)
      }
    }
  ).sort((a, b) => a.date.getTime() - b.date.getTime())
}
