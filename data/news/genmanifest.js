const fs = require('fs')
const slugify = require('slugify')

const BASE_NEWS_PATH = __dirname + '/items/'
const SLUGIFY_OPTIONS = {
  remove: /[*+~.,()'"!:@]/g
}

const listRecursive = (dir, fileList, extension) => {
  fileList = fileList || []

  const files = fs.readdirSync(dir)

  files.forEach((filename) => {
    if (fs.statSync(dir + filename).isDirectory()) {
      fileList = listRecursive(dir + filename + '/', fileList)
    } else {
      fileList.push(dir + filename)
    }
  })

  return fileList
}

const news = listRecursive(BASE_NEWS_PATH)
  .filter(filename => filename.endsWith('.md'))
  .map(filename => filename.replace(BASE_NEWS_PATH, ''))
  .map((path) => {
    const split = path.split('/')

    const year = split[0]
    const month = split[1]
    const day = split[2]
    const fileName = split[3]

    const fileNameNoExtension = fileName.replace(/\.md$/, '')
    const text = fs.readFileSync(BASE_NEWS_PATH + path).toString()
    const title = fileNameNoExtension
    const slug = slugify(title.toLowerCase(), SLUGIFY_OPTIONS)
    const date = new Date(`${year}-${month}-${day}`)

    let link = `/nieuws/${year}/${month}/${day}/${slug}/`
    let isExternalLink = false

    // Check if the news item should link to another page
    if (text.startsWith('http')) {
      link = text
      isExternalLink = true
    }

    return {
      title,
      date,
      link,
      isExternalLink,
      path
    }
  })
  .sort((a, b) => b.date - a.date)

const manifestFile = __dirname + '/newsmanifest.json'

fs.writeFileSync(manifestFile, JSON.stringify(news))

console.log('Wrote ' + news.length + ' news items to ' + manifestFile)
