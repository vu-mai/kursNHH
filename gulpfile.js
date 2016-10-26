/*
    gulpfile.js
*/

var gulp        = require('gulp'),
    browserSync = require('browser-sync').create();

// browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// reload all Browsers
gulp.task('bs-reload', function() {
    browserSync.reload();
});

// default task to be run with `gulp` command
// this default task will run BrowserSync & then use Gulp to watch files.
// when a file is changed, an event is emitted to BrowserSync with the filepath.
gulp.task('default', ['browser-sync'], function() {
    gulp.watch('css/*.css', function(file) {
        if (file.type === "changed") {
            browserSync.reload(file.path);
        }
    });
    gulp.watch(['*.html'], ['bs-reload']);
    gulp.watch(['js/*.js'], ['bs-reload']);
    gulp.watch(['css/*.scss'], ['bs-reload']);
});
