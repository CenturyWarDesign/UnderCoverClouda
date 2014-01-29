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
	env.onready=function(){
		$("#wanbin").html(getWord(10,3).toString());
		// var wordsarr=getWord(10,1);
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
		var retrunarr=new Array(10);
		var setarr=new Array(10);
		for (var i = fathercount-1; i >= 0; i--) {
			retrunarr[i]=tem[fatherindex];	
			setarr[i]=i;	
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