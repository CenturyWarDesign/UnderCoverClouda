sumeru.router.add(

	{
		pattern: '/homepage',
		action: 'App.homepage'
	}

);

sumeru.router.setDefault('App.homepage');


App.homepage = sumeru.controller.create(function(env, session){

	var message="";
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
        document.getElementById('turnbottlebtn').addEventListener('click',turnbottle);
        document.getElementById('internet_words').addEventListener('click',internet_words);
        document.getElementById('mail').addEventListener('click',readmessage);
		// $("#talk_turn").html(Math.floor(Math.random()*10+1))
		getUserInfo();
	}	

	//取得玩家未读消息条数
	var getUserInfo =function(){
		var url = Library.base.getUrl("UserGetInfo");
		sumeru.external.get(url, sendSuccess);
	}

	var sendSuccess = function(data) {
		var stu = eval('(' + data + ')');
		var temdata = eval('(' + stu.data + ')');
		var mail=temdata.mail;
		if(mail!=null){
			message=mail[0].content;
			$("#badge").html("1");
		}
		console.log(temdata);
	}

	var readmessage=function(){
		if(message=="")
		{
			alert("没有未读消息");
			return;
		}
		alert(message);
		$("#badge").html("");
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

    var turnbottle = function(){
    	env.redirect('/turnbottle',true);
    } 
    var internet_words = function(){
    	env.redirect('/publishwords',true);
    }
});