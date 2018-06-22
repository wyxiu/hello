
//引入模块
const gulp = require("gulp"),
	minifyCss = require("gulp-clean-css"),
	uglify = require("gulp-uglify"),
	babel = require("gulp-babel"),
	connect = require("gulp-connect");


//定制任务

	gulp.task("css",function(){
		gulp.src("src/css/*.css")//要编译文件夹的位置
			.pipe(minifyCss())
			.pipe(gulp.dest("dist/css/"));//放在哪里
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
	
gulp.task("sass",function(){
	gulp.src("sass/*.scss")
		.pipe(sass({output:expanded}))
		.pipe(gulp.dest("dist/sass/"));

});

//监视===相当于修改后自动更新