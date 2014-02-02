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
	var sonword="";

	env.onready=function(){
		initGuess();
		document.getElementById('restart').addEventListener('click', restart);
		document.getElementById('setting_game').addEventListener('click', underwordsetting);
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
			var temhtml="<button id='under_"+i+"'  type='button'class='btn btn-default' style='width:20%;padding:5px;margin:5px;' onclick=''>"+i+"</button>"
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
	}

	var tapindex=function(){
		initConfig();
		var index=this.id.split('_')[1];
		$("#under_"+index).attr("disabled", "disabled");
		if(wordstring[index-1]!=sonword)
		{
			$("#under_"+index).html("冤死"+wordstring[index-1]);
		}else{
			$("#under_"+index).html("卧底"+wordstring[index-1]);
		}
	}
});