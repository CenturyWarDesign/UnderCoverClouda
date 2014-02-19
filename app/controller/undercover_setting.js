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
		// document.getElementById('addfather').addEventListener('click', addfather);
		// document.getElementById('costfather').addEventListener('click', costfather);
		// document.getElementById('addson').addEventListener('click', addson);
		// document.getElementById('costson').addEventListener('click', costson);
		document.getElementById('homepage').addEventListener('click', homepage);

		$("#father_count").val(fathercount+"");
		$("#son_count").val(soncount+"");
		$("#alter").hide();
    $( "#slider-range-cy" ).slider({
      range: "min",
      value: 4,
      min: 4,
      max: 12,
      slide: function( event, ui ) {
      	var num = parseInt(ui.value);
        if(num<4||num>12){
			$("#alter").html("参与人数过多（4-12）");
			$("#alter").show();
			return;
        }
        else{
        	$( "#amount-cy" ).html( ui.value );

        }
      }
    });
    $( "#amount-cy" ).html( $( "#slider-range-cy" ).slider( "value" ) );

    $( "#slider-range-wd" ).slider({
      range: "min",
      value: 1,
      min: 1,
      max: 3,
      slide: function( event, ui ) {
      	var num = parseInt(ui.value);
        if(num<1||num>3){
			$("#alter").html("参与人数过多（1-3）");
			$("#alter").show();
			return;
        }
        else{
        	$( "#amount-wd" ).html( ui.value );

        }        
      }
    });
    $( "#amount-wd" ).html( $( "#slider-range-wd" ).slider( "value" ) );

	}


	var homepage=function(){
		env.redirect('/homepage');
	}
	var rulesgame=function(){
		env.redirect('/rules');
	}


     var addfather=function(){
		$("#alter").hide();
		var fathercount=parseInt($("#amount-cy").html());
			if(fathercount>=12)
		{
			$("#alter").html("参与人数过多（4-12）");
			$("#alter").show();
			return;
		}
		fathercount=fathercount+1;
		$("#slider-range-cy").slider("value",fathercount);
		// alert($("#son_count").val());
		$("#amount-cy").html(fathercount);
	}
	var costfather=function (){
		$("#alter").hide();

		var fathercount=parseInt($("#amount-cy").html());
		var soncount=parseInt($("#son_count").html());
		$("#alter").hide();
		if(fathercount<=(soncount*3)){
			$("#alter").html("卧底人数多余总人数的三分之一！");
			$("#alter").show();
			return;
		}
		if(fathercount<=4)
		{
			$("#alter").html("参与人数过少（4-12）");
			$("#alter").show();
			return;
		}
		fathercount=fathercount-1;
		$("#slider-range-cy").slider("value",fathercount);
		// alert($("#son_count").val());
		$("#amount-cy").html(fathercount);
	}

	var addson=function (){
		$("#alter").hide();

		// var soncount=parseInt($("#son_count").html());
		var soncount=parseInt($("#amount-wd").html());
		var fathercount=parseInt($("#father_count").html());
		if(soncount>=parseInt(fathercount/3)){
			$("#alter").html("卧底人数多余总人数的三分之一！");
			$("#alter").show();
			return;
		}
		if(soncount>=3)
		{
			$("#alter").html("卧底人数过多（1-3）");
			$("#alter").show();
			return;
		}
		soncount=soncount+1;
	    $("#slider-range-wd").slider("value",soncount);
		// alert($("#son_count").val());
		$("#amount-wd").html(soncount);
	}
	var costson=function (){
		$("#alter").hide();
		var soncount=parseInt($("#amount-wd").html());
		if(soncount<=1)
		{
			$("#alter").html("卧底人数过少（1-3）");
			$("#alter").show();
			return;
		}
		soncount=soncount-1;
	    $("#slider-range-wd").slider("value",soncount);
		// alert($("#son_count").val());
		$("#amount-wd").html(soncount);
	}

	var underword=function(){
		// env.hide();

		var isshowlastnumbercb=document.getElementById("isshowlastnumber");
		var isshowlastnumber = isshowlastnumbercb.checked ? 1:0;

		var fathercount=parseInt($("#amount-cy").html());
		var soncount=parseInt($("#amount-wd").html());
		var wordkind=$("#wordkind").val();
		env.redirect('/fanpai',{'fathercount':fathercount,'soncount':soncount,'type':'undercover','isshowlastnumber':isshowlastnumber,'wordtype':wordkind},true);
		
	}



});

