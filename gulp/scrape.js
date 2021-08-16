const gulp = require('gulp')
const got = require('got')
const datefns = require('date-fns')
const minify = require('html-minifier').minify
const fs = require('fs')

gulp.task('scrape', (done) => {
  fs.readdir('markdown', async (err, documents) => {
    if (err) throw err
    const promises = []
    documents.forEach(document => {
      promises.push(new Promise((resolve, reject) => {
        (async () => {
          const response = await got(`http://localhost:3000/${document}`)
          const html = minify(response.body, { collapseWhitespace: true })
          const date = datefns.format(new Date(), 'yyyy-MM-dd')
          const filename = `${date}-${document}-compiled`
          await fs.writeFile(`output/${filename}.html`, html, function (err) {
            if (err) {
              reject(err)
            }
            console.log(`--------------- ${document} HTML Written ---------------`)
            resolve()
          })
        })()
      }))
    })
    await Promise.all(promises)
    done()
  })
})
