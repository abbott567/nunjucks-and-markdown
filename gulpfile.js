const gulp = require('gulp')
const requireDir = require('require-dir')
requireDir('./gulp', { recurse: true })

gulp.task('default', gulp.series(
  'clean:public',
  'js:compile',
  'sass:compile',
  'js:watch',
  'sass:watch',
  'nodemon'
))

gulp.task('build', gulp.series(
  'clean:output',
  'js:compile',
  'sass:compile',
  'nodemon',
  'scrape',
  'exit'
))
