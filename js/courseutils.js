var clickNumber = 0;

var clickMap = [{ "x": 189, "y": 617},{ "x": 228, "y": 619},{ "x": 269, "y": 615},{ "x": 302, "y": 615},{ "x": 326, "y": 624},{ "x": 352, "y": 619},{ "x": 375, "y": 632},{ "x": 404, "y": 638},{ "x": 427, "y": 618},{ "x": 453, "y": 607},{ "x": 484, "y": 602},{ "x": 516, "y": 611},{ "x": 541, "y": 620},{ "x": 561, "y": 605},{ "x": 579, "y": 586},{ "x": 601, "y": 579},{ "x": 620, "y": 568},{ "x": 642, "y": 548},{ "x": 664, "y": 529},{ "x": 685, "y": 509},{ "x": 709, "y": 485},{ "x": 737, "y": 474},{ "x": 762, "y": 468},{ "x": 791, "y": 459},{ "x": 822, "y": 463},{ "x": 849, "y": 461},{ "x": 883, "y": 461},{ "x": 911, "y": 460},{ "x": 938, "y": 454},{ "x": 966, "y": 444},{ "x": 999, "y": 431},{ "x": 1030, "y": 430},{ "x": 1058, "y": 429},{ "x": 1086, "y": 422},{ "x": 1112, "y": 399},{ "x": 1143, "y": 390},{ "x": 1175, "y": 381},{ "x": 1208, "y": 377},{ "x": 1240, "y": 375},{ "x": 1272, "y": 367},{ "x": 1300, "y": 363},{ "x": 1329, "y": 369},{ "x": 1360, "y": 367},{ "x": 1393, "y": 357},{ "x": 1422, "y": 344},{ "x": 1449, "y": 334},{ "x": 1473, "y": 345}];
var destMap = 
[ { "day": "1", "startET": "4/24 9 AM", "endET": "4/24 9 PM", "dailyMiles": "56", "milesRan": "56", "milesToGo": "3017", "endCity": "Montclair", "endState": "CA", "lat": "34.07751", "long": "-117.689778" },
{ "day": "2", "startET": "4/25 9 AM", "endET": "4/25 9 PM", "dailyMiles": "56", "milesRan": "112", "milesToGo": "2961", "endCity": "Cabazon", "endState": "CA", "lat": "33.91704", "long": "-116.786693" },
{ "day": "3", "startET": "4/26 9 AM", "endET": "4/26 9 PM", "dailyMiles": "56", "milesRan": "168", "milesToGo": "2905", "endCity": "Twentynine Palms", "endState": "CA", "lat": "34.135692", "long": "-116.054351" },
{ "day": "4", "startET": "4/27 9 AM", "endET": "4/27 9 PM", "dailyMiles": "56", "milesRan": "224", "milesToGo": "2849", "endCity": "Vidal", "endState": "CA", "lat": "34.118904", "long": "-114.510236" },
{ "day": "5", "startET": "4/28 9 AM", "endET": "4/28 9 PM", "dailyMiles": "56", "milesRan": "280", "milesToGo": "2793", "endCity": "Bouse", "endState": "AZ", "lat": "33.932524", "long": "-114.005775" },
{ "day": "6", "startET": "4/29 9 AM", "endET": "4/29 9 PM", "dailyMiles": "56", "milesRan": "336", "milesToGo": "2737", "endCity": "Wenden", "endState": "AZ", "lat": "33.82253", "long": "-113.541594" },
{ "day": "7", "startET": "4/30 9 AM", "endET": "4/30 9 PM", "dailyMiles": "56", "milesRan": "392", "milesToGo": "2681", "endCity": "Morristown", "endState": "AZ", "lat": "33.856982", "long": "-112.623296" },
{ "day": "8", "startET": "5/1 9 AM", "endET": "5/1 9 PM", "dailyMiles": "62", "milesRan": "454", "milesToGo": "2619", "endCity": "Mesa", "endState": "AZ", "lat": "33.415314", "long": "-111.831264" },
{ "day": "9", "startET": "5/2 9 AM", "endET": "5/2 9 PM", "dailyMiles": "62", "milesRan": "516", "milesToGo": "2557", "endCity": "Miami", "endState": "AZ", "lat": "33.399478", "long": "-110.87095" },
{ "day": "10", "startET": "5/3 9 AM", "endET": "5/3 9 PM", "dailyMiles": "62", "milesRan": "578", "milesToGo": "2495", "endCity": "Show Low", "endState": "AZ", "lat": "34.254208", "long": "-110.029833" },
{ "day": "11", "startET": "5/4 9 AM", "endET": "5/4 9 PM", "dailyMiles": "62", "milesRan": "640", "milesToGo": "2433", "endCity": "Vernon", "endState": "AZ", "lat": "34.257536", "long": "-109.692883" },
{ "day": "12", "startET": "5/5 9 AM", "endET": "5/5 9 PM", "dailyMiles": "62", "milesRan": "702", "milesToGo": "2371", "endCity": "Quemado", "endState": "NM", "lat": "34.343608", "long": "-108.497631" },
{ "day": "13", "startET": "5/6 9 AM", "endET": "5/6 9 PM", "dailyMiles": "62", "milesRan": "764", "milesToGo": "2309", "endCity": "Datil", "endState": "NM", "lat": "34.145033", "long": "-107.843356" },
{ "day": "14", "startET": "5/7 9 AM", "endET": "5/7 9 PM", "dailyMiles": "62", "milesRan": "826", "milesToGo": "2247", "endCity": "Socorro", "endState": "NM", "lat": "34.057279", "long": "-106.893052" },
{ "day": "15", "startET": "5/8 9 AM", "endET": "5/8 9 PM", "dailyMiles": "64", "milesRan": "890", "milesToGo": "2183", "endCity": "Carrizozo", "endState": "NM", "lat": "33.641806", "long": "-105.877478" },
{ "day": "16", "startET": "5/9 9 AM", "endET": "5/9 9 PM", "dailyMiles": "64", "milesRan": "954", "milesToGo": "2119", "endCity": "N/A", "endState": "NM", "lat": "unknown", "long": "unknown" },
{ "day": "17", "startET": "5/10 9 AM", "endET": "5/10 9 PM", "dailyMiles": "64", "milesRan": "1018", "milesToGo": "2055", "endCity": "Santa Rosa", "endState": "NM", "lat": "34.93867", "long": "-104.682489" },
{ "day": "18", "startET": "5/11 9 AM", "endET": "5/11 9 PM", "dailyMiles": "64", "milesRan": "1082", "milesToGo": "1991", "endCity": "Tucumcari", "endState": "NM", "lat": "35.16668", "long": "-103.738115" },
{ "day": "19", "startET": "5/12 9 AM", "endET": "5/12 9 PM", "dailyMiles": "64", "milesRan": "1146", "milesToGo": "1927", "endCity": "N/A", "endState": "NM", "lat": "unknown", "long": "unknown" },
{ "day": "20", "startET": "5/13 9 AM", "endET": "5/13 9 PM", "dailyMiles": "64", "milesRan": "1210", "milesToGo": "1863", "endCity": "Dalhart", "endState": "TX", "lat": "36.054297", "long": "-102.513576" },
{ "day": "21", "startET": "5/14 9 AM", "endET": "5/14 9 PM", "dailyMiles": "64", "milesRan": "1274", "milesToGo": "1799", "endCity": "Guymon", "endState": "OK", "lat": "36.682804", "long": "-101.481549" },
{ "day": "22", "startET": "5/15 9 AM", "endET": "5/15 9 PM", "dailyMiles": "67", "milesRan": "1341", "milesToGo": "1732", "endCity": "Plains", "endState": "KS", "lat": "37.260299", "long": "-100.592652" },
{ "day": "23", "startET": "5/16 9 AM", "endET": "5/16 9 PM", "dailyMiles": "67", "milesRan": "1408", "milesToGo": "1665", "endCity": "Mullinville", "endState": "KS", "lat": "37.586131", "long": "-99.475674" },
{ "day": "24", "startET": "5/17 9 AM", "endET": "5/17 9 PM", "dailyMiles": "67", "milesRan": "1475", "milesToGo": "1598", "endCity": "Turon", "endCity": "KS", "lat": "37.807239", "long": "-98.426742" },
{ "day": "25", "startET": "5/18 9 AM", "endET": "5/18 9 PM", "dailyMiles": "67", "milesRan": "1542", "milesToGo": "1531", "endCity": "Newton", "endState": "KS", "lat": "38.046917", "long": "-97.344724" },
{ "day": "26", "startET": "5/19 9 AM", "endET": "5/19 9 PM", "dailyMiles": "67", "milesRan": "1609", "milesToGo": "1464", "endCity": "Eureka", "endState": "KS", "lat": "37.823917", "long": "-96.28917" },
{ "day": "27", "startET": "5/20 9 AM", "endET": "5/20 9 PM", "dailyMiles": "67", "milesRan": "1676", "milesToGo": "1397", "endCity": "Moran", "endState": "KS", "lat": "37.916147", "long": "-95.170255" },
{ "day": "28", "startET": "5/21 9 AM", "endET": "5/21 9 PM", "dailyMiles": "67", "milesRan": "1743", "milesToGo": "1330", "endCity": "El Dorado Springs", "endState": "MO", "lat": "37.87698", "long": "-94.02133" },
{ "day": "29", "startET": "5/22 9 AM", "endET": "5/22 9 PM", "dailyMiles": "72", "milesRan": "1815", "milesToGo": "1258", "endCity": "Roach", "endState": "MO", "lat": "37.993923", "long": "-92.836298" },
{ "day": "30", "startET": "5/23 9 AM", "endET": "5/23 9 PM", "dailyMiles": "72", "milesRan": "1887", "milesToGo": "1186", "endCity": "Belle", "endState": "MO", "lat": "38.285879", "long": "-91.720442" },
{ "day": "31", "startET": "5/24 9 AM", "endET": "5/24 9 PM", "dailyMiles": "72", "milesRan": "1959", "milesToGo": "1114", "endCity": "Grover", "endState": "MO", "lat": "38.590694", "long": "-90.636388" },
{ "day": "32", "startET": "5/25 9 AM", "endET": "5/25 9 PM", "dailyMiles": "72", "milesRan": "2031", "milesToGo": "1042", "endCity": "Aviston", "endState": "IL", "lat": "38.606715", "long": "-89.607589" },
{ "day": "33", "startET": "5/26 9 AM", "endET": "5/26 9 PM", "dailyMiles": "72", "milesRan": "2103", "milesToGo": "970", "endCity": "Clay City", "endState": "IL", "lat": "38.688659", "long": "-88.354212" },
{ "day": "34", "startET": "5/27 9 AM", "endET": "5/27 9 PM", "dailyMiles": "72", "milesRan": "2175", "milesToGo": "898", "endCity": "Westphalia", "endState": "IN", "lat": "38.862824", "long": "-87.225569" },
{ "day": "35", "startET": "5/28 9 AM", "endET": "5/28 9 PM", "dailyMiles": "72", "milesRan": "2247", "milesToGo": "826", "endCity": "Martinsville", "endState": "IN", "lat": "39.427825", "long": "-86.428328" },
{ "day": "36", "startET": "5/29 9 AM", "endET": "5/29 9 PM", "dailyMiles": "70", "milesRan": "2317", "milesToGo": "756", "endCity": "Brownsville", "endState": "IN", "lat": "39.664492", "long": "-85.004684" },
{ "day": "37", "startET": "5/30 9 AM", "endET": "5/30 9 PM", "dailyMiles": "70", "milesRan": "2387", "milesToGo": "686", "endCity": "Enon", "endState": "OH", "lat": "39.878115", "long": "-83.936876" },
{ "day": "38", "startET": "5/31 9 AM", "endET": "5/31 9 PM", "dailyMiles": "70", "milesRan": "2457", "milesToGo": "616", "endCity": "Kirkersville", "endState": "OH", "lat": "39.959508", "long": "-82.595718" },
{ "day": "39", "startET": "6/1 9 AM", "endET": "6/1 9 PM", "dailyMiles": "70", "milesRan": "2527", "milesToGo": "546", "endCity": "Old Washington", "endState": "OH", "lat": "40.038682", "long": "-81.444562" },
{ "day": "40", "startET": "6/2 9 AM", "endET": "6/2 9 PM", "dailyMiles": "70", "milesRan": "2597", "milesToGo": "476", "endCity": "Washington", "endState": "PA", "lat": "40.17396", "long": "-80.246171" },
{ "day": "41", "startET": "6/3 9 AM", "endET": "6/3 9 PM", "dailyMiles": "70", "milesRan": "2667", "milesToGo": "406", "endCity": "Somerset", "endState": "PA", "lat": "40.008411", "long": "-79.078083" },
{ "day": "42", "startET": "6/4 9 AM", "endET": "6/4 9 PM", "dailyMiles": "70", "milesRan": "2737", "milesToGo": "336", "endCity": "Fort Littleton", "endState": "PA", "lat": "40.062864", "long": "-77.963612" },
{ "day": "43", "startET": "6/5 9 AM", "endET": "6/5 9 PM", "dailyMiles": "72", "milesRan": "2809", "milesToGo": "264", "endCity": "Colonial Park", "endState": "PA", "lat": "40.300645", "long": "-76.809694" },
{ "day": "44", "startET": "6/6 9 AM", "endET": "6/6 9 PM", "dailyMiles": "72", "milesRan": "2881", "milesToGo": "192", "endCity": "Kuhnsville", "endState": "PA", "lat": "40.592034", "long": "-75.589202" },
{ "day": "45", "startET": "6/7 9 AM", "endET": "6/7 9 PM", "dailyMiles": "72", "milesRan": "2953", "milesToGo": "120", "endCity": "Pine Brook", "endState": "NJ", "lat": "40.860377", "long": "-74.340428" },
{ "day": "46", "startET": "6/8 9 AM", "endET": "6/8 9 PM", "dailyMiles": "72", "milesRan": "3025", "milesToGo": "48", "endCity": "Jacob Riis Park", "endState": "NY", "lat": "40.5666234", "long": "-73.876081" },
{ "day":  "46.3583", "startET": "6/9 9 AM", "endET": "6/9 5 PM", "milesRan": "48", "milesRan": "3073", "milesToGo": "0", "endCity": "N/A", "endState": "NY", "lat": "unknown", "long": "unknown" } ];


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

function setCityData() {
  var startCitySpan = document.getElementById('routestartcity');
  var endCitySpan = document.getElementById('routeendcity');
  var routeMilesSpan = document.getElementById('routemiles');
  var milesToGoSpan = document.getElementById('routemilestogo');
  var routeDaySpan = document.getElementById('routeday');
	if (clickNumber == 0) {
  	startCitySpan.innerHTML = "START: Los Angeles, CA";
	} else {
    startCitySpan.innerHTML = "START: " + destMap[clickNumber - 1]["endCity"] + ", " + destMap[clickNumber - 1]["endState"];
	}
  if (destMap[clickNumber]) {
    if (clickNumber == 46) {
			endCitySpan.innerHTML = "DONE!";
			routeMilesSpan.innerHTML = "MILES TODAY: 0";
			milesToGoSpan.innerHTML = "MILES TO GO: 0";
			routeDaySpan.innerHTML = "FINISHED";

    }  else {
			endCitySpan.innerHTML = "END: " + destMap[clickNumber]["endCity"] + ", " + destMap[clickNumber]["endState"];
			routeMilesSpan.innerHTML = "MILES TODAY: " + destMap[clickNumber]["dailyMiles"];
			milesToGoSpan.innerHTML = "MILES TO GO: " + destMap[clickNumber]["milesToGo"];
			routeDaySpan.innerHTML = "DAY " + destMap[clickNumber]["day"]; // TODO: convert to text
    }
  }
  
}

function registerClick(event, img) {
  clickNumber = clickNumber + 1;
  if (clickNumber == 47) {
    clickNumber = 0;
  }
  handleResize();

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
  setCityData();
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

