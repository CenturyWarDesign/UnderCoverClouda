sumeru.router.add(

	{
		pattern: '/punish',
		action: 'App.punish'
	}

);
// sumeru.router.setDefault('App.punish');


App.punish = sumeru.controller.create(function(env, session){
	var swipcount=0;
	var punish_url="127.0.0.1";
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
		getword();
	}

	var getword=function(){
		console.log(sumeru.config.get(""));
		var url = "http://42.121.123.185/CenturyServer/Entry.php?cmd=PublishRandomOne"; 
		// url="http://192.168.1.31/Entry.php?cmd=PublishRandomOne";
		sumeru.external.get(url,getCallback);
	}
	

	var getCallback = function(data){ 
		// console.log(data);
		var stu = eval('('+data+')');
		var temdata=eval('('+stu.data+')');
		$("#punishword").html(temdata[0].content);
	} 


});

