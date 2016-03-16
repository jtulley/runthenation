var clickNumber = 0;

var clickMap = [{ "x": 189, "y": 617},{ "x": 228, "y": 619},{ "x": 269, "y": 615},{ "x": 302, "y": 615},{ "x": 326, "y": 624},{ "x": 352, "y": 619},{ "x": 375, "y": 632},{ "x": 404, "y": 638},{ "x": 427, "y": 618},{ "x": 453, "y": 607},{ "x": 484, "y": 602},{ "x": 516, "y": 611},{ "x": 541, "y": 620},{ "x": 561, "y": 605},{ "x": 579, "y": 586},{ "x": 601, "y": 579},{ "x": 620, "y": 568},{ "x": 642, "y": 548},{ "x": 664, "y": 529},{ "x": 685, "y": 509},{ "x": 709, "y": 485},{ "x": 737, "y": 474},{ "x": 762, "y": 468},{ "x": 791, "y": 459},{ "x": 822, "y": 463},{ "x": 849, "y": 461},{ "x": 883, "y": 461},{ "x": 911, "y": 460},{ "x": 938, "y": 454},{ "x": 966, "y": 444},{ "x": 999, "y": 431},{ "x": 1030, "y": 430},{ "x": 1058, "y": 429},{ "x": 1086, "y": 422},{ "x": 1112, "y": 399},{ "x": 1143, "y": 390},{ "x": 1175, "y": 381},{ "x": 1208, "y": 377},{ "x": 1240, "y": 375},{ "x": 1272, "y": 367},{ "x": 1300, "y": 363},{ "x": 1329, "y": 369},{ "x": 1360, "y": 367},{ "x": 1393, "y": 357},{ "x": 1422, "y": 344},{ "x": 1449, "y": 334},{ "x": 1473, "y": 345}];

var clickMap2 = [];

var clickMapOrigWidth = 1663;
var clickMapOrigHeight = 997;
// 997 x 1663

function drawPoint() {
   var overlay = document.getElementById('mapPointOverlay');
   if (overlay) {
		 var img = document.getElementById('routemapimage');
		 if (clickNumber < clickMap.length) {
			 var ctx = overlay.getContext("2d");
			 ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height); 

			 ctx.beginPath();
			 ctx.arc(translateX(clickMap[clickNumber]["x"], img.clientWidth), 
							 translateY(clickMap[clickNumber]["y"], img.clientHeight), 
							 img.clientHeight / 75, 0, 2*Math.PI);
			 ctx.lineWidth = 1;
			 ctx.fillStyle = "#ff0000";
			 ctx.fill();

			 ctx.beginPath();
			 ctx.arc(translateX(clickMap[clickNumber]["x"], img.clientWidth), 
							 translateY(clickMap[clickNumber]["y"], img.clientHeight), 
							 img.clientHeight / 150, 0, 2*Math.PI);
			 ctx.lineWidth = 1;
			 ctx.fillStyle = "#ffffff";
			 ctx.fill();
		 }
   }
}

function registerClick(event, img) {
   clickNumber = clickNumber + 1;
   updateMapSize();
   drawPoint();

/*
   var dataPane = document.getElementById('tempdatapane2');
   var posX = event.offsetX?(event.offsetX):event.pageX-img.offsetLeft;
   var posY = event.offsetY?(event.offsetY):event.pageY-img.offsetTop;
   var i = 0;
   var displayString = "["
   clickMap2.push({ "x": posX, "y": posY});
   for (i = 0; i < clickMap2.length; i++)
   {
     displayString+= "{ \"x\": " + clickMap2[i]["x"] + ", \"y\": " + clickMap2[i]["y"] + "}"; 
     if (i < (clickMap2.length - 1)) {
       displayString+= ",";
     }
   }
   displayString+= "]";

   dataPane.innerHTML = displayString;
*/
}


function handleResize() {
   updateMapSize();
   drawPoint();
}

function translateX(xCoord, curWidth) {
    return xCoord / clickMapOrigWidth * curWidth; 
}

function translateY(yCoord, curHeight) {
    return yCoord / clickMapOrigHeight * curHeight; 
}


function updateMapSize() {
   var img = document.getElementById('routemapimage');
   if (img) {
		 var width = img.clientWidth;
		 var height = img.clientHeight;

		 var overlay = document.getElementById('mapPointOverlay');

		 overlay.style.position = "absolute";
		 overlay.width = img.clientWidth;
		 overlay.height= img.clientHeight;
		 overlay.style.width = img.clientWidth + "px";
		 overlay.style.height= img.clientHeight + "px";
		 overlay.style.display= "block";
   }
}

(function() {

handleResize();
}());
