const gulp = require('gulp')

gulp.task('sass:watch', (done) => {
  return gulp.watch(['./src/**/*.scss'], gulp.task('sass:compile', done()))
})

gulp.task('js:watch', (done) => {
  return gulp.watch(['./src/**/*.js'], gulp.task('js:compile', done()))
})
