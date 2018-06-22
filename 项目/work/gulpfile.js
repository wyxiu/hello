const gulp = require("gulp"),
	sass = require("gulp-sass");
	
	// 定制任务：编译sass
gulp.task("sass", function(){
	gulp.src("1号店/sass/*.scss")
		.pipe(sass({outputStyle: "expanded"}))
		.pipe(gulp.dest("dist/css/"));
});

// 监视
gulp.task("watch", function(){
	// 监视*.scss的修改，自动执行编译sass任务
	gulp.watch("sass/*.scss", ["sass"]);
});
