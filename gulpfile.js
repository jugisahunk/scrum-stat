var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('default', function(){
  console.log("These aren't the droids we're looking for. Move along...");
});

gulp.task('watch', function(){
  gulp.watch('spec/**/*.js', ['default']);
});

gulp.task('test', function(){
  return gulp.src('spec/*.js')
    .pipe(jasmine({verbose:true, includeStackTrace: true}));
});
