var gulp = require('gulp');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var fs = require('fs');

gulp.task('js',function(){
  gulp.src(['modules/**/!(*.spec).js','app/app.js','app/modules/**/!(*.spec).js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/assets'));
});

gulp.task('css',function(){
  gulp.src('app/modules/**/*.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/assets'));
});

gulp.task('build-assets',['css','js']);
