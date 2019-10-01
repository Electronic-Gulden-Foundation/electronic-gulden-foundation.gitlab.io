const fs = require('fs')

const news = fs
  .readdirSync(__dirname)
  .filter(filename => filename.endsWith('.md'))
  .filter(filename => filename.includes('_'))
  .map(filename => {
    const split = filename.replace(/\.md$/, '').split('_')
    const date = split[0]
    const title = split[1]
    const text = fs.readFileSync(__dirname + '/' + filename).toString()

    return {
      title: title,
      date: date,
      text: text
    }
  })

const manifestFile = __dirname + '/newsmanifest.json'

fs.writeFileSync(manifestFile, JSON.stringify(news))

console.log('Wrote ' + news.length + ' news items to ' + manifestFile)
