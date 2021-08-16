const gulp = require('gulp')
const clean = require('gulp-clean')
const fs = require('fs')

gulp.task('clean:public', () => {
  return gulp.src('src/public/**/*', { read: false, allowEmpty: true })
    .pipe(clean())
})

gulp.task('clean:output', () => {
  if (!fs.existsSync('output')) {
    fs.mkdirSync('output')
  }

  return gulp.src('output/**/*', { read: false, allowEmpty: true })
    .pipe(clean())
})
