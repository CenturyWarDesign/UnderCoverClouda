sumeru.router.add(

	{
		pattern: '/guess',
		action: 'App.guess'
	}

);

//sumeru.router.setDefault('App.itworks');


App.guess = sumeru.controller.create(function(env, session){

	env.onrender = function(doRender){
		doRender("guess", ['push','left']);
	};
	var wordstring=[];
	
	var fathercount=4;
	var soncount=1;
	var sonword="";

	env.onready=function(){
		wordstring=session.get("content").split(",");
		initGuess();
		fathercount=session.get("fathercount");
		soncount=session.get("soncount");
		sonword=session.get("sonword");
		document.getElementById('restart').addEventListener('click', restart);
		getMsgs();
	}	



	 var getMsgs = function(){       
        session.undercoverword= env.subscribe('pub-undercover', function(msgCollection){
        	// console.log("callback-:"+msgCollection.find().toString());
            // manipulate synced collection and bind it to serveral view blocks.
            session.bind('message-hall', {
                data    :   msgCollection.find()
            });
        });
    };      
    //onload is respond for handle all data subscription
    env.onload = function(){            
        return [getMsgs];            
    };

	// var getMsgs = function(env){       
	// 	console.log('get msgs.......'); 
 //        session.undercoverword = env.subscribe('pub-undercover', function(msgCollection){
 //        	console.log(msgCollection);
 //        });
 //    }; 

	
	// env.onload = function(){            
 //            return getMsgs();            
 //    };

	// env.onload=function(){
		// console.log("onload");
	// 	wordstring=session.get("content").split(",");
	// 	initGuess();
	// 	fathercount=session.get("fathercount");
	// 	soncount=session.get("soncount");
	// 	sonword=session.get("sonword");
	// }


	var restart=function(){
		// tapindex();
		env.redirect('/fanpai',{'fathercount':fathercount,'soncount':soncount});
		// initGuess();
	}


	var initGuess=function(){
		$("#guesscontent").html("");
		for (var i = 1; i <=wordstring.length; i++) {
			if((i-1)%4==0)
			{
				$("#guesscontent").append('<br/>');
			}
			var temhtml="<button id='under_"+i+"'  type='button'class='btn btn-default' style='width:20%;padding:5px;margin:5px;' onclick=''>"+i+"</button>"
			$("#guesscontent").append(temhtml);
			document.getElementById('under_'+i).addEventListener('click', tapindex);
		};
	}

	var tapindex=function(){
		var index=this.id.split('_')[1];
		$("#under_"+index).attr("disabled", "disabled");
		if(wordstring[index-1]!=sonword)
		{
			$("#under_"+index).html("冤死"+wordstring[index-1]);
		}else{
			$("#under_"+index).html("卧底"+wordstring[index-1]);
		}
		// $("#under_"+index).html(wordstring[index]);
		console.log(this.id);


		session.undercoverword.destroy({'sessionid':'wanbin'});
		session.undercoverword.add({
           fathercount :10,
           content :"wanibn"+index,
           sonword :"w",
           sessionid:'wanbin'
        });
        session.undercoverword.save();
	}


});