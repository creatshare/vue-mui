var gulp = require('gulp');
var webpack = require('gulp-webpack');
var less = require('gulp-less');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var minify = require('gulp-minify');



//less to css
gulp.task('less', function(){
	return gulp.src('src/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('src/css/'))
})

//bundle css
gulp.task('bundle', ['less'], function(){
	gulp.src(['src/css/*.css'])
		.pipe(concat('mui.css'))
		.pipe(gulp.dest('dist/'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/'))
})

/**
 * [example]
 * @return {[type]}            [description]
 */
gulp.task('e', ['run'],function(){

	return gulp.src('example/app.js')
		.pipe(webpack(getConfig({
			watch : true,
			output: {
				filename: 'test.js'
			},
		})))
		.pipe(gulp.dest('dist/'))
});


gulp.task('run', function(){
	gulp.watch('src/less/*.less', ['bundle']);
})

//bundle library
gulp.task('set', function(){
	return gulp.src('src/index.js')
		.pipe(webpack(getConfig({
			watch: true,
			output: {
				filename: 'vue-mui.js',
				library: 'vueMui',
        		libraryTarget: 'umd'
			},
		})))
		.pipe(gulp.dest('dist/'))
		.pipe(rename({
			basename: 'vue-mui'
		}))
		.pipe(minify())
		.pipe(gulp.dest('dist/'))

})




/**
 * [getConfig description]
 * @param  {[type]} opt [description]
 * @return {[type]}     [description]
 */
function getConfig(opt){
	var config = {
		module : {
			loaders : [
				{ test : /\.vue$/, loader : "vue"},
				{ test: /\.png$/, loader: "url-loader?mimetype=image/png" },
				{ test: /\.css$/, loader: "style!css" },
				{ test: /\.less$/, loader: "style!css!less" }

			]
		},
		devtool : 'source-map'
	}

	if (!opt) {
		return config
	}

	for (var i in opt) {
		config[i] = opt[i]
	}

	return config
}