const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cssnano = require("gulp-cssnano");

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

function css() {
  return src("src/css/*.css")
  .pipe(removeComments())
  .pipe(rename({
      suffix: ".min",
      extname: ".css"
  }))
  .pipe(dest("dist/css"));
  };

  function sass () {
    return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("dist/css"))
 };

  exports.css = css;