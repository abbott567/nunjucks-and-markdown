const marked = require('marked')
const overrides = require('./markdown-overrides')
const hljs = require('highlight.js')

function setup () {
  const renderer = new marked.Renderer()
  overrides.code(renderer)
  overrides.heading(renderer)
  overrides.paragraph(renderer)
  overrides.link(renderer)

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: true,
    highlight: function (code, language) {
      const validLanguage = hljs.getLanguage(language) ? language : 'text'
      if (validLanguage) {
        return hljs.highlight(code, { language: validLanguage }).value
      }
    }
  })
}

function compile (markdown) {
  return marked(markdown)
}

module.exports = { compile, setup }
