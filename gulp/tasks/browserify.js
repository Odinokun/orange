'use strict';

module.exports = function () {
  $.gulp.task('browserify', function () {
    return $.browserify({
        entries: 'source/js/app.js',
        debug: true
      })
      .bundle()
      .pipe($.sourceStream('app.js'))
      .pipe($.buffer())
      .pipe($.gulp.dest($.config.root + '/assets/js'));
  });
};