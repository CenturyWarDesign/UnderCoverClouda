sumeru.router.add(

	{
		pattern: '/killer',
		action: 'App.killer'
	}

);
//sumeru.router.setDefault('App.itworks');

App.killer = sumeru.controller.create(function(env, session){
	env.onrender = function(doRender){
		doRender("fanpai", ['none','z']);
	};

	var wordstrings=[];
	var fathercount=4;
	var soncount=1;
	var nowindex=1;
	var shownumb=true;
	var sonword="";
	var guess=false;

	env.onready=function(){
		fathercount=session.get("fathercount");
		soncount=session.get("soncount");
		// fathercount=10; 
		// soncount=2;
		wordstrings=getWord(fathercount,soncount);
		console.log("restart");
		document.getElementById('nextbtn').addEventListener('click', showword);
		showword();
	}

	var restart=function(){
		wordstrings=getWord(fathercount,soncount);
		console.log("restart");
		nowindex=1;
		shownumb=false;
		$("#wordtext").html("1");
		$("#wordtext").hide();
		// showword();
	}
	
	var showword=function(){
		if(guess==true)
		{
			guess=false;
			restart();
		}

		if(nowindex>fathercount)
		{
			env.redirect('/guess',{'content':wordstrings,'fathercount':fathercount,'soncount':soncount,'sonword':sonword},true);
			$("#wordtext").html("1");
			guess=true;
			return;
		}
		else{
			$("#wordtext").show();
		}
		if(!shownumb)
		{
			$("#wordtext").html(wordstrings[nowindex-1]);
			$("#nextbtn").html("记住了，传给下一位");
			console.log("showit"+wordstrings[nowindex-1]);
			nowindex++;
		}
		else{
			$("#wordtext").html(nowindex);
			$("#nextbtn").html("点击查看词条");
			console.log("showit"+nowindex);
		}
		// document.getElementById('nextbtn').addEventListener('click', hideword);
		shownumb=!shownumb;
	}

	var getWord=function(peoplecount){
		//人数，
		var selectword= words[parseInt(Math.random()*words.length)];
		var tem=selectword.split('_');
		var fatherindex = parseInt(Math.random());
		var sonindex=Math.abs(fatherindex-1);
		sonword=tem[sonindex];
		var retrunarr=new Array(fathercount);
		for (var i = fathercount-1; i >= 0; i--) {
			retrunarr[i]=tem[fatherindex];	
		};

		for (var i = soncount-1; i >= 0; i--) {
			var randomindex=parseInt(Math.random()*fathercount);
			while(retrunarr[randomindex]==tem[sonindex])
			{
				randomindex=parseInt(Math.random()*fathercount);
			}
			retrunarr[randomindex]=tem[sonindex];
		};

		for (var i = fathercount-1; i >= 0; i--) {
			console.log(retrunarr[i]+i);
		};
		// session.set("undercoverword",retrunarr.toString());
		// session.set("sonword",tem[sonindex]);
		// session.set("soncount",soncount);
		// session.commit();
		return retrunarr;
	}

});