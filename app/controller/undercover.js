sumeru.router.add(

	{
		pattern: '/undercover',
		action: 'App.undercover'
	}

);
sumeru.router.setDefault('App.undercover');
App.undercover = sumeru.controller.create(function(env, session){
	env.onrender = function(doRender){
		doRender("undercover", ['push','left']);
	};


	env.onready=function(){
		document.getElementById('start_undercover').addEventListener('click', startgame);
	}

	var startgame=function(){
		env.redirect('/undercover_setting');
	}


});

