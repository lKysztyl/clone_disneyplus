const gulp = require('gulp')
const sass = require ('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')


function style() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'))
};

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
};

function watchFiles() {
    gulp.watch('./src/styles/*.scss', style);
    gulp.watch('./index.html', style)
}

exports.style = style;
exports.watch = watchFiles;
exports.default = gulp.series(style, watchFiles);