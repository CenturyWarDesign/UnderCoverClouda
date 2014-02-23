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
		touch.on(document.getElementById('change'), 'tap', getPublish );
		getPublish();

	};
	var getPublish = function() {
		var url = Library.base.getUrl("PublishAll");
		sumeru.external.get(url, publishCallBack);
		$("#loading").show();
	}
	var publishCallBack = function(data) {
		var stu = eval('(' + data + ')');
		var temdata = eval('(' + stu.data + ')');
		for (var i = 0; i < temdata.length; i++) {
			$("#punish_template").append(getUrlTem(temdata[i].id, temdata[i].content, temdata[i].like, temdata[i].dislike, temdata[i].type));
			document.getElementById('like_'+temdata[i].id).addEventListener('click', like(temdata[i].id));
			document.getElementById('dislike_'+temdata[i].id).addEventListener('click', dislike(temdata[i].id));
			document.getElementById('collect_'+temdata[i].id).addEventListener('click', collectlike(temdata[i].id));
			document.getElementById('change_'+temdata[i].id).addEventListener('click', changelike(temdata[i].id));
		};
	}
	var getUrlTem = function(id, content, likecount, dislikecount, type) {
		var contentype = "真心话";
		if (type == "2") {
			contentype = "大冒险";
		}
		var tem = "<div class='panel panel-default'><div class='panel-body'><p class='pull-right' style='color:#CCCCCC'>" + contentype + "</><h5>" + content + "<h5><div class='btn-group btn-group-xs pull-right'> <button type='button' class='btn btn-default' id=like_" + id + " >喜欢(" + likecount + ")</button> <button type='button'  class='btn btn-default' id='dislike_" + id + "'>不喜欢(" + dislikecount + ")</button> <button type='button' class='btn btn-default' id='collect_" + id + "' >收藏</button> <button type='button' class='btn btn-default' id='change_" + id + "' >修改提交</button> </div> </div> </div>";
		return tem;
	}

	var like=function(id){
		console.log("like"+id);
	}
	var dislike=function(id){
		console.log("dislike"+id);
	}
	var collectlike=function(id){
		console.log("collet"+id);
	}
	var changelike=function(id){
		console.log("change"+id);
	}



});