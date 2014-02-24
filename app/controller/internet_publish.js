sumeru.router.add(

	{
		pattern: '/internet_publish',
		action: 'App.internet_publish'
	}

);
// sumeru.router.setDefault('App.punish');


App.internet_publish = sumeru.controller.create(function(env, session) {
	env.onrender = function(doRender) {
		doRender("internet_publish", ['none', 'z']);
		Library.base.initHandlebars();
	};

	env.onready = function() {
		// $("#static").modal();
		touch.on(document.getElementById('change'), 'tap', getPublish);
		getPublish();
		// $('#change').modal(options)
		// $('#myModal').modal('toggle');
	};
	var getModel=function(){
		$('#myModal').modal({
			keyboard: false,
			show:true
		})
		// getModel
	}
	/*取得网络真心话大冒险*/
	var getPublish = function() {
		var url = Library.base.getUrl("PublishAll");
		sumeru.external.get(url, publishCallBack);
		$("#loading").show();
	}


	var publishCallBack = function(data) {
		console.log(data);
		var stu = eval('(' + data + ')');
		var temdata = eval('(' + stu.data + ')');
		for (var i = 0; i < temdata.length; i++) {
			var id = temdata[i].id;
			$("#punish_template").append(getUrlTem(temdata[i].id, temdata[i].content, temdata[i].like, temdata[i].dislike, temdata[i].type));
			document.getElementById('like_' + temdata[i].id).addEventListener('click', like);
			if (temdata[i].liked) {
				$("#like_" + id).attr("disabled", "disabled");
			}
			if (temdata[i].disliked) {
				$("#dislike_" + id).attr("disabled", "disabled");
			}
			if (temdata[i].collected) {
				$("#collect_" + id).attr("disabled", "disabled");
			}
			document.getElementById('dislike_' + temdata[i].id).addEventListener('click', dislike);
			document.getElementById('collect_' + temdata[i].id).addEventListener('click', collectlike);
			document.getElementById('change_' + temdata[i].id).addEventListener('click', changelike);
		};
		console.log(temdata);
	}
	var getUrlTem = function(id, content, likecount, dislikecount, type) {
		var contentype = "真心话";
		if (type == "2") {
			contentype = "大冒险";
		}
		var tem = "<div class='panel panel-default'><div class='panel-body'><p class='pull-right' style='color:#CCCCCC'>" + contentype + "</><h3 id=content_"+id+">" + content + "<h3><div class='btn-group btn-group-sm pull-right'> <button type='button' class='btn btn-default' id=like_" + id + " >喜欢(" + likecount + ")</button> <button type='button'  class='btn btn-default' id='dislike_" + id + "'>不喜欢(" + dislikecount + ")</button> <button type='button' class='btn btn-default' id='collect_" + id + "' >收藏</button> <button type='button' class='btn btn-default' id='change_" + id + "' >修改提交</button> </div> </div> </div>";
		return tem;
	}

	var like = function() {
		var id = this.id.split('_')[1];
		$("#like_" + id).html("喜欢");
		$("#like_" + id).attr("disabled", "disabled");
		likeToServer(id, 1);
		console.log("like" + id);
	}
	var dislike = function() {
		var id = this.id.split('_')[1];
		$("#dislike_" + id).html("不喜欢");
		$("#dislike_" + id).attr("disabled", "disabled");
		likeToServer(id, 2);
		console.log("dislike" + id);
	}
	var collectlike = function(id) {
		var id = this.id.split('_')[1];
		$("#collect_" + id).html("已收藏");
		$("#collect_" + id).attr("disabled", "disabled");
		likeToServer(id, 3);
		console.log("collet" + id);
	}
	var changelike = function(id) {
		var id = this.id.split('_')[1];
		var html=$("#content_" + id).html();
		env.redirect('/publish',{'content':html},true);
	}

	var likeToServer = function(id, type) {
		var postData = {
			"id": id,
			"type": type
		}
		var url = Library.base.getUrl("PublishCollect",postData);
		console.log(url);
		sumeru.external.get(url, likeCallBack);
	}
	var likeCallBack = function(data) {
		// alter("操作成功");
		console.log(data);
		returnlast();
	}

});