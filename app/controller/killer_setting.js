sumeru.router.add(

	{
		pattern: '/killer_setting',
		action: 'App.killer_setting'
	}

);

App.killer_setting = sumeru.controller.create(function(env, session){
	env.onrender = function(doRender){
		doRender("killer_setting", ['none','z']);
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

		$("#father_count").val(fathercount+"");
		$("#son_count").val(soncount+"");
		$("#alter").hide();

	}

	var rulesgame=function(){
		env.redirect('/rules');
	}


     var addfather=function(){
		$("#alter").hide();
		var fathercount=parseInt($("#father_count").val());
			if(fathercount>=12)
		{
			$("#alter").html("参与人数过多（4-12）");
			$("#alter").show();
			return;
		}
		fathercount=fathercount+1;
		// alert($("#son_count").val());
		$("#father_count").val(fathercount);
	}
	var costfather=function (){
		$("#alter").hide();
		var fathercount=parseInt($("#father_count").val());
		$("#alter").hide();
			if(fathercount<=4)
		{
			$("#alter").html("参与人数过少（4-12）");
			$("#alter").show();
			return;
		}
		fathercount=fathercount-1;
		// alert($("#son_count").val());
		$("#father_count").val(fathercount);
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
		var fathercount=parseInt($("#father_count").val());
		var soncount=parseInt($("#son_count").val());
		env.redirect('/fanpai',{'fathercount':fathercount,'soncount':soncount},true);
	}



});

