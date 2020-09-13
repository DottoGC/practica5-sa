var gulp = require('gulp');
var sequence = require('gulp-sequence');
var golang = require('gulp-golang');


gulp.task('golang', function () { 
	golang.build('./src/solicitarPedido.go', "./dist/solicitarPedido.exe")
	golang.build('./src/verificarEstadoRestaurante.go', "./dist/verificarEstadoRestaurante.exe")
	golang.build('./src/verificarEstadoRepartidor.go', "./dist/verificarEstadoRepartidor.exe")
 });

/*
gulp.task('spawn', function () { golang.spawn() })
gulp.task('run', function (callback) { sequence('build', 'spawn')(callback) })

gulp.task('watch', function (callback) {
  golang.livereload().listen()
  gulp.start('run')

  watch('**\/*.go', function () {
    gulp.start('run')
    golang.livereload().reload()
  });
});
*/