'use strict';
 
var { series, src, dest, watch } = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
 
// gulp.task('sass', function () {
//   return gulp.src('./sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// });
 
// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });

function preprocessSass(cb) {
	src('./sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./css/'));
	cb();
}

// function sassWatch(cb) {
// 	watch(['./sass/**/*.scss'], sass());
// 	cb();
// }

// watch(['./sass/**/*.scss'], sass());

function wachSass(cb) {
	watch('./sass/**/*.scss', preprocessSass);
	cb();
}

function defaultTask(cb) {
	series(preprocessSass, wachSass)
	cb();
}

exports.default = series(preprocessSass, wachSass);
// exports.default = preprocessSass;

// exports.default = defaultTask
// gulp.task('default', ['sass:watch'], function() {
// 	cb();
// });