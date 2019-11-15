import NewsJson from './newsmanifest.json'

export interface NewsItem {
  date: Date
  title: string
  path: string
  link: string
  isExternalLink: boolean
}


export const getAllNewsItems = (): NewsItem[] => {
  return [].concat(<any> NewsJson)
}

const indexedByLink = getAllNewsItems().reduce((map, item) => {
  map[item.link] = item
  return map
}, {})

export const getItemByLink = (link: string): NewsItem|undefined => {
  return indexedByLink.hasOwnProperty(link)
    ? indexedByLink[link]
    : undefined
}

export const getLatestNewsItems = (limit: number = 5) => {
  return getAllNewsItems().splice(0, limit)
}
