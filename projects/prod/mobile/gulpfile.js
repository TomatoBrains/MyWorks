let gulp = require('gulp');
let browserSync = require('browser-sync');
let sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
let concatCss = require('gulp-concat-css');
let ftp = require('gulp-ftp');
let cssc = require('gulp-css-condense');
const image = require('gulp-image');
let notify = require('gulp-notify');
let plumber = require('gulp-plumber');
var rtlcss = require('gulp-rtlcss');
// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });

    // Следим за изменениями файлов
    gulp.watch("src/assets/sass/**/*.sass", ['sass']);
    gulp.watch("src/assets/sass/**/*.scss", ['sass']);
    gulp.watch("src/assets/sass/*.sass", ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Компиляция и обновление
gulp.task('sass', function() {
    return gulp.src("src/assets/sass/*.sass")
        .pipe(plumber({
          errorHandler: notify.onError(function(err) {
          return {
          title: 'sass',
          sound: false,
          message: err.message
          }
          })
          }))
        .pipe(sass().on('Error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 7 versions'],
            cascade: false
        	}))
        .pipe(concatCss('style.css'))
        .pipe(gulp.dest("src/assets/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

gulp.task('image', function () {
  gulp.src('src/assets/img/**/*')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
      concurrent: 10,
      quiet: true // defaults to false
    }))
    .pipe(gulp.dest('dist/img'));
});
gulp.task('rtl', function () {
    return gulp.src('src/assets/css/style.css')
        .pipe(rtlcss())
        .pipe(gulp.dest('dist'));
});