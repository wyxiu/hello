require.config({
	baseUrl:"/",
	paths:{
		jquery:"lib/jquery/jquery-1.12.4.min",
		template : "lib/arttemplate/template-web",
		load:"js/loadHeaderAddFooter",
		xm_carousel:"lib/jquery-plugins/jquery.xm_carousel",
		cookie : "lib/jquery-plugins/jquery.cookie",
		fly : "lib/jquery-plugins/jquery.fly.min",
		zoom : "lib/jquery-plugins/jquery.elevateZoom-3.0.8.min",
		bootstrap:"lib/bootstrap/js/bootstrap.min"
	},
	shim:{
		xm_carousel : {
			deps : ["jquery"]
		},
		fly : {
			deps : ["jquery"]
		},
		zoom : {
			deps : ["jquery"]
		},
		bootstrap : {
			deps : ["jquery"]
		}
	}
});
