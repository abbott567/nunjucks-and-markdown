const slugify = require('slugify')
const marked = require('marked')
const cheerio = require('cheerio')
const { getFileContents } = require('./file-helper')

function createTOC (path) {
  const markdown = getFileContents(`markdown/${path}/content.md`)
  const html = marked(markdown)
  const $ = cheerio.load(html)
  const $toc = $('<ul class="ul-lvl-0"id="toc"></ul>')
  const $headings = $('.heading')
  $headings.each(function () {
    const $h = $(this)
    appendHeading($h, $toc)
  })
  return $toc
}

function appendHeading ($h, $toc) {
  const tag = $h.prop('tagName')
  const text = $h.text()
  const slug = slugify(text, { lower: true })

  if (tag === 'H2') {
    $toc.append(`<li class="li-lvl-0"><a href="#${slug}">${text}</a></li>`)
  }

  if (tag === 'H3') {
    const $parentLI = $toc.find('.li-lvl-0').last()
    const parentULExists = $parentLI.find('.ul-lvl-1').length
    if (!parentULExists) {
      $parentLI.append('<ul class="ul-lvl-1"></ul>')
    }
    const $parent = $parentLI.find('.ul-lvl-1').last()
    $parent.append(`<li class="li-lvl-1"><span aria-hidden="true">—</span> <a href="#${slug}">${text}</a></li>`)
  }
}

function generateTOC (path) {
  const toc = createTOC(path)
  return toc
}

module.exports = generateTOC
