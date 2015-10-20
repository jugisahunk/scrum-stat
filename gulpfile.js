var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var testWatcher = gulp.watch('spec/**/*.js', ['default']);

testWatcher.on('change', function(event) {
  console.log('Test ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task('default', function(){
  return gulp.src('spec/*.js')
    .pipe(jasmine({verbose:true, includeStackTrace: true}));
});
