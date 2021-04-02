import gulp from 'gulp';
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import imagemin from 'gulp-imagemin';
import del from 'del';
import browserSync from 'browser-sync';

const server = browserSync.create();

const PRODUCTION = yargs.argv.prod;

const paths = {
	styles: {
		src:'src/scss/bundle.scss',
		dest: 'dist/assets/css'
	},
  images: {
    src:'src/images/**/*.{jpg,jpeg,png,svg,gif}',
		dest: 'dist/assets/images'
  },
  scripts: {
    src:'src/js/index.js',
		dest: 'dist/assets/js'
  }
}

export const serve = (done) => {
  server.init({
    proxy: "https://localhost/wptraining"
  });
  done();
}

export const reload = (done) => {
  server.reload();
  done();
}

export const clean = () => del(['dist']);

export const styles = () => {
  return gulp.src(paths.styles.src)
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(PRODUCTION, cleanCSS({compatibility: 'ie8'})))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest(paths.styles.dest));
}

export const images = () => {
  return gulp.src(paths.images.src)
  .pipe(gulpif(PRODUCTION, imagemin()))
  .pipe(gulp.dest(paths.images.dest));
}

export const watch = () => {
	gulp.watch('src/scss/sass/**/*.scss', gulp.series(styles, reload))
  gulp.watch(paths.images.src, images)
}


export const dev = gulp.series(clean, gulp.parallel(styles, images), serve, watch);
export const build = gulp.series(clean, gulp.parallel(styles, images));