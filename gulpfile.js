const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const minifyCSS = require('gulp-csso')

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
  gulp.watch("src/css/*.css")on('change', browserSync.reload);
  gulp.watch("./*.html").on('change', browserSync.reload);
});


gulp.task('mincss', function() {
  return gulp.src("src/css/*.css")
  .pipe(rename({suffix: ".min"}))
  .pipe(minifyCSS())
  .pipe(gulp.dest("dist/css"));
  })

  exports.css = css;