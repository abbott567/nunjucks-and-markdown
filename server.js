// NPM dependencies
const express = require('express')

// Local dependancies
const nunjucks = require('./src/lib/nunjucks')
const markdown = require('./src/lib/markdown')
const locals = require('./src/lib/locals')

// Application
const app = express()

// Configure markdown
markdown.setup()

// Configure nunjucks
nunjucks.setup(app)

// Configure locals
app.use(locals.date)

// Routes
app.get('/', (req, res) => {
  res.redirect('/example')
})
app.get(/^([^.]+)$/, (req, res) => {
  let path = req.path
  path = path.substr(1)
  if (path === '') {
    path = 'example'
  }
  res.render('with-toc.njk', { path })
})

// Serve
app.listen(3000)
console.log('listening on port 3000')
