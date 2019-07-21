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

fs.writeFileSync(
  __dirname + '/../../assets/newsmanifest.json',
  JSON.stringify(news)
)
