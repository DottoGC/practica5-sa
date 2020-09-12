const gulp=require('gulp');

//4  Metodos importantes en gulp
//gulp.task();
//guilp.src();//Origen de codigo fuente, 
//gulp.dest();//Donde va a dejar los archivo una vez procesada el codigo fuente con el task
//gulp.watch();


gulp.task('myTask', ()=>

	guilp.src('./src');//Origen de codigo fuente, 
	pipe(plugin1)
	pipe(gulp.dest('./artefacts'))
);

//gulp.watch('./src',['default']);

gulp.task('default', ()=>{
	guilp.src('./src',['myTask']);//Origen de codigo fuente, 
});
