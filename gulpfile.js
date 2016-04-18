var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	webpack = require('webpack-stream')
	processors = [
		require('postcss-mixins'),
		require('postcss-simple-vars'),
		require('postcss-functions'),
		require('postcss-nested'),
		require('autoprefixer-core')({ browsers: ['last 2 versions', '> 2%'] })
	];

// compile (transform?) CSS
gulp.task('css', function() {
	return gulp.src('src/css/styles.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('dist/styles'));
});

gulp.task('webpack', function() {
	return gulp.src('src/index.js')
  .pipe(webpack( require('./webpack.config.js') ))
  .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['css', 'webpack']);