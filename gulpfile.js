var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('watch', function(){
  gulp.watch(['spec/**/*.js', 'js/**/*.js'], ['test']);
});

gulp.task('test', function(){
  return gulp.src('spec/*.js')
    .pipe(jasmine({verbose:true, includeStackTrace: false}));
});

gulp.task('default', ['test']);
