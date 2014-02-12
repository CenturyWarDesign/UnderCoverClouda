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
		doRender("punish", ['none','z']);
	};


	env.onready=function(){
		document.getElementById('btn_return').addEventListener('click', returnlast);
		touch.on(document.getElementById('swipa'), 'tap', reflashword );
		touch.on(document.getElementById('swipa'), 'swipedown', reflashword );
		touch.on(document.getElementById('swipa'), 'swiperight', reflashword );
		// touch.trigger("swipa", 'swipedown');
		console.log("ready");
	}

	var startgame=function(){
		// env.redirect('/undercover_setting',{},true);
	}

	var returnlast=function(){
		 history.go(-1);
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
		try
		{
			console.log(temdata[0]);
			if(temdata[0].type==2)
			{
				//真心话
				$("#punishword").css('color','green');
			}
			else if(temdata[0].type==1){
				$("#punishword").css('color','red');	
			}
			$("#punishword").html(temdata[0].content);
		}
		catch(err){
			$("#punishword").css('color','#996633');
			$("#punishword").html("可以免除惩罚");
		}
		
	} 


});

