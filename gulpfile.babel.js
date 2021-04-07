import gulp from 'gulp';
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import imagemin from 'gulp-imagemin';
import del from 'del';
import browserSync from 'browser-sync';
import zip from 'gulp-zip';

const server = browserSync.create();

const PRODUCTION = yargs.argv.prod;

const paths = {
	styles: {
		src:['src/scss/bundle.scss','src/scss/admin.scss'],
		dest: 'dist/assets/css'
	},
  images: {
    src:'src/images/**/*.{jpg,jpeg,png,svg,gif}',
		dest: 'dist/assets/images'
  },
  scripts: {
    src:'src/js/index.js',
		dest: 'dist/assets/js'
  },
  other: {
    src:['src/**/*','!src/{images,js,scss}','!src/{images,js,scss}/**/*'],
    dest: 'dist/assets'
  },
  package: {
    src:['**/*', '!.vscode', '!node_modules{,/**}','!packaged{,/**', '!.babelrc','!.gitignore',
    '!gulpfile.babel.js', 'package.json', '!package-lock.json','!webpack.config.js'],
    dest:'packaged'
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
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(server.stream());
}

export const images = () => {
  return gulp.src(paths.images.src)
  .pipe(gulpif(PRODUCTION, imagemin()))
  .pipe(gulp.dest(paths.images.dest));
}

export const watch = () => {
	// gulp.watch('src/scss/sass/**/*.scss', gulp.series(styles, reload))
  gulp.watch(['src/scss/sass/**/*.scss','src/scss/*.scss'], styles)
  gulp.watch('**/*.php', reload)
  gulp.watch(paths.images.src, images)
}

export const copy = () => {
  return gulp.src(paths.other.src)
         .pipe(gulp.dest(paths.other.dest));
}

export const compress = () => {
  return gulp.src(paths.package.src)
        .pipe(zip('zirrat.zip'))
        .pipe(gulp.dest(paths.package.dest));
}

export const dev = gulp.series(clean, copy, gulp.parallel(styles, images), serve, watch);
export const build = gulp.series(clean, copy, gulp.parallel(styles, images));
export const bundle = gulp.series(build, compress);