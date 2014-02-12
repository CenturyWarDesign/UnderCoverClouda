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
		document.getElementById('back').addEventListener('click', back);
	}

	var startgame=function(){
		// env.redirect('/undercover_setting',{},true);
	}

	var reflashword=function(){
		console.log("starttap");
		swipcount++;

		$("#punishword").html(getWord());
	}
	var back=function(){
		self.close();
	}
	var getWord=function(){
		var words=[
		'台灯_电灯',
      	'玫瑰_月季',
		'若曦_晴川',
		'孟非_乐嘉',
		'牛奶_豆浆',
		'保安_保镖',
		'白菜_生菜',
		'辣椒_芥末',
		'金庸_古龙',
		'赵敏_黄蓉',];
		var randomword=words[parseInt(Math.random()*words.length)];
		return randomword;
	}

});


