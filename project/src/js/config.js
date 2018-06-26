require.config({
	baseUrl:"/",
	paths:{
		jquery:"lib/jquery/jquery-1.12.4.min",
		template : "lib/arttemplate/template-web",
		load:"js/loadHeaderAddFooter",
		xm_carousel:"lib/jquery-plugins/jquery.xm_carousel"
		
	},
	shim:{
		xm_carousel : {
			deps : ["jquery"]
		}
	}
});
