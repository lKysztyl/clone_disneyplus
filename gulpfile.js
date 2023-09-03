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

exports.default = () => {
    gulp.watch('./src/styles/*.scss', './index.html', gulp.parallel(style, images)); 
}