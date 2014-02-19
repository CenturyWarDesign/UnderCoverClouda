sumeru.router.add(

	{
		pattern: '/killer_setting',
		action: 'App.killer_setting'
	}

);

// sumeru.router.setDefault('App.killer_setting');
App.killer_setting = sumeru.controller.create(function(env, session){
	env.onrender = function(doRender){
		doRender("setting", ['none','z']);
	};

	var fathercount=6;
	var soncount=1;

	var maxpeople=16;
	var minpeople=6;

	env.onready=function(){
		if(parseInt(session.get("fathercount"))>0)
			fathercount=Math.max(6,session.get("fathercount")) ;

		if(parseInt(session.get("soncount"))>0)
			soncount=session.get("soncount");
		
		document.getElementById('start_game').addEventListener('click', underword);
		document.getElementById('rules_game').addEventListener('click', rulesgame);
		document.getElementById('addfather').addEventListener('click', addfather);
		document.getElementById('costfather').addEventListener('click', costfather);
		document.getElementById('addson').addEventListener('click', addson);
		document.getElementById('costson').addEventListener('click', costson);
		document.getElementById('homepage').addEventListener('click', homepage);

		$("#father_count").html(fathercount+"");
		$("#son_count").html(soncount+"");
		$("#alter").hide();


		$(".killerclass").hide();
		// $("#select_undercover_text").hide();

		$("#title_text").html("杀人游戏");

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
			if(fathercount>=maxpeople)
		{
			$("#alter").html("参与人数过多（"+minpeople+"-"+maxpeople+"）");
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
			if(fathercount<=minpeople)
		{
			$("#alter").html("参与人数过少（"+minpeople+"-"+maxpeople+"）");
			$("#alter").show();
			return;
		}
		fathercount=fathercount-1;
		// alert($("#son_count").val());
		$("#father_count").html(fathercount);
	}

	var addson=function (){
		$("#alter").hide();
		var soncount=parseInt($("#son_count").val());
		if(soncount>=3)
		{
			$("#alter").html("卧底人数过多（1-3）");
			$("#alter").show();
			return;
		}
		soncount=soncount+1;
		// alert($("#son_count").val());
		$("#son_count").val(soncount);
	}
	var costson=function (){
		$("#alter").hide();
		var soncount=parseInt($("#son_count").val());
		$("#alter").hide();
			if(soncount<=1)
		{
			$("#alter").html("卧底人数过少（1-3）");
			$("#alter").show();
			return;
		}
		soncount=soncount-1;
		// alert($("#son_count").val());
		$("#son_count").val(soncount);
	}

	var underword=function(){
		// env.hide();
		var fathercount=parseInt($("#father_count").html());
		var soncount=parseInt($("#son_count").html());
		env.redirect('/fanpai',{'fathercount':fathercount,'soncount':soncount,'type':'killer'},true);
	}



});

