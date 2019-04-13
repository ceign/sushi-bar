var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();



gulp.task('sass', async function () {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        //.pipe(cssnano())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.stream());
});


gulp.task('comprimir', async function() {
    gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('app/js/dist/'));
});


gulp.task('autoprefijar', async function(){
    gulp.src('scss/**/.scss')
    .pipe(gulp.dest('app/css/'))
    }
);
  

gulp.task('serve', gulp.series('sass', async function () {
    browserSync.init({
        server: "./app"
    });

    gulp.watch('app/js/*.js', gulp.series('comprimir')).on('change', browserSync.reload);
    gulp.watch('scss/*.scss', gulp.series('sass')).on('change', browserSync.reload);
    gulp.watch('app/*.html').on('change', browserSync.reload);

}));

gulp.task('default', gulp.series('serve'));
