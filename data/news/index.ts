import NewsJson from './newsmanifest.json'

export interface NewsItem {
  date: Date
  title: string
  path: string
  link: string
  isExternalLink: boolean

  originalIndex: number|undefined
}

const itemsWithIndex: NewsItem[] = (<any> NewsJson)
  .map((item: NewsItem, index: number) => {
    item.originalIndex = index
    return item
  })

const indexedByLink = itemsWithIndex.reduce((map, item) => {
  map[item.link] = item
  return map
}, {})

export const getAllNewsItems = (): NewsItem[] => {
  return (<NewsItem[]> []).concat(itemsWithIndex)
}

export const getItemByLink = (link: string): NewsItem|undefined => {
  return indexedByLink.hasOwnProperty(link)
    ? indexedByLink[link]
    : undefined
}

export const getLatestNewsItems = (limit: number = 5) => {
  return getAllNewsItems().splice(0, limit)
}

export const getItemByIndex = (index: number): NewsItem|undefined => {
  const allItems = getAllNewsItems()

  if (index < 0 || index >= allItems.length) {
    return undefined
  }

  return allItems[index]
}

export const getNextNewsItem = (item: NewsItem): NewsItem|undefined => {
  return (item.originalIndex !== undefined)
    ? getItemByIndex(item.originalIndex - 1)
    : undefined
}

export const getPreviousNewsItem = (item: NewsItem): NewsItem|undefined => {
  return (item.originalIndex !== undefined)
    ? getItemByIndex(item.originalIndex + 1)
    : undefined
}
