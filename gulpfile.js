const gulp = require('gulp')
const ghPages = require('gulp-gh-pages')

gulp.task('deploy', () => gulp.src('./build/**/*')
  .pipe(ghPages()))
