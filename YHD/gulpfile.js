const gulp = require("gulp"),
	connect = require("gulp-connect"),
	sass = require("gulp-sass");
	
	gulp.task("connect",function(){
		connect.server({
			root:"dist",
			livereload:true
		});
	});
	
//让html页面重新加载
gulp.task("html",function(){
	gulp.src("src/**/*.html")
		.pipe(gulp.dest("dist/"))
		.pipe(connect.reload());
});

//复制lib目录
gulp.task("copy-lib",function(){
	gulp.src("src/lib/**/*.*")
		.pipe(gulp.dest("dist/lib"))
});

//复制tupian目录
gulp.task("copy-img",function(){
	gulp.src("src/img/**/*.*")
		.pipe(gulp.dest("dist/img"))
});

//复制假数据目录
gulp.task("copy-mock",function(){
	gulp.src("src/mock/**/*.*")
		.pipe(gulp.dest("dist/mock"))
		
});

//复制font文件夹据目录
gulp.task("copy-font",function(){
	gulp.src("src/font/**/*.*")
		.pipe(gulp.dest("dist/font"))
		
});

//复制js目录
gulp.task("js",function(){
	gulp.src("src/js/**/*.js")
		.pipe(gulp.dest("dist/js"))
		.pipe(connect.reload());
});

gulp.task("copy",["copy-lib","copy-img","copy-mock","copy-font"]);
	
gulp.task("sass",function(){
	gulp.src("src/sass/*.scss")
		.pipe(sass({outputStyle:"expanded"}))
		.pipe(gulp.dest("dist/css"))
		.pipe(connect.reload());

});

gulp.task("watch",function(){
		gulp.watch("src/sass/*.scss",["sass"]);
		gulp.watch("src/**/*.html",["html"]);
		gulp.watch("src/**/*.js",["js"]);
	});
//定制默认任务	
gulp.task("default",["html","js","sass","copy","connect","watch"]);
