var gulp = require('gulp');
var sass = require('gulp-sass');

// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
//     console.log('This is a default Gulp task.');
// }


gulp.task('styles', function(done) {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        done();
});

gulp.task('default', function(done) {
    // place code for your default task here
    // gulp.watch('sass/**/*.scss', 'styles');
    done();
});

// gulp.task('default', ['styles']);


// from Udacity - does not work. 
// let gulp = require('gulp');
// gulp.task('default', () => {
//     // do something. 
//     console.log('This is a defualt Gulp task.');
// });

// exports.default = defaultTask