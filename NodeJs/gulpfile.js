const gulp=require('gulp');
//sass = require('gulp-sass'),
//autoprefixer = require('gulp-autoprefixer')
const uglify=require('gulp-uglify-es').default;


//4  Metodos importantes en gulp
//gulp.task();
//guilp.src();//Origen de codigo fuente, 
//gulp.dest();//Donde va a dejar los archivo una vez procesada el codigo fuente con el task
//gulp.watch();
/*
gulp.task('sass', ()=>
	gulp.src('./src/*.js') 
	.pipe(sass())
	.pipe(gulp.dest('./artefacts'))
);
*/

gulp.task('watch', function(){
	var watcher = gulp.watch('./src/*.js');
	watcher.on('change',function(event){
		console.log('File: '+event.path + ' was changed!');
	});
});

gulp.task('uglify', ()=>
	//gulp.src('./src/**/.js')
	gulp.src('./src/*.js') 
	.pipe(uglify())
	.pipe(gulp.dest('./dist'))
);

//gulp.watch('./src',['default']);

/*
gulp.task('default', ()=>{
	guilp.src('./dist/',['myTask']);//Origen de codigo fuente, 
});
*/