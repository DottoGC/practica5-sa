const gulp=require('gulp');
const zip=require('gulp-zip');

gulp.task('zipper', ()=>
	//gulp.src('./src/**/.js')
	gulp.src('./src/*') 
	.pipe(zip('restaurante.zip'))
	.pipe(gulp.dest('./dist'))
);

gulp.task('default', gulp.series('zipper'));
