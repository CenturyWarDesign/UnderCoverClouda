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
	var count=5;

	env.onready = function() {
		touch.on(document.getElementById('back'), 'tap', returnlast);
		touch.on(document.getElementById('commit'), 'tap', sendPunish);
		// $('#change').modal(options)
		// $('#myModal').modal('toggle');
		// console.log(getPublishWrod(1));
		for (var i = 1; i <= count; i++) {
			$("#content_words").append(getPublishWrod(i));
		}
	};

	var sendPunish = function() {
		var sendwords = {};
		console.log(sendwords);
		for (var i = 1; i <= count; i++) {
			var words1 = $("#words1_" + i).val();
			var words2 = $("#words2_" + i).val();
			var type = 1;
			if (words1 != "" && words2 != "") {
				var temsend = {
					"words1": words1,
					"words2": words2,
					"type": type
				};
				sendwords[i]=temsend;
			}

			// console.log(words1+"_"+words2);
		}
		console.log(sendwords);


		var postData = {
			"data": sendwords,
		}
		var url = Library.base.getUrl("WordsNew", postData);
		console.log(url);
		sumeru.external.get(url, sendSuccess);
		// returnlast();
	}

	var returnlast = function() {
		history.go(-1);

	}
	var sendSuccess = function(data) {
		console.log(data);
		alert("发布成功");
		// returnlast();
	}


	var getPublishWrod = function(id) {
		return '<div class="form-group form-horizontal" style="padding:10px"> <label for="inputEmail3" class="col-sm-1 control-label">词汇' + id + ':</label> <div class="col-sm-4"> <input type="text" class="form-control col-sm-10" placeholder="Text input" id=words1_' + id + '> </div> <div class="col-sm-4"> <input type="text" class="form-control col-sm-10" placeholder="Text input" id=words2_' + id + '> </div> </div> <div class="clearfix"></div>';
	}

});