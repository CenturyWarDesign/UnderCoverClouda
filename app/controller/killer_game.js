//这是杀人游戏引导的界面
sumeru.router.add(

	{
		pattern: '/killer_game',
		action: 'App.killer_game'
	}

);
//sumeru.router.setDefault('App.itworks');

App.killer_game = sumeru.controller.create(function(env, session){
	env.onrender = function(doRender){
		doRender("killer_game", ['none','z']);
	};

	var fathercount =6;

	env.onready=function(){
		var wordstring=session.get("content").split(",");
		fathercount=wordstring.length;
		var faguanindex=1;
		for (var i =1;i<= wordstring.length; i ++) {
			if(	wordstring[i-1]=='法官'){
				faguanindex=i;
			}
		};
		$("#killer_wordtext").html("请【"+faguanindex+"】号法官大人主持游戏");
		console.log("restart");


		document.getElementById('restart').addEventListener('click', restart);
		document.getElementById('setting_game').addEventListener('click', underwordsetting);
		document.getElementById('punish').addEventListener('click', punish);

	}


	var restart=function(){
		// env.close();
		env.redirect('/fanpai',{'fathercount':fathercount,'type':'killer'},true);
	}

	var underwordsetting=function(){
		env.redirect('/killer_setting',{'fathercount':fathercount},true);
	}

	var punish=function(){
		// env.callSubController('/punish',{})
		env.redirect('/punish',{},true);
	}
	

});