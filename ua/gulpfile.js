/**
 * Created by Dmitriy Prilutsky on 13.01.2017.
 */
var           gulp = require('gulp'),
             uncss = require('gulp-uncss'),
         minifyCss = require('gulp-clean-css'),
            uglify = require('gulp-uglify'),
            gulpif = require('gulp-if'),
            useref = require('gulp-useref'),
           htmlmin = require('gulp-htmlmin'),
  stripCssComments = require('gulp-strip-css-comments'),
 stripHtmlComments = require('gulp-strip-comments'),
           version = require('gulp-version-number'),
             clean = require('gulp-clean');

const versionConfig = {
    'value': '%TS%',
    'append': {
        'key': 'v',
        'to': ['css', 'js', 'image']
    }
};

gulp.task('clean', function () {
  return gulp.src(['css', 'js', 'dist'], {read: false}).pipe(clean());
});

gulp.task('copyjs', ['clean'], function () {
    return gulp.src(['src/js/*.js'])
        .pipe(gulp.dest('js'));
});

gulp.task('stripcss', ['copyjs'], function () {
  return gulp.src('./src/css/*.css')
    .pipe(stripCssComments({preserve:false}))
    .pipe(gulp.dest('css'));
});

gulp.task('uncss', ['stripcss'], function () {
  /*return gulp.src('./css/style.css')
    .pipe(uncss({
      html: ['index.html']
    }))
    .pipe(gulp.dest('css'));*/
});

gulp.task('comb', ['uncss'], function () {
  return gulp.src('*.html')
    .pipe(useref())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('dist'));
});

gulp.task('version', ['comb'], function() {
    return gulp.src('./dist/*.html')
        .pipe(version(versionConfig))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['version'], function() {
  return gulp.src('./dist/*.html')
    .pipe(stripHtmlComments({safe: true}))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

