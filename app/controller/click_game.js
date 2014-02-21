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
	var array;
	var randomnumber;
	var upnumber;
		env.onready=function(){

			// init();
			document.getElementById('punish').addEventListener('click', punish);

		};

/*
var init=function(){
	$("#clickcontent").html("");
			for (var i = 1; i <=80; i++) 
			{
				if((i-1)%8==0)
				{
					$("#clickcontent").append('<br/>');
				}
				var temhtml="<button id='under_"+i+"'  type='button'class='btn btn-default' style='width:31%;margin:1%;padding:15px' onclick=''>"+i+"</button>"
				$("#clickcontent").append(temhtml);
				document.getElementById('under_'+i).addEventListener('click', tapindex);
				array[i]=1;

			}
}
				
var tapindex=function(){
	number=parseInt(Math.random()*peoplearray.10);
	for(var i=1;i<=number;i++){
		getupnumber;
		if(upnumber>number){
			while(array[randomnumber]==0)
			{
				randomnumber=parseInt(Math.random()*fathercount);
			}
			array[randomnumber]=0;
			$("#under_"+randomnumber).attr("disabled", "disabled");
		}else{
			for(var i=1;i<=upnumber;i++){
				while(array[randomnumber]==0)
					{
						randomnumber=parseInt(Math.random()*fathercount);
					}
					array[randomnumber]=0;
					$("#under_"+randomnumber).attr("disabled", "disabled");
			}
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
var back=function(){

}
var restart=function(){

}*/
}


