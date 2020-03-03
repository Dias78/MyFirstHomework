const gulp = require('gulp');
const browserSync = require('browser-sync').create();
// const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');


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
  gulp.watch("src/css/*.css").on('change', browserSync.reload);
});

gulp.task('minify-css', () => {
  return gulp.src('src/**/*.css')
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
  .pipe(gulp.dest('dist'));
});