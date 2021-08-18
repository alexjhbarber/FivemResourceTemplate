'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var concat = require("gulp-concat");


gulp.task('sass', function(){
    return gulp.src('./scss/style.scss')
                .pipe(sass())
                .pipe(gulp.dest('../'))
});

gulp.task('js', function(){
    return gulp.src("./js/**/*.js")
                .pipe(concat("script.js"))
                .pipe(gulp.dest("../"))
})

gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', gulp.series('sass')); 
    gulp.watch('js/**/*.js', gulp.series('js')); 

})
  