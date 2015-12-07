'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

gulp.task('babel', function() {
	return gulp.src('src/patchitem/patchitem.es6')
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(concat('patchitem.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./src/patchitem'));
});
