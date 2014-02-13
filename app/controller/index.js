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
		document.getElementById('start_undercover').addEventListener('click', startgame);
		myAuth.on('statusChange',statusChangeHandle);
	}

	var startgame=function(){
		var myAuth = sumeru.auth.create(env); 
		var userinfo= myAuth.getUserInfo();
		console.log(userinfo);
		// login();
		// 
		// env.redirect('/undercover_setting');		
	}
	
	var statusChangeHandle = function(err,status){ 
		switch(status){ 
			case "not_login" : // do something 
			console.log("not_login");
			break; 
			case "logined" : // do something 
			console.log("logined");
			break; 
			case "doing_login" : // do something 
			console.log("doing_login");
			break; 
		} 
	} 

	var login =function(){
		var myAuth = sumeru.auth.create(env); 
		myAuth.login('wanbin89731','wanbinGIT');
		// var errObj = myAuth.getLastError()
		// console.log(errObj);
	}


});

