sumeru.router.add(

	{
		pattern: '/guess',
		action: 'App.guess'
	}

);

//sumeru.router.setDefault('App.itworks');


App.guess = sumeru.controller.create(function(env, session){

	env.onrender = function(doRender){
		doRender("guess", ['push','left']);
		// initConfig();
	};
	var wordstring=[];
	var fathercount=4;
	var soncount=1;
	var peoplecount=fathercount-soncount;
	var sonword="";

	env.onready=function(){
		initGuess();
		document.getElementById('restart').addEventListener('click', restart);
		document.getElementById('setting_game').addEventListener('click', underwordsetting);
		$("#alter").hide();
	}	

	var restart=function(){
		env.redirect('/fanpai',{'fathercount':fathercount,'soncount':soncount},true);
		initGuess();
	}

	var underwordsetting=function(){
		env.redirect('/undercover_setting',{'fathercount':fathercount,'soncount':soncount},true);
	}

	var initGuess=function(){
		initConfig();
		$("#guesscontent").html("");
		for (var i = 1; i <=wordstring.length; i++) {
			if((i-1)%4==0)
			{
				$("#guesscontent").append('<br/>');
			}
			var temhtml="<button id='under_"+i+"'  type='button'class='btn btn-default' style='width:23%;padding:1%;margin:1%;' onclick=''>"+i+"</button>"
			$("#guesscontent").append(temhtml);
			document.getElementById('under_'+i).addEventListener('click', tapindex);
		};
	}

	var initConfig=function(){
		// console.log("undercoverword"+session.get("content");
		wordstring=session.get("content").split(",");
		fathercount=wordstring.length;
		soncount=parseInt(session.get("soncount"));
		sonword=session.get("sonword");
		peoplecount=fathercount-soncount;
		console.log(peoplecount+":peoplecount");
	}

	var tapindex=function(){
		// initConfig();
		var index=this.id.split('_')[1];
		$("#under_"+index).attr("disabled", "disabled");
		if(wordstring[index-1]!=sonword)
		{
			peoplecount--;
			$("#under_"+index).html("冤死"+wordstring[index-1]);
		}else{
			soncount--;
			$("#under_"+index).html("卧底"+wordstring[index-1]);
		}


		console.log(peoplecount+":peoplecount");
		console.log(soncount+":soncount");

		if(peoplecount<=soncount){
			$("#alter").html("卧底胜利");
			$("#alter").show();
			disableallbutton();
		}
		else if(soncount<=0){
			$("#alter").html("卧底失败");
			$("#alter").show();
			disableallbutton();
		}
	}
	var disableallbutton=function(){
		// console.log(+":disable");
		for (var i=0;i<fathercount;i++)
		{
			var index=i+1;
			$("#under_"+index).attr("disabled", "disabled");
			$("#under_"+index).html(index+"号身份:"+wordstring[index-1]);
			console.log(index+":disable");
		}	
	}
});