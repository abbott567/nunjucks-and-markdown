const gulp = require('gulp')
const nodemon = require('gulp-nodemon')

gulp.task('nodemon', (done) => {
  return nodemon({
    script: 'server.js',
    ignore: ['.git', 'node_modules/**/node_modules'],
    watch: ['**/*.js'],
    env: { NODE_ENV: 'development' },
    ext: 'js, json, njk, css'
  })
    .on('quit', () => {
      process.exit(0)
    }, done())
})

gulp.task('exit', (done) => {
  done()
  process.exit()
})
