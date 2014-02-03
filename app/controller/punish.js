sumeru.router.add(

	{
		pattern: '/punish',
		action: 'App.punish'
	}

);
// sumeru.router.setDefault('App.punish');


App.punish = sumeru.controller.create(function(env, session){
	var swipcount=0;
	env.onrender = function(doRender){
		doRender("punish", ['push','left']);
	};


	env.onready=function(){
		// document.getElementById('start_undercover').addEventListener('click', startgame);
		touch.on(document.getElementById('swipa'), 'tap', reflashword );
		// touch.trigger("swipa", 'swipedown');
		console.log("ready");
	}

	var startgame=function(){
		// env.redirect('/undercover_setting',{},true);
	}

	var reflashword=function(){
		console.log("starttap");
		swipcount++;
		$("#punishword").html("向下滑动第"+swipcount+"次");
	}


});

