var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	processors = [
		require('postcss-mixins'),
		require('postcss-simple-vars'),
		require('postcss-functions'),
		require('postcss-nested'),
		require('autoprefixer-core')({ browsers: ['last 2 versions', '> 2%'] })
	];

// compile (transform?) CSS
gulp.task('css', function() {
	return gulp.src('source/css/styles.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('dest/styles'));
})