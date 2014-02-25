sumeru.router.add(

	{
		pattern: '/publishwords',
		action: 'App.publishwords'
	}

);
//提交卧底词汇功能

App.publishwords = sumeru.controller.create(function(env, session) {
	env.onrender = function(doRender) {
		doRender("publishwords", ['none', 'z']);
	};


	env.onready = function() {
		touch.on(document.getElementById('back'), 'tap', returnlast);
		touch.on(document.getElementById('commit'), 'tap', sendPunish);
		// $('#change').modal(options)
		// $('#myModal').modal('toggle');
		// console.log(getPublishWrod(1));
		for(var i=1;i<=10;i++){
			$("#content_words").append(getPublishWrod(i));
		}
	};

	var sendPunish= function(){
		alert("提交成功");
		return;
		var postData = {
			"content": $("#content").val(),
			"type": 1
		}
		var url = Library.base.getUrl("PublishNew",postData);
		console.log(url);
		sumeru.external.get(url, sendSuccess);
		// returnlast();
	}

	var returnlast = function() {
		history.go(-1);

	}
	var sendSuccess=function(data){
		console.log(data);
		returnlast();
	}


	var getPublishWrod=function(id){
		return '<div class="form-group form-horizontal" style="padding:10px"> <label for="inputEmail3" class="col-sm-1 control-label">词汇'+id+':</label> <div class="col-sm-4"> <input type="text" class="form-control col-sm-10" placeholder="Text input"> </div> <div class="col-sm-4"> <input type="text" class="form-control col-sm-10" placeholder="Text input"> </div> </div> <div class="clearfix"></div>';
	}

});