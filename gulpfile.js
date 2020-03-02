const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const minifyCSS = require('css')

gulp.task('hello', function(done) {
  console.log('Привет, мир!');
  done();
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('css'), function css() {
  return src('src/**/*.css')
    .pipe(cssmin())
    .pipe(minifyCSS())
    .pipe(rename({
      suffix: '.min',
   }))
    .pipe(dest('dist/css'))
}
exports.css = css;