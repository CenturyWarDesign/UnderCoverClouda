sumeru.router.add(

	{
		pattern: '/fanpai',
		action: 'App.fanpai'
	}

);
//sumeru.router.setDefault('App.itworks');

App.fanpai = sumeru.controller.create(function(env, session){
	env.onrender = function(doRender){
		doRender("fanpai", ['none','z']);
	};

	var wordstrings=[];
	var fathercount=4;
	var soncount=1;
	var nowindex=1;
	var shownumb=true;
	var sonword="";
	var guess=false;
	var game_type="undercover";
	var wordtype="所有";


	var words=[
		 '人物_保安_保镖',
		 '人物_剩女_御姐',
		 '人物_警察_捕快',
		 '人物_总统_首相',
		 '人物_包青天_狄仁杰',
		 '人物_班主任_辅导员',
		 '人物_皇帝_太子',
		 '人物_元芳_展昭',
		 '人物_军人_警察',
		 '人物_萝莉_御姐',
		 '人物_主持人_广播员',
		 '人物_老佛爷_老天爷',
		 '人物_魔术师_魔法师',
		 '人物_丑小鸭_灰姑娘',
		 '人物_蜘蛛侠_蝙蝠侠',
		 '人物_程序员_设计师',
		 '人物_女神_剩女',
		 '人物_王语嫣_小龙女',
		 '人物_伊丽莎白_蒙娜丽莎',
		 '人物_作家_编剧',
		 '人物_梁山伯与祝英台_罗密欧与朱丽叶',
		 '人物_郭德纲_周立波',
		 '人物_李宗瑞_李天一',
		 '人物_东方不败_天山童姥',
		 '人物_成吉思汗_努尔哈赤',
		 '人物_福尔摩斯_工藤新一',
		 '人物_宫崎骏_宫崎骏',
		 '人物_少女_女王',
		 '人物_艾薇儿_ladygaga',
		 '人物_小黄人_蓝精灵',
		 '人物_男朋友_前男友',
		 '人物_格格_公主',
		 '人物_玛丽莲梦露_奥黛丽赫本',
		 '人物_唐伯虎_韦小宝',
		 '人物_飞行员_宇航员',
		 '人物_容嬷嬷_小燕子',
		 '人物_教授_讲师',
		 '人物_奶奶_外婆',
		 '人物_公务员_小白领',
		 '人物_律师_医师',
		 '人物_卧底_内奸',
		 '人物_状元_冠军',
		 '人物_葫芦娃_小矮人',
		 '日常_气泡_水泡',
		 '日常_台灯_电灯',
		 '日常_水盆_水桶',
		 '日常_唇膏_口红',
		 '日常_麦克风_扩音器',
		 '日常_婚纱_喜服',
		 '日常_纸巾_手帕',
		 '日常_裸婚_闪婚',
		 '日常_公交_地铁',
		 '日常_结婚_订婚',
		 '日常_手机_座机',
		 '日常_枕头_抱枕',
		 '日常_鸭舌帽_遮阳帽',
		 '日常_生活费_零花钱',
		 '日常_洗衣粉_皂角粉',
		 '日常_肥皂_香皂',
		 '日常_铁观音_碧螺春',
		 '日常_沐浴露_沐浴盐',
		 '日常_洗发露_护发素',
		 '日常_自行车_电动车',
		 '日常_近视眼镜_隐形眼镜',
		 '日常_眉毛_胡须',
		 '日常_围巾_围脖',
		 '日常_棉被_毛毯',
		 '日常_打针_输液',
		 '日常_铅笔袋_铅笔盒',
		 '日常_电动车_摩托车',
		 '日常_银行卡_信用卡',
		 '日常_跑车_豪车',
		 '日常_劳斯莱斯_兰博基尼',
		 '日常_宾利_宝马',
		 '日常_非诚勿扰_我们约会吧',
		 '日常_床单_地图',
		 '日常_被子_国旗',
		 '日常_电灯_壁灯',
		 '日常_葵花宝典_辟邪剑谱',
		 '日常_香奈儿_爱马仕',
		 '日常_高跟鞋_内增高',
		 '日常_杭州_苏州',
		 '日常_香港_台湾',
		 '日常_首尔_东京',
		 '日常_广东_广州',
		 '日常_海报_报纸',
		 '日常_照片_胶卷',
		 '日常_会考_高考',
		 '日常_高铁_城际',
		 '日常_飞机_飞碟',
		 '吃货_牛奶_豆浆',
		 '吃货_白菜_生菜',
		 '吃货_辣椒_芥末',
		 '吃货_橙子_橘子',
		 '吃货_葡萄_提子',
		 '吃货_烤肉_涮肉',
		 '吃货_油条_麻花',
		 '吃货_面包_蛋糕',
		 '吃货_牛肉干_猪肉脯',
		 '吃货_泡泡糖_棒棒糖',
		 '吃货_土豆粉_酸辣粉',
		 '吃货_口香糖_木糖醇',
		 '吃货_酸菜鱼_水煮鱼',
		 '吃货_小笼包_灌汤包',
		 '吃货_大白兔_金丝猴',
		 '吃货_果粒橙_鲜橙多',
		 '吃货_鱼香肉丝_四喜丸子',
		 '吃货_麻婆豆腐_皮蛋豆腐',
		 '吃货_红烧牛肉面_香辣牛肉面',
		 '吃货_鸭脖_鸡爪',
		 '吃货_果汁_汽水',
		 '吃货_火锅_涮锅',
		 '吃货_烧烤_烤串',
		 '吃货_红豆_绿豆',
		 '吃货_小葱_蒜苗',
		 '吃货_火锅_烧烤',
		 '吃货_麻辣烫_串串香',
		 '吃货_汉堡包_肉夹馍',
		 '吃货_冰激淋_冰淇淋',
		 '吃货_馒头_花卷',
		 '吃货_大饼_煎饼',
		 '吃货_烤冷面_烤面筋',
		 '吃货_三角饼_豆沙饼',
		 '吃货_酸奶_牛奶',
		 '吃货_皮蛋豆腐_日本豆腐',
		 '吃货_葡萄酒_鸡尾酒',
		 '吃货_西瓜_黄瓜',
		 '吃货_德芙_金帝',
		 '吃货_费列罗_金丝猴',
		 '吃货_铁观音_碧螺春',
		 '吃货_皮蛋_卤蛋',
		 '重口味_太监_人妖',
		 '重口味_小姨子_小舅子',
		 '重口味_杰士邦_杜蕾斯',
		 '重口味_胖子_肥肉',
		 '重口味_diao丝_穷鬼',
		 '重口味_凤姐_芙蓉姐姐',
		 '重口味_AV_女优',
		 '重口味_紫葡萄_黑木耳',
		 '重口味_TMD_NND',
		 '重口味_僵尸_幽灵',
		 '重口味_太平间_墓地',
		 '重口味_黑丝_蕾丝',
		 '重口味_丝袜_裤袜',
		 '重口味_长腿_美腿',
		 '重口味_撸管儿_滚床单',
		 '重口味_避孕套_验孕棒',
		 '重口味_美女_女神',
		 '重口味_富二代_高富帅',
		 '重口味_离婚_失恋',
		 '重口味_一夜情_一见钟情',
		 '重口味_好兄弟_同性恋',
		 '重口味_好基友_异性恋',
		 '重口味_猥琐_卑鄙',
		 '重口味_纸尿裤_尿不湿',
		 '重口味_捡肥皂_被爆菊',
		 '重口味_苍井空_苍井优',
		 '重口味_高富帅_矮穷挫',
		 '重口味_初吻_初夜',
		 '重口味_初恋_初吻',
		 '重口味_卧底_特务',
		 '重口味_黑木耳_矮穷挫',
		 '重口味_绑票_人质',
		 '重口味_知心姐姐_粉红女郎',
		 '重口味_吃软饭_小白脸',
		 '重口味_三角恋_婚外情',
		 '小清新_优雅_美丽',
		 '小清新_萌_呆',
		 '小清新_海豚_河豚',
		 '小清新_海狮_海豹',
		 '小清新_lol_dota',
		 '小清新_加多宝_王老吉',
		 '小清新_机器猫_加菲猫',
		 '小清新_小红帽_蓝精灵',
		 '小清新_雪弗兰_大黄蜂',
		 '小清新_可口_可乐',
		 '小清新_麦当劳_肯德基',
		 '小清新_戴尔_惠普',
		 '小清新_蒙牛_伊利',
		 '小清新_腾讯_新浪',
		 '小清新_扑克牌_塔罗牌',
		 '小清新_小米_iphone',
		 '小清新_麦当劳_必胜客',
		 '小清新_牛奶_奶牛',
		 '小清新_旺仔_伊利',
		 '小清新_哇哈哈_爽歪歪',
		 '小清新_御姐控_萝莉控',
		 '小清新_正太控_萝莉控',
		 '小清新_猛男控_御姐控',
		 '小清新_依恋_眷恋',
		 '小清新_依依不舍_流连忘返',
		 '小清新_八路军_新四军',
		 '小清新_奶糖_奶茶',
		 '小清新_起点小说_百度文库',
		 '小清新_郭敬明_小时代',
		 '小清新_茶艺_棋艺',
		 '小清新_爆竹_烟花',
		 '小清新_许愿灯_许愿树',
		 '小清新_作文_论文',
		 '小清新_壁纸_贴画',
		 '小清新_魔术师_魔法师',
		 '小清新_双胞胎_龙凤胎',
		 '小清新_丑小鸭_灰姑娘',
		 '小清新_情人节_七夕节',
		 '小清新_面膜_面具',
		 '小清新_撒娇_卖萌',
		 '小清新_嘟嘴_卖萌',
		 '小清新_花痴_脑残',
		 '高难度_勇往直前_全力以赴',
		 '高难度_语无伦次_词不达意',
		 '高难度_鼠目寸光_井底之蛙',
		 '高难度_摇摇椅_转转椅',
		 '高难度_地铁_轻轨',
		 '高难度_口_嘴',
		 '高难度_粥_汤',
		 '高难度_呆_萌',
		 '高难度_奶妈_亲娘',
		 '高难度_鸡_鸭',
		 '高难度_快速_迅速',
		 '高难度_红彤彤_红通通',
		 '高难度_软绵绵_蓬松松',
		 '高难度_仙人掌_仙人球',
		 '高难度_复式楼_别墅',
		 '高难度_谁是卧底_抓鬼游戏',
		 '高难度_十面埋伏_四面楚歌',
		 '高难度_忐忑_江南style',
		 '高难度_降龙十八掌_九阴白骨爪',
		 '高难度_一毛不拔_不毛之地',
		 '高难度_小品_话剧',
		 '高难度_吉他_琵琶',
		 '高难度_童话_神话',
		 '高难度_作家_编剧',
		 '高难度_奖牌_金牌',
		 '高难度_蜘蛛侠_蝙蝠侠',
		 '高难度_薰衣草_满天星',
		 '高难度_甄嬛传_红楼梦',
		 '高难度_麻雀_百灵',
		 '高难度_打针_针灸',
		 '高难度_烧烤_夜宵',
		 '高难度_鸭脖子_鸡翅膀',
		 '高难度_劳力士_欧米伽',
		 '高难度_反弹琵琶_乱弹棉花'];

	env.onready=function(){
		if(parseInt(session.get("fathercount"))>0)
			fathercount=session.get("fathercount");
		if(parseInt(session.get("fathercount"))>0)
			soncount=session.get("soncount");

		wordtype=session.get("wordtype");
		console.log(wordtype);

		//killer 代表杀人游戏  undercover代表谁是卧底
		game_type=session.get("type");

		// fathercount=10; 
		// soncount=2;
		if(game_type=='killer')
		{
			wordstrings=getKiller(fathercount);
		}
		else{
			// wordtype="高难度";
			wordstrings=getWord(fathercount,soncount,wordtype);
			console.log("wordstring:"+wordstrings);
		}
		
		console.log("restart");
		document.getElementById('nextbtn').addEventListener('click', showword);
		document.getElementById('refresh').addEventListener('click', refresh);
		$("#refresh").attr("disabled", "disabled");
		showword();
	}
	var refresh=function(){
		wordstrings=getWord(fathercount,soncount,wordtype);
		nowindex=nowindex-1;
		shownumb=!shownumb;
		showword();
	}

	var restart=function(){
		wordstrings=getWord(fathercount,soncount,wordtype);
		console.log("restart");
		nowindex=1;
		shownumb=false;
		$("#wordtext").html("1");
		$("#wordtext").hide();
		// showword();
	}
	
	var showword=function(){
		// console.log(game_type);
		if(game_type!='killer')
		{
			$("#refresh").removeAttr("disabled");
		}
		
		if(guess==true)
		{
			guess=false;
			restart();
		}

		if(nowindex>fathercount)
		{
			if(game_type=='killer')
			{
				env.redirect('/killer_game',{'content':wordstrings},true);
			}
			else{
				var isshowlastnumber=session.get("isshowlastnumber");
				env.redirect('/guess',{'content':wordstrings,
										'fathercount':fathercount,
										'soncount':soncount,
										'sonword':sonword,
										'isshowlastnumber':isshowlastnumber,
										'wordtype':wordtype
									},true);
			}
			return;
		}
		else{
			$("#wordtext").show();
		}

		if(nowindex!=1){
			$("#refresh").attr("disabled", "disabled");
		}
		if(!shownumb)
		{
			$("#wordtext").html(wordstrings[nowindex-1]);
			$("#nextbtn").html("记住了，传给下一位");
			console.log("showit"+wordstrings[nowindex-1]);
			nowindex++;
		}
		else{
			$("#wordtext").html(nowindex);
			$("#nextbtn").html("点击查看词条");
			console.log("showit"+nowindex);
		}
		// document.getElementById('nextbtn').addEventListener('click', hideword);
		shownumb=!shownumb;
		
	}

	var getKiller=function(fathercount){
		var policecount=parseInt( fathercount/4);
		var soncount=policecount;
		var peoplearray=[];
		for(var i=0;i<fathercount;i++){
			peoplearray[i]='平民';
		}

		peoplearray[parseInt(Math.random()*peoplearray.length)]='法官';

		while(policecount>0){
			var index=parseInt(Math.random()*peoplearray.length);
			if(peoplearray[index]=='平民')
			{
				peoplearray[index]='警察';
				policecount--;
			}
		}


		while(soncount>0){
			var index=parseInt(Math.random()*peoplearray.length);
			if(peoplearray[index]=='平民')
			{
				peoplearray[index]='杀手';
				soncount--;
			}
		}
		console.log(peoplearray);
		return peoplearray;
	}



	var getWord=function(fathercount,soncount,type){
		 if(type!='all'){
		 	var temwordarr=[];
		 	for(var i=0;i<words.length;i++){
		 		if(words[i].split('_')[0]==type){
		 			temwordarr.push(words[i].split('_')[1]+"_"+words[i].split('_')[2]);
		 		}
		 	}
		 	if(temwordarr.length>0)
		 	{
		 		words=temwordarr;
			}
		 }

		var selectword = words[parseInt(Math.random()*words.length)];
		var temget=selectword.split("_");
		var tem=[temget[0],temget[1]];
		var fatherindex = parseInt(Math.random()*2);
		
		var sonindex=Math.abs(fatherindex-1);
		sonword=tem[sonindex];
		var retrunarr=new Array(fathercount);
		for (var i = fathercount-1; i >= 0; i--) {
			retrunarr[i]=tem[fatherindex];	
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
		// session.set("undercoverword",retrunarr.toString());
		// session.set("sonword",tem[sonindex]);
		// session.set("soncount",soncount);
		// session.commit();
		return retrunarr;
	}

});