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


     

    // onload is respond for handle all data subscription
    // env.onload = function(){            
    //     return [getMsgs];            
    // };


	var wordstrings=[];
	var fathercount=4;
	var soncount=1;
	var nowindex=1;
	var shownumb=true;
	var sonword="";
	var guess=false;

	env.onready=function(){
		fathercount=session.get("fathercount");
		soncount=session.get("soncount");
		// fathercount=10; 
		// soncount=2;
		wordstrings=getWord(fathercount,soncount);
		console.log("restart");
		document.getElementById('nextbtn').addEventListener('click', showword);
		showword();
	}

	var restart=function(){
		wordstrings=getWord(fathercount,soncount);
		console.log("restart");
		nowindex=1;
		shownumb=false;
		$("#wordtext").html("1");
		$("#wordtext").hide();
		// showword();
	}
	
	var showword=function(){
		if(guess==true)
		{
			guess=false;
			restart();
		}

		if(nowindex>fathercount)
		{
			env.redirect('/guess',{'content':wordstrings,'fathercount':fathercount,'soncount':soncount,'sonword':sonword},true);
			$("#wordtext").html("1");
			guess=true;
			return;
		}
		else{
			$("#wordtext").show();
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
		'海豚_海狮',
		'水盆_水桶',
		'唇膏_口红',
		'森马_以纯',
		'烤肉_涮肉',
		'气泡_水泡',
		'纸巾_手帕',
		'杭州_苏州',
		'香港_台湾',
		'首尔_东京',
		'橙子_橘子',
		'葡萄_提子',
		'太监_人妖',
		'蝴蝶_蜜蜂',
		'小品_话剧',
		'裸婚_闪婚',
		'新年_跨年',
		'吉他_琵琶',
		'公交_地铁',
		'剩女_御姐',
		'童话_神话',
		'作家_编剧',
		'警察_捕快',
		'结婚_订婚',
		'奖牌_金牌',
		'孟飞_乐嘉',
		'那英_韩红',
		'面包_蛋糕',
		'作文_论文',
		'油条_麻花',
		'壁纸_贴画',
		'枕头_抱枕',
		'手机_座机',
		'同学_同桌',
		'婚纱_喜服',
		'老佛爷_老天爷',
		'魔术师_魔法师',
		'鸭舌帽_遮阳帽',
		'双胞胎_龙凤胎',
		'情人节_光棍节',
		'丑小鸭_灰姑娘',
		'富二代_高富帅',
		'生活费_零花钱',
		'麦克风_扩音器',
		'郭德纲_周立波',
		'图书馆_图书店',
		'男朋友_前男友',
		'洗衣粉_皂角粉',
		'牛肉干_猪肉脯',
		'泡泡糖_棒棒糖',
		'小沈阳_宋小宝',
		'土豆粉_酸辣粉',
		'蜘蛛侠_蝙蝠侠',
		'口香糖_木糖醇',
		'酸菜鱼_水煮鱼',
		'小笼包_灌汤包',
		'薰衣草_满天星',
		'张韶涵_王心凌',
		'刘诗诗_刘亦菲',
		'甄嬛传_红楼梦',
		'甄子丹_李连杰',
		'包青天_狄仁杰',
		'大白兔_金丝猴',
		'果粒橙_鲜橙多',
		'沐浴露_沐浴盐',
		'洗发露_护发素',
		'自行车_电动车',
		'班主任_辅导员',
		'过山车_碰碰车',
		'铁观音_碧螺春',
		'十面埋伏_四面楚歌',
		'福尔摩斯_工藤新一',
		'贵妃醉酒_黛玉葬花',
		'流星花园_花样男子',
		'神雕侠侣_天龙八部',
		'天天向上_非诚勿扰',
		'勇往直前_全力以赴',
		'鱼香肉丝_四喜丸子',
		'麻婆豆腐_皮蛋豆腐',
		'语无伦次_词不达意',
		'鼠目寸光_井底之蛙',
		'近视眼镜_隐形眼镜',
		'美人心计_倾世皇妃',
		'夏家三千金_爱情睡醒了',
		'降龙十八掌_九阴白骨爪',
		'红烧牛肉面_香辣牛肉面',
		'江南style_最炫民族风',
		"保安_保镖",
		"剩女_御姐",
		"警察_捕快",
		"总统_首相",
		"包青天_狄仁杰",
		"班主任_辅导员",
		"皇帝_太子",
		"元芳_展昭",
		"军人_警察",
		"萝莉_御姐",
		"主持人_广播员",
		"老佛爷_老天爷",
		"魔术师_魔法师",
		"丑小鸭_灰姑娘",
		"蜘蛛侠_蝙蝠侠",
		"程序员_设计师",
		"女神_剩女",
		"王语嫣_小龙女",
		"伊丽莎白_蒙娜丽莎",
		"作家_编剧",
		"梁山伯与祝英台_罗密欧与朱丽叶",
		"郭德纲_周立波",
		"李宗瑞_李天一",
		"东方不败_天山童姥",
		"成吉思汗_努尔哈赤",
		"福尔摩斯_工藤新一",
		"宫崎骏_宫崎骏",
		"少女_女王",
		"艾薇儿_ladygaga",
		"小黄人_蓝精灵",
		"男朋友_前男友",
		"格格_公主",
		"玛丽莲梦露_奥黛丽赫本",
		"唐伯虎_韦小宝",
		"飞行员_宇航员",
		"容嬷嬷_小燕子",
		"教授_讲师",
		"奶奶_外婆",
		"公务员_小白领",
		"律师_医师",
		"卧底_内奸",
		"状元_冠军",
		"葫芦娃_小矮人",
		"勇往直前_全力以赴",
		"语无伦次_词不达意",
		"鼠目寸光_井底之蛙",
		"摇摇椅_转转椅",
		"地铁_轻轨",
		"口_嘴",
		"粥_汤",
		"呆_萌",
		"奶妈_亲娘",
		"鸡_鸭",
		"快速_迅速",
		"红彤彤_红通通",
		"软绵绵_蓬松松",
		"仙人掌_仙人球",
		"复式楼_别墅",
		"谁是卧底_抓鬼游戏",
		"十面埋伏_四面楚歌",
		"忐忑_江南style",
		"降龙十八掌_九阴白骨爪",
		"一毛不拔_不毛之地",
		"小品_话剧",
		"吉他_琵琶",
		"童话_神话",
		"作家_编剧",
		"奖牌_金牌",
		"蜘蛛侠_蝙蝠侠",
		"薰衣草_满天星",
		"甄嬛传_红楼梦",
		"麻雀_百灵",
		"打针_针灸",
		"烧烤_夜宵",
		"鸭脖子_鸡翅膀",
		"劳力士_欧米伽",
		"反弹琵琶_乱弹棉花",
		"优雅_美丽",
		"萌_呆",
		"海豚_河豚",
		"海狮_海豹",
		"lol_dota",
		"加多宝_王老吉",
		"机器猫_加菲猫",
		"小红帽_蓝精灵",
		"雪弗兰_大黄蜂",
		"可口_可乐",
		"麦当劳_肯德基",
		"戴尔_惠普",
		"蒙牛_伊利",
		"腾讯_新浪",
		"扑克牌_塔罗牌",
		"小米_iphone",
		"麦当劳_必胜客",
		"牛奶_奶牛",
		"旺仔_伊利",
		"哇哈哈_爽歪歪",
		"御姐控_萝莉控",
		"正太控_萝莉控",
		"猛男控_御姐控",
		"依恋_眷恋",
		"依依不舍_流连忘返",
		"八路军_新四军",
		"奶糖_奶茶",
		"起点小说_百度文库",
		"郭敬明_小时代",
		"茶艺_棋艺",
		"爆竹_烟花",
		"许愿灯_许愿树",
		"作文_论文",
		"壁纸_贴画",
		"魔术师_魔法师",
		"双胞胎_龙凤胎",
		"丑小鸭_灰姑娘",
		"情人节_七夕节",
		"面膜_面具",
		"撒娇_卖萌",
		"嘟嘴_卖萌",
		"花痴_脑残",
		"太监_人妖",
		"小姨子_小舅子",
		"杰士邦_杜蕾斯",
		"胖子_肥肉",
		"diao丝_穷鬼",
		"凤姐_芙蓉姐姐",
		"AV_女优",
		"紫葡萄_黑木耳",
		"TMD_NND",
		"僵尸_幽灵",
		"太平间_墓地",
		"黑丝_蕾丝",
		"丝袜_裤袜",
		"长腿_美腿",
		"撸管儿_滚床单",
		"避孕套_验孕棒",
		"美女_女神",
		"富二代_高富帅",
		"离婚_失恋",
		"一夜情_一见钟情",
		"好兄弟_同性恋",
		"好基友_异性恋",
		"猥琐_卑鄙",
		"纸尿裤_尿不湿",
		"捡肥皂_被爆菊",
		"苍井空_苍井优",
		"高富帅_矮穷挫",
		"初吻_初夜",
		"初恋_初吻",
		"卧底_特务",
		"黑木耳_矮穷挫",
		"绑票_人质",
		"知心姐姐_粉红女郎",
		"吃软饭_小白脸",
		"三角恋_婚外情",
		"牛奶_豆浆",
		"白菜_生菜",
		"辣椒_芥末",
		"橙子_橘子",
		"葡萄_提子",
		"烤肉_涮肉",
		"油条_麻花",
		"面包_蛋糕",
		"牛肉干_猪肉脯",
		"泡泡糖_棒棒糖",
		"土豆粉_酸辣粉",
		"口香糖_木糖醇",
		"酸菜鱼_水煮鱼",
		"小笼包_灌汤包",
		"大白兔_金丝猴",
		"果粒橙_鲜橙多",
		"鱼香肉丝_四喜丸子",
		"麻婆豆腐_皮蛋豆腐",
		"红烧牛肉面_香辣牛肉面",
		"鸭脖_鸡爪",
		"果汁_汽水",
		"火锅_涮锅",
		"烧烤_烤串",
		"红豆_绿豆",
		"小葱_蒜苗",
		"火锅_烧烤",
		"麻辣烫_串串香",
		"汉堡包_肉夹馍",
		"冰激淋_冰淇淋",
		"馒头_花卷",
		"大饼_煎饼",
		"烤冷面_烤面筋",
		"三角饼_豆沙饼",
		"酸奶_牛奶",
		"皮蛋豆腐_日本豆腐",
		"葡萄酒_鸡尾酒",
		"西瓜_黄瓜",
		"德芙_金帝",
		"费列罗_金丝猴",
		"铁观音_碧螺春",
		"皮蛋_卤蛋",
		"气泡_水泡",
		"台灯_电灯",
		"水盆_水桶",
		"唇膏_口红",
		"麦克风_扩音器",
		"婚纱_喜服",
		"纸巾_手帕",
		"裸婚_闪婚",
		"公交_地铁",
		"结婚_订婚",
		"手机_座机",
		"枕头_抱枕",
		"鸭舌帽_遮阳帽",
		"生活费_零花钱",
		"洗衣粉_皂角粉",
		"肥皂_香皂",
		"铁观音_碧螺春",
		"沐浴露_沐浴盐",
		"洗发露_护发素",
		"自行车_电动车",
		"近视眼镜_隐形眼镜",
		"眉毛_胡须",
		"围巾_围脖",
		"棉被_毛毯",
		"打针_输液",
		"铅笔袋_铅笔盒",
		"电动车_摩托车",
		"银行卡_信用卡",
		"跑车_豪车",
		"劳斯莱斯_兰博基尼",
		"宾利_宝马",
		"非诚勿扰_我们约会吧",
		"床单_地图",
		"被子_国旗",
		"电灯_壁灯",
		"葵花宝典_辟邪剑谱",
		"香奈儿_爱马仕",
		"高跟鞋_内增高",
		"杭州_苏州",
		"香港_台湾",
		"首尔_东京",
		"广东_广州",
		"海报_报纸",
		"照片_胶卷",
		"会考_高考",
		"高铁_城际",
		"飞机_飞碟",
		'海豚_海狮'];
		var selectword= words[parseInt(Math.random()*words.length)];
		var tem=selectword.split('_');
		var fatherindex = parseInt(Math.random());
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