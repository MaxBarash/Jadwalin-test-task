var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

var paths = {
   styles: {
      src: 'src/styles/**/*.scss',
      dest: 'assets/styles/'
   }
};

function styles() {
   return gulp.src(paths.styles.src)
      .pipe(sass())
      .pipe(gulp.dest(paths.styles.dest));
}

var build = gulp.series(gulp.parallel(styles));

exports.styles = styles;
exports.build = build;

exports.default = build;