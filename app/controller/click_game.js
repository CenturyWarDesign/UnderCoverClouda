sumeru.router.add(

	{
		pattern: '/click_game',
		action: 'App.click_game'
	}

);

//sumeru.router.setDefault('App.itworks');

App.click_game = sumeru.controller.create(function(env, session){
	env.onrender = function(doRender){
		doRender("click_game", ['none','z']);
	};

	var number=80;
	var array=[];
	var randomnumber=1;
	var upnumber;
	var mine;
		env.onready=function(){

			init();
			document.getElementById('punish').addEventListener('click', punish);
			document.getElementById('restart').addEventListener('click', restart);
			document.getElementById('homepage').addEventListener('click', homepage);

		};


var init=function(){
	//随机地雷
	mine=parseInt(Math.random()*59+1);
	//初始化栅格
	$("#clickcontent").html("");
			for (var i = 1; i <=60; i++) 
			{
				
				var temhtml="<button id='under_"+i+"'  type='button' class='btn btn-default' style='width:15%;margin:3px'  onclick=''>"+i+"</button>"
				$("#clickcontent").append(temhtml);
				document.getElementById('under_'+i).addEventListener('click', tapindex);
				array[i]=1;

			}
			console.log("地雷"+mine);
}
				
var tapindex=function(){
	var index=this.id.split('_')[1];
	number=parseInt(Math.random()*10+2);
	getupnumber();
	for(var i=1;i<=number;i++){
		
		if(upnumber>number&&index!=mine){
			while(array[randomnumber]==0||randomnumber==mine)
			{
				randomnumber=parseInt(Math.random()*60);
			}
			array[randomnumber]=0;
			$("#under_"+randomnumber).attr("disabled", "disabled");
			$("#under_"+randomnumber).html("@@");
					}else{
			// for(var i=1;i<=upnumber;i++){
			// 	while(array[randomnumber]==0)
			// 		{
			// 			randomnumber=parseInt(Math.random()*60);
			// 		}
			// 		array[randomnumber]=0;
			// 		$("#under_"+randomnumber).attr("disabled", "disabled");
			//}
	for(var i=1;i<=80;i++){
		if(array[i]==1){
			array[i]=0;
			$("#under_"+i).attr("disabled", "disabled");
		}
	}

			alert("请接受惩罚!!");
			return;
		}

		
	}
}
var getupnumber=function(){
	upnumber=0;
	for(var i=1;i<=80;i++){
		if(array[i]==1){
			upnumber++;
		}
	}
}
var punish=function(){
		// env.callSubController('/punish',{})
		env.redirect('/punish',{},true);
	}
var homepage=function(){
		env.redirect('/homepage');
}
var restart=function(){
	// env.redirect('/click_game',{},true);
	init();

}
});


