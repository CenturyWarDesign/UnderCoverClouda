sumeru.router.add(

	{
		pattern: '/publish',
		action: 'App.publish'
	}

);

App.publish = sumeru.controller.create(function(env, session) {
	env.onrender = function(doRender) {
		doRender("publish", ['none', 'z']);
	};


	env.onready = function() {
		touch.on(document.getElementById('back'), 'tap', returnlast);
		touch.on(document.getElementById('commit'), 'tap', sendPunish);
		var content=session.get("content");
		$("#content").html(content);		// $("#static").modal();
		// $('#change').modal(options)
		// $('#myModal').modal('toggle');
	};

	var sendPunish= function(){
		var postData = {
			"content": $("#content").val(),
			"type": 1
		}
		var url = Library.base.getUrl("PublishNew",postData);
		console.log(url);
		sumeru.external.get(url, sendSuccess);
	}

	var returnlast = function() {
		history.go(-1);

	}
	var sendSuccess=function(data){
		console.log(data);
		// returnlast();
		alert("发布成功");
	}

});