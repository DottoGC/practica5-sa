const gulp=require('gulp');
const zip=require('gulp-zip');

gulp.task('zipper', ()=>
	gulp.src('./src/*') 
	.pipe(zip('repartidor.zip'))
	.pipe(gulp.dest('./dist'))
);

gulp.task('default', gulp.series('zipper'));
