(function() {

  'use strict';

  var gulp = require('gulp');

  var dest = 'R:/bd.siteperfect.ru/www/';
  var site = './../git/templates/tickets_new_site/';

  gulp.task('watch', function(){

    gulp.watch(['./*.html'], function(event, cb) {
      gulp.src('./*.html')
        .pipe(gulp.dest(dest))
    });

    gulp.watch(['./css/style.css'], function(event, cb) {
      gulp.src('./css/style.css')
        .pipe(gulp.dest(dest+'css/'))
        .pipe(gulp.dest(site+'css/'))
    });
  });


  gulp.task('default', ['watch']);

})();