import gulp from "gulp";
var sass = require('gulp-sass');
import browserSync from 'browser-sync';

export const hello = (done) => {
  console.log('Hello');
  done();
}


export const styles = () => {
  return gulp.src('src/scss/bundle.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/'));
}


export const watch = () => {
  gulp.watch('src/scss/**/*.scss', gulp.series(styles, serve,reload));
  gulp.watch('**/*.php', reload);
}

const server = browserSync.create();

export const serve = (cb) => {
  server.init({
    proxy: "http://localhost/wptraining/",
    baseDir: '.'
  });
  cb();
}

export const reload = (cb) => {
  server.reload();
  cb();
}

export const dev = gulp.series(styles, serve, watch);
