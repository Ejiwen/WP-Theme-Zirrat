// import gulp from "gulp";
// var sass = require('gulp-sass');
// import browserSync from 'browser-sync';

// export const hello = (done) => {
//   console.log('Hello');
//   done();
// }


// export const styles = () => {
//   return gulp.src('src/scss/bundle.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('dist/'))
// }


// export const watch = () => {
//   gulp.watch('src/scss/**/*.scss', gulp.series(styles, reload));
//   gulp.watch('**/*.php', reload);
// }

// const server = browserSync.create();

// export let serve = (cb) => {
//   server.init({
//     proxy: "localhost/wptraining",
//   });
//   cb();
// }

// export let reload = (cb) => {
//   browserSync.reload();
//   cb();
// }

// export const dev = gulp.series(styles, serve, watch);

// Require gulp packages
var gulp = require('gulp');
var sass = require('gulp-sass');
var browsersync = require('browser-sync');
var reload = browsersync.reload;

// Task 1 - Compile and minify Sass
gulp.task('sass', function () {
  return gulp.src('./src/scss/sass/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});


// Task 4 - Set up Browsersync

gulp.task('browser-sync', function() {
  browsersync.init({
  proxy: 'localhost/wptraining'
  });
});

gulp.task('reload', function () {
  browsersync.reload();
});

// Task 5 - Set up Watchers
gulp.task('watch', function() {
  gulp.watch('./src/scss/sass/*.scss' ['sass']);
  gulp.watch(['./src/scss/sass/*.scss', './src/js/*.js', '*.php'], ['reload']);
});

// Default Gulp tasks
gulp.task('default', ['sass', 'js', 'browser-sync', 'watch' ]);