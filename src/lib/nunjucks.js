const nunjucks = require('nunjucks')
const fileHelper = require('./file-helper')
const generateTOC = require('./toc-generator')
const markdown = require('./markdown')
const path = require('path')
const wcagify = require('wcagify')

function setup (app) {
  app.set('view engine', 'njk')

  const paths = [
    path.join(__dirname, '../', '../', 'markdown'),
    path.join(__dirname, '../', '../', 'src'),
    path.join(__dirname, '../', '../', 'src', 'views', 'components'),
    path.join(__dirname, '../', '../', 'src', 'views', 'layouts'),
    path.join(__dirname, '../', '../', 'node_modules', 'wcagify', 'nunjucks')
  ]

  const nunjucksEnvironment = nunjucks.configure(paths, {
    autoescape: true,
    express: app,
    noCache: true,
    watch: true
  })

  nunjucksEnvironment.addFilter('markdown', markdown.compile)
  nunjucksEnvironment.addFilter('toc', generateTOC)
  nunjucksEnvironment.addFilter('wcagify', wcagify)
  nunjucksEnvironment.addGlobal('getHtmlCode', fileHelper.getHtmlCode)
  nunjucksEnvironment.addGlobal('getNunjucksCode', fileHelper.getNunjucksCode)

  return app
}

module.exports = { setup }
