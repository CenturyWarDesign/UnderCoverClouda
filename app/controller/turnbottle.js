sumeru.router.add(
   {
	   pattern:'/turnbottle',
	   action:'App.turnbottle'
   }   
);


App.turnbottle = sumeru.controller.create(function(env,session){

	env.onrender = function(doRender){
          doRender('turnbottle',['none','z']);
	};


    
  //var angle = 0;//角度
  var imgheight = 0;//图像高
  var imgwidth = 0;//图像宽
  var canvasheight = 0;//
  var canvaswidth = 0;//
  var img = new Image();//
  var ctx = CanvasRenderingContext2D;
  var pointx = 0;//ctx坐标
  var pointy = 0;//ctx坐标
  var alltime = 5000;//转动总时间
  var angle = 0;//当前转动角度
  var timespan = 50;
  var currenttime = 0;
	env.onready= function(){

  	    //img = document.getElementById('bottleImg');
        img = new Image();
        img.src = '/asset/img/icon_kill.png';
        img.onload = function()
        {
            imgheight = img.height;
            imgwidth = img.width;

            canvasheight = canvas.height;
            canvaswidth = canvas.width;

            pointx = canvaswidth/2 ;
            pointy = canvasheight/2 ;

            ctx.translate(pointx,pointy);
            ctx.drawImage(img,-imgwidth/2,-imgheight/2);
        }
        
        var canvas=document.getElementById('myCanvas');
        ctx = canvas.getContext('2d');
        ctx.globalCompositeOperation = 'destination-over';
        ctx.clearRect(0,0,canvaswidth,canvasheight); 

        document.getElementById('roatebtn').addEventListener('click',move);
	     
	}

	var move =function()
		{
      currenttime = 0;
			var interval = setInterval(draw,timespan);
      setTimeout(function(){
         console.log("interval");
         clearInterval(interval);
      } ,alltime);
		}

	var draw = function()
	{
		  ctx.globalCompositeOperation = 'destination-over';
  		ctx.clearRect(-pointx,-pointy,canvaswidth,canvasheight); 
      
  		var count = alltime/timespan/2;
      currenttime += timespan;
      if(angle < count)
      {
           angle += 1;
      }
      else
      {
           angle -= 1;
      }

  		ctx.rotate(angle*Math.PI/180);
  	  ctx.drawImage(img,-imgwidth/2,-imgheight/2);
  	  ctx.restore();
	}

});