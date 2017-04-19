'use strict';

global.$ = {
  package:  require('./package.json'),
  config:   require('./gulp/config'),
  path: {
    task:           require('./gulp/paths/tasks.js'),
    jsFoundation:   require('./gulp/paths/js.foundation.js'),
    cssFoundation:  require('./gulp/paths/css.foundation.js'),
    app:            require('./gulp/paths/app.js')
  },
  gulp:         require('gulp'),
  spritesmith:  require('gulp.spritesmith'),
  merge:        require('merge-stream'),
  rimraf:       require('rimraf'),
  browserSync:  require('browser-sync').create(),
  browserify:   require('browserify'),
  buffer:       require('vinyl-buffer'),
  sourceStream: require('vinyl-source-stream'),
  gp:           require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'js:foundation',
    'js:process',
    'browserify',
    'copy:fonts',
    'copy:php',
    'copy:video',
    'css:foundation',
    'image:min',
    'sprite:svg',
    'sprite:png'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
