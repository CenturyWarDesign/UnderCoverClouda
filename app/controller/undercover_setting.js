sumeru.router.add(

	{
		pattern: '/undercover_setting',
		action: 'App.undercover_setting'
	}

);
// sumeru.router.setDefault('App.undercover_setting');
App.undercover_setting = sumeru.controller.create(function(env, session){
	env.onrender = function(doRender){
		doRender("setting", ['none','z']);
	};
	var fathercount=4;
	var soncount=1;

	env.onready=function(){
		if(parseInt(session.get("fathercount"))>0)
			fathercount=session.get("fathercount");
		if(parseInt(session.get("soncount"))>0)
			soncount=session.get("soncount");
		
		document.getElementById('start_game').addEventListener('click', underword);
		document.getElementById('rules_game').addEventListener('click', rulesgame);
		document.getElementById('addfather').addEventListener('click', addfather);
		document.getElementById('costfather').addEventListener('click', costfather);
		document.getElementById('addson').addEventListener('click', addson);
		document.getElementById('costson').addEventListener('click', costson);
		document.getElementById('homepage').addEventListener('click', homepage);

		$("#father_count").val(fathercount+"");
		$("#son_count").val(soncount+"");
		$("#alter").hide();

		$("#title_text").html("谁是卧底");
	}


	var homepage=function(){
		env.redirect('/homepage');
	}
	var rulesgame=function(){
		env.redirect('/rules');
	}


     var addfather=function(){
		$("#alter").hide();
		var fathercount=parseInt($("#father_count").html());
			if(fathercount>=12)
		{
			$("#alter").html("参与人数过多（4-12）");
			$("#alter").show();
			return;
		}
		fathercount=fathercount+1;
		// alert($("#son_count").val());
		$("#father_count").html(fathercount);
	}
	var costfather=function (){
		$("#alter").hide();
		var fathercount=parseInt($("#father_count").html());
		$("#alter").hide();
			if(fathercount<=4)
		{
			$("#alter").html("参与人数过少（4-12）");
			$("#alter").show();
			return;
		}
		fathercount=fathercount-1;
		// alert($("#son_count").val());
		$("#father_count").html(fathercount);
	}

	var addson=function (){
		$("#alter").hide();

		var soncount=parseInt($("#son_count").html());
		var fathercount=parseInt($("#father_count").html());
		if(soncount>=parseInt(fathercount/3)){
			$("#alter").html("卧底人数多余总人数的三分之一！");
			$("#alter").show();
			return;
		}
//增加词汇刷新功能
		if(soncount>=3)
		{
			$("#alter").html("卧底人数过多（1-3）");
			$("#alter").show();
			return;
		}
		soncount=soncount+1;
		// alert($("#son_count").val());
		$("#son_count").html(soncount);
	}
	var costson=function (){
		$("#alter").hide();
		var soncount=parseInt($("#son_count").html());
		$("#alter").hide();
			if(soncount<=1)
		{
			$("#alter").html("卧底人数过少（1-3）");
			$("#alter").show();
			return;
		}
		soncount=soncount-1;
		// alert($("#son_count").val());
		$("#son_count").html(soncount);
	}

	var underword=function(){
		// env.hide();
		var fathercount=parseInt($("#father_count").html());
		var soncount=parseInt($("#son_count").html());
		env.redirect('/fanpai',{'fathercount':fathercount,'soncount':soncount,'type':'undercover'},true);
	}



});

