(function() {

  'use strict';

  var gulp = require('gulp');

  var dest = 'R:/bd.siteperfect.ru/www/';

  gulp.task('watch', function(){

    gulp.watch(['./*.html'], function(event, cb) {
      gulp.src('./*.html')
        .pipe(gulp.dest(dest))
    });

    gulp.watch(['./css/style.css'], function(event, cb) {
      gulp.src('./css/style.css')
        .pipe(gulp.dest(dest+'css/'))
    });
  });


  gulp.task('default', ['watch']);

})();