sumeru.router.add(

	{
		pattern: '/undercover_setting',
		action: 'App.undercover_setting'
	}

);
// sumeru.router.setDefault('App.undercover_setting');
App.undercover_setting = sumeru.controller.create(function(env, session){
	env.onrender = function(doRender){
		doRender("undercover_setting", ['push','left']);
	};

	env.onready=function(){
		$("#alter").hide();
		document.getElementById('start_game').addEventListener('click', underword);
		document.getElementById('addfather').addEventListener('click', addfather);
		document.getElementById('costfather').addEventListener('click', costfather);
		document.getElementById('addson').addEventListener('click', addson);
		document.getElementById('costson').addEventListener('click', costson);
	}

       var addfather=function(){
		$("#alter").hide();
		var fathercount=parseInt($("#father_count").val());
		$("#alter").hide();
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
		var fathercount=parseInt($("#father_count").val());
		var soncount=parseInt($("#son_count").val());
		env.redirect('/fanpai',{'fathercount':fathercount,'soncount':soncount});
	}

});

