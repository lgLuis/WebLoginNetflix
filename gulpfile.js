const gulp = require('gulp');
// const sass = require('gulp-sass');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

function css() {
    return gulp
        .src('scss/app.scss')
        .pipe(autoprefixer())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(gulp.dest('css'))
}
 function wathArchivos(){
    //  gulp.watch('scss/app.scss', css);
     gulp.watch('scss/*.scss', css);
     gulp.watch('index.html');

 }



//tarea
gulp.task('css', css);
gulp.task('watch', gulp.parallel(wathArchivos));