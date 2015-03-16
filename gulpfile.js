var gulp = require('gulp'); 
var concat = require('gulp-concat');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');


gulp.task('minify-css', function() {
var cssPath = {cssSrc:['./css/*.css', '!*.min.css', '!/**/*.min.css'], cssDest:'./css'};
 
  return gulp.src(cssPath.cssSrc)
    .pipe(concat('styles.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(cssPath.cssDest));
});

gulp.task('default', [ 'minify-css'], function() {
});