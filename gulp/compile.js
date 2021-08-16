const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const rename = require('gulp-rename')
const sass = require('gulp-sass')(require('sass'))

gulp.task('js:compile', function () {
  return gulp.src(['./src/assets/js/**/*.js', './src/views/components/**/*.js'])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./src/public/js'))
})

gulp.task('sass:compile', () => {
  return gulp.src('./src/assets/sass/application.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./src/public/css'))
})
