sumeru.router.add(

	{
		pattern: '/homepage',
		action: 'App.homepage'
	}

);

sumeru.router.setDefault('App.homepage');


App.homepage = sumeru.controller.create(function(env, session){

	env.onrender = function(doRender){
		doRender("homepage", ['none','z']);
		// initConfig();
	};
	

	env.onready=function(){
		document.getElementById('game_undercover').addEventListener('click', undercover);
		document.getElementById('game_killer').addEventListener('click', killer);
		document.getElementById('game_tures').addEventListener('click', tures);
		document.getElementById('game_numbers').addEventListener('click', numbers);
		document.getElementById('game_rules').addEventListener('click', rules);
		document.getElementById('internet_publish').addEventListener('click', internet_publish);

		// $("#talk_turn").html(Math.floor(Math.random()*10+1))
	}	

	var undercover=function(){
		// env.close();
		env.redirect('/undercover_setting',true);
		// initGuess();
	}

	var killer=function(){
		env.redirect('/killer_setting',true);
	}

	var internet_publish=function(){
		// env.callSubController('/punish',{})
		env.redirect('/internet_publish',{'type':'tures'},true);
	}
	
	var tures=function(){
		// env.callSubController('/punish',{})
		env.redirect('/punish',true);
	}
	var numbers=function(){
		// env.callSubController('/punish',{})
		env.redirect('/click_game',{'type':'tures'},true);
	}

	var rules=function(){
		// env.callSubController('/punish',{})
		env.redirect('/rules',{'type':'tures'},true);
	}
});