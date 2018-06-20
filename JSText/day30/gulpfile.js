const gulp = require("gulp"),
	minifyCss = require("gulp-clean-css"),
	uglify = require("gulp-uglify"),
	babel = require("gulp-babel"),
	connect = require("gulp-connect");
	
	gulp.task("css",function(){
		gulp.src("src/css/*.css")
			.pipe(minifyCss())
			.pipe(gulp.dest("dist/css/"));
	});
	gulp.task("js",function(){
		gulp.src("src/js/*.js")
			.pipe(babel({
				presets:['env']
			}))
			.pipe(uglify())
			.pipe(gulp.dest("dist/js/"));
	});
	gulp.task("connect",function(){
		connect.server({
			root:'src'
		});
	});