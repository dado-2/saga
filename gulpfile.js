const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('dev', function () {
  nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: ['node_modules/'],
    env: { NODE_ENV: 'development' }
  });
});