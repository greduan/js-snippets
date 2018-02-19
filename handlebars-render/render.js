const fs = require('fs')
const path = require('path')
const Handlebars = require('handlebars')

const generateHandlebarsTemplate =
  templateSource => Handlebars.compile(templateSource);

module.exports = viewsPath => {
  const files = fs.readdirSync(viewsPath)

  const templates = {};

  files.forEach(file => {
    templates[path.basename(file, '.hbs')] =
      generateHandlebarsTemplate(
        fs.readFileSync(path.join(viewsPath, file), { encoding: 'utf8' })
      )
  })

  return (name, data) => templates[name](data);
}
