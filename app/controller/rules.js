sumeru.router.add(

	{
		pattern: '/rules',
		action: 'App.rules'
	}

);
// sumeru.router.setDefault('App.punish');


App.rules = sumeru.controller.create(function(env, session){
	var swipcount=0;
	var punish_url="127.0.0.1";
	env.onrender = function(doRender){
		doRender("rules", ['none','z']);
	};


	env.onready=function(){
		// document.getElementById('btn_return').addEventListener('click', returnlast);
		init();
		// touch.trigger("swipa", 'swipedown');
		// console.log("ready");
	}
	var rulesgame=["A","getElementById"];
	var init=function(){

		// env.redirect('/undercover_setting',{},true);
	}

	var returnlast=function(){
		 history.go(-1);
	}


});

