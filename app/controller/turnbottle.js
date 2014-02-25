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
  var alltime = 10;//转动总时间
  var currenttime = 0;
	env.onready= function(){
       
        //var ctx=document.getElementById('myCanvas').getContext('2d');
        //ctx.translate(25,25);
        //var img = document.getElementById('bottleImg');
  	    //ctx.drawImage(img,25,25);
  	    img = document.getElementById('bottleImg');
        img.onload = function()
        {
            imgheight = img.height;
            imgwidth = img.width;
            console.log(imgheight);
            console.log(imgwidth);
        }
        
        var canvas=document.getElementById('myCanvas');
        ctx = canvas.getContext('2d');
        ctx.globalCompositeOperation = 'destination-over';
        ctx.clearRect(0,0,canvaswidth,canvasheight); // clear canvas
        //ctx.onload = function()
        //{
        canvasheight = canvas.height;
        canvaswidth = canvas.width;

        console.log(canvasheight);
        console.log(canvaswidth);
        //}

        pointx = canvaswidth/2 ;
        pointy = canvasheight/2 ;
        ctx.translate(pointx,pointy);

        document.getElementById('roatebtn').addEventListener('click',move);
	     
	}

	var move =function()
		{
			var interval = setInterval(draw,100);
      setTimeout(function(){
         console.log("interval");
         clearInterval(interval);
      } ,5000);
		}

	var draw = function()
	{
		  //var ctx=document.getElementById('myCanvas').getContext('2d');

		  ctx.globalCompositeOperation = 'destination-over';
  		ctx.clearRect(-pointx,-pointy,canvaswidth,canvasheight); // clear canvas
      console.log(canvaswidth);
      console.log(canvasheight);
      currenttime = currenttime + 100;
  		var angle = alltime*currenttime - currenttime * currenttime ;

  		ctx.rotate(angle*Math.PI/180);
  	  ctx.drawImage(img,-imgwidth/2,-imgheight/2);
  	  ctx.restore();
	}

});