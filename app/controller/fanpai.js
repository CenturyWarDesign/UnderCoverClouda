sumeru.router.add(

	{
		pattern: '/fanpai',
		action: 'App.fanpai'
	}

);

//sumeru.router.setDefault('App.itworks');

App.fanpai = sumeru.controller.create(function(env, session){
	env.onrender = function(doRender){
		doRender("fanpai", ['push','left']);
	};


     

    // onload is respond for handle all data subscription
    // env.onload = function(){            
    //     return [getMsgs];            
    // };


	var wordstrings=[];
	var fathercount=4;
	var soncount=1;
	var nowindex=1;
	var shownumb=true;
	var sonword="";

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
		shownumb=true;
		$("#wordtext").html("1");
		$("#wordtext").show();
		// showword();
	}
	
	var showword=function(){
		if(nowindex>fathercount)
		{
			$("#wordtext").hide();
			 env.redirect('/guess',{'content':wordstrings,'fathercount':fathercount,'soncount':soncount,'sonword':sonword});
			 restart();
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




	var getWord=function(fathercount,soncount){
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
		'赵敏_黄蓉',
		'海豚_海狮'];
		var selectword= words[parseInt(Math.random()*words.length)];
		var tem=selectword.split('_');
		var fatherindex = parseInt(Math.random());
		var sonindex=Math.abs(fatherindex-1);
		sonword=tem[sonindex];
		var retrunarr=new Array(10);
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

		return retrunarr;
	}

});