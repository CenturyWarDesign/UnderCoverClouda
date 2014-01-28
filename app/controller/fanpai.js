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

});