var gulp = require('gulp'),
	browserify = require('browserify'),
	reactify = require('reactify'),
	source = require('vinyl-source-stream'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass');

//browserify task
gulp.task('browserify', function(){
	browserify('./src/js/main.js')
		.transform('reactify')
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('app/js'));
});

//Copy HTML task
gulp.task('copy', function(){
	gulp.src('src/*.html')
		.pipe(gulp.dest('app'));
});

//Saas task
gulp.task('sass', function(){
	gulp.src('src/scss/*.scss')
		.pipe(gulp.dest('app/css'));
});

//Default task
gulp.task('default', ['browserify', 'copy', 'sass'], function(){
	return gulp.watch('src/**/*.*', ['default']);
});