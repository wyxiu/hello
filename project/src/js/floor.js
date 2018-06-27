
//楼层导航
        var top_f1 = $(".level").eq(0).offset().top; //1楼相对于文档的定位
                if(_srcoll > top_f1 - $(window).innerHeight()/2){
                    $(".navigation").css({
                        display:"block"
                    })
                    for(var i = 0,len = $(".navigation a").length; i < len ; i++){
                        $(".navigation a").eq(i).removeClass("current");
                    }
                    $(".navigation a").eq(0).addClass("current");
                }else{
                    $(".navigation").css({
                        display:"none"
                    })        
                }
        var top_f2 = $(".level").eq(1).offset().top; //2楼相对于文档的定位
                if(_srcoll > top_f2 - $(window).innerHeight()/2){
                    for(var i = 0,len = $(".navigation a").length; i < len ; i++){
                        $(".navigation a").eq(i).removeClass("current");
                    }
                    $(".navigation a").eq(1).addClass("current");
                }
        var top_f3 = $(".level").eq(2).offset().top; //3楼相对于文档的定位
                if(_srcoll > top_f3 - $(window).innerHeight()/2){
                    for(var i = 0,len = $(".navigation a").length; i < len ; i++){
                        $(".navigation a").eq(i).removeClass("current");
                    }
                    $(".navigation a").eq(2).addClass("current");
                }
        
        var top_f4 = $(".level").eq(3).offset().top; //4楼相对于文档的定位
                if(_srcoll > top_f4 - $(window).innerHeight()/2){
                    for(var i = 0,len = $(".navigation a").length; i < len ; i++){
                        $(".navigation a").eq(i).removeClass("current");
                    }
                    $(".navigation a").eq(3).addClass("current");
                }
        var top_f5 = $(".level").eq(4).offset().top; //5楼相对于文档的定位
                if(_srcoll > top_f5 - $(window).innerHeight()/2){
                    for(var i = 0,len = $(".navigation a").length; i < len ; i++){
                        $(".navigation a").eq(i).removeClass("current");
                    }
                    $(".navigation a").eq(4).addClass("current");
                }
        
        var top_f6 = $(".level").eq(5).offset().top; //6楼相对于文档的定位
                if(_srcoll > top_f6 - $(window).innerHeight()/2){
                    for(var i = 0,len = $(".navigation a").length; i < len ; i++){
                        $(".navigation a").eq(i).removeClass("current");
                    }
                    $(".navigation a").eq(5).addClass("current");
                }
        var top_f7 = $(".level").eq(6).offset().top; //7楼相对于文档的定位
                if(_srcoll > top_f7 - $(window).innerHeight()/2){
                    for(var i = 0,len = $(".navigation a").length; i < len ; i++){
                        $(".navigation a").eq(i).removeClass("current");
                    }
                    $(".navigation a").eq(6).addClass("current");
                }
        var top_f8 = $(".level").eq(7).offset().top; //8楼相对于文档的定位
                if(_srcoll > top_f8 - $(window).innerHeight()/2){
                    for(var i = 0,len = $(".navigation a").length; i < len ; i++){
                        $(".navigation a").eq(i).removeClass("current");
                    }
                    $(".navigation a").eq(7).addClass("current");
                }