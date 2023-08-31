const gulp = require('gulp')
const sass = require ('gulp-sass')(require('sass'))


function ab(cb) {
    console.log('oi')
    cb()
}

exports.default = ab