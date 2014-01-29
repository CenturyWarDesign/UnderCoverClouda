sumeru.router.add(

	{
		pattern: '/undercover_setting',
		action: 'App.undercover_setting'
	}

);
// sumeru.router.setDefault('App.undercover_setting');
App.undercover_setting = sumeru.controller.create(function(env, session){
	env.onrender = function(doRender){
		doRender("undercover_setting", ['push','left']);
	};

	env.onready=function(){
		
		// document.getElementById('start_undercover').addEventListener('click', startgame);
	}


});

