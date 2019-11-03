import { getAllNewsItems } from './news'

export default () => {
  return new Promise((resolve) => {
    let routes: string[] = []

    routes = routes.concat(
      getAllNewsItems()
        .filter(news => !news.isExternalLink)
        .map(news => news.link)
    )

    resolve(routes)
  })
}
