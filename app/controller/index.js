sumeru.router.add(

	{
		pattern: '/index',
		action: 'App.index'
	}

);
// sumeru.router.setDefault('App.undercover');


App.index = sumeru.controller.create(function(env, session){
	var myAuth = sumeru.auth.create(env);
	env.onrender = function(doRender){
		doRender("index", ['push','left']);
	};


	env.onready=function(){
		document.getElementById('game_undercover').addEventListener('click', undercover);
		document.getElementById('game_killer').addEventListener('click', killer);
		document.getElementById('game_true').addEventListener('click', tures);
		document.getElementById('game_rules').addEventListener('click', rules);
		// document.getElementById('game_click').addEventListener('click', clicks);
		// $("#game_bottle").hide();
	}	

	var undercover=function(){
		env.redirect('/undercover_setting',true);
	}

	var killer=function(){
		env.redirect('/killer_setting',true);
	}

	var tures=function(){
		// env.callSubController('/punish',{})
		env.redirect('/punish',{'type':'tures'},true);
	}
	var rules=function(){
		// env.callSubController('/punish',{})
		env.redirect('/rules',{'type':'tures'},true);
	}
	// var clicks=function(){
	// 	// env.callSubController('/punish',{})
	// 	env.redirect('/rules',{'type':'tures'},true);
	// }

});

