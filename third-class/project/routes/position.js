var express = require('express');
var router = express.Router();
var PositionController = require("../controllers/PositionController")
// 配置文件上传
var multer = require('multer');

// 配置磁盘存储
var storage = multer.diskStorage({
	// 保存到磁盘的目标位置
	destination: function(req, file, cb) {
		cb(null, './public/upload'); // 将上传文件保存到 public 下的 upload 子目录中
	},
	// 配置保存文件的文件名规则
	filename: function(req, file, cb) {
		// baidu_jgylogo3.gif
		// "logo-193284793287.gif"
		cb(null, file.fieldname + '-' + Date.now() + file.originalname.slice(file.originalname.lastIndexOf(".")))
	}
});
// 创建上传实例
var upload = multer({
	storage: storage
})
// 路由：post方式请求 /add 资源，添加职位
// 实现文件上传

router.post("/add",upload.single("logo"), PositionController.add);

//查询职位
router.get("/list",PositionController.list);

router.get("/page",PositionController.page);

router.get("/modify",PositionController.modify);

module.exports = router;