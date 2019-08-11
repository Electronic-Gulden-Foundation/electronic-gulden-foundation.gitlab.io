var fs = require('fs')

var news = fs
  .readdirSync(__dirname)
  .filter(filename => filename.endsWith('.md'))
  .filter(filename => filename.includes('_'))
  .map(filename => {
    var split = filename.replace(/\.md$/, '').split('_')
    var date = split[0]
    var title = split[1]
    var text = fs.readFileSync(__dirname + '/' + filename).toString()

    return {
      title: title,
      date: date,
      text: text
    }
  })

var manifestFile = __dirname + '/../../data/newsmanifest.json'

fs.writeFileSync(manifestFile, JSON.stringify(news))

console.log('Wrote ' + news.length + ' news items to ' + manifestFile)
