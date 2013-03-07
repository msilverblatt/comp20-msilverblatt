var myLat = 0;
var myLong = 0;
var map;
var marker;
var markers = [];
var peopleMarkers = [];
var redStations = [];
var braintreeBranch = [];
var ashmontBranch = [];
var myLoc;
var loc;
var tIcon = "assets/icon.png";
var waldoIcon = "assets/waldo.png";
var carmenIcon = "assets/carmen.png";
var myContent = "<h1>You are here!</h1>";
var stationKeys = [];


var infowindow = new google.maps.InfoWindow();
var stations = '[{"Line":"Red","PlatformKey":"RALEN","PlatformName":"ALEWIFE NB","StationName":"ALEWIFE","PlatformOrder":17,"StartOfLine":"FALSE","EndOfLine":"TRUE","Branch":"Trunk","Direction":"NB","stop_id":"place-alfcl","stop_code":null,"stop_name":"Alewife Station","stop_desc":null,"stop_lat":42.395428,"stop_lon":-71.142483},{"Line":"Red","PlatformKey":"RDAVN","PlatformName":"DAVIS NB","StationName":"DAVIS","PlatformOrder":16,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-davis","stop_code":null,"stop_name":"Davis Station","stop_desc":null,"stop_lat":42.39674,"stop_lon":-71.121815},{"Line":"Red","PlatformKey":"RDAVS","PlatformName":"DAVIS SB","StationName":"DAVIS","PlatformOrder":1,"StartOfLine":"TRUE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-davis","stop_code":null,"stop_name":"Davis Station","stop_desc":null,"stop_lat":42.39674,"stop_lon":-71.121815},{"Line":"Red","PlatformKey":"RPORN","PlatformName":"PORTER NB","StationName":"PORTER","PlatformOrder":15,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-portr","stop_code":null,"stop_name":"Porter Square Station","stop_desc":null,"stop_lat":42.3884,"stop_lon":-71.119149},{"Line":"Red","PlatformKey":"RPORS","PlatformName":"PORTER SB","StationName":"PORTER","PlatformOrder":2,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-portr","stop_code":null,"stop_name":"Porter Square Station","stop_desc":null,"stop_lat":42.3884,"stop_lon":-71.119149},{"Line":"Red","PlatformKey":"RHARN","PlatformName":"HARVARD NB","StationName":"HARVARD","PlatformOrder":14,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-harsq","stop_code":null,"stop_name":"Harvard Square Station","stop_desc":null,"stop_lat":42.373362,"stop_lon":-71.118956},{"Line":"Red","PlatformKey":"RHARS","PlatformName":"HARVARD SB","StationName":"HARVARD","PlatformOrder":3,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-harsq","stop_code":null,"stop_name":"Harvard Square Station","stop_desc":null,"stop_lat":42.373362,"stop_lon":-71.118956},{"Line":"Red","PlatformKey":"RCENN","PlatformName":"CENTRAL NB","StationName":"CENTRAL","PlatformOrder":13,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-cntsq","stop_code":null,"stop_name":"Central Square Station","stop_desc":null,"stop_lat":42.365486,"stop_lon":-71.103802},{"Line":"Red","PlatformKey":"RCENS","PlatformName":"CENTRAL SB","StationName":"CENTRAL","PlatformOrder":4,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-cntsq","stop_code":null,"stop_name":"Central Square Station","stop_desc":null,"stop_lat":42.365486,"stop_lon":-71.103802},{"Line":"Red","PlatformKey":"RKENN","PlatformName":"KENDALL NB","StationName":"KENDALL","PlatformOrder":12,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-knncl","stop_code":null,"stop_name":"Kendall/MIT Station","stop_desc":null,"stop_lat":42.36249079,"stop_lon":-71.08617653},{"Line":"Red","PlatformKey":"RKENS","PlatformName":"KENDALL SB","StationName":"KENDALL","PlatformOrder":5,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-knncl","stop_code":null,"stop_name":"Kendall/MIT Station","stop_desc":null,"stop_lat":42.36249079,"stop_lon":-71.08617653},{"Line":"Red","PlatformKey":"RMGHN","PlatformName":"CHARLES MGH NB","StationName":"CHARLES MGH","PlatformOrder":11,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-chmnl","stop_code":null,"stop_name":"Charles/MGH Station","stop_desc":null,"stop_lat":42.361166,"stop_lon":-71.070628},{"Line":"Red","PlatformKey":"RMGHS","PlatformName":"CHARLES MGH SB","StationName":"CHARLES MGH","PlatformOrder":6,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-chmnl","stop_code":null,"stop_name":"Charles/MGH Station","stop_desc":null,"stop_lat":42.361166,"stop_lon":-71.070628},{"Line":"Red","PlatformKey":"RPRKN","PlatformName":"PARK NB","StationName":"PARK","PlatformOrder":10,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-pktrm","stop_code":null,"stop_name":"Park St. Station","stop_desc":null,"stop_lat":42.35639457,"stop_lon":-71.0624242},{"Line":"Red","PlatformKey":"RPRKS","PlatformName":"PARK SB","StationName":"PARK","PlatformOrder":7,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-pktrm","stop_code":null,"stop_name":"Park St. Station","stop_desc":null,"stop_lat":42.35639457,"stop_lon":-71.0624242},{"Line":"Red","PlatformKey":"RDTCN","PlatformName":"DOWNTOWN CROSSING NB","StationName":"DOWNTOWN CROSSING","PlatformOrder":9,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-dwnxg","stop_code":null,"stop_name":"Downtown Crossing Station","stop_desc":null,"stop_lat":42.355518,"stop_lon":-71.060225},{"Line":"Red","PlatformKey":"RDTCS","PlatformName":"DOWNTOWN CROSSING SB","StationName":"DOWNTOWN CROSSING","PlatformOrder":8,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-dwnxg","stop_code":null,"stop_name":"Downtown Crossing Station","stop_desc":null,"stop_lat":42.355518,"stop_lon":-71.060225},{"Line":"Red","PlatformKey":"RSOUN","PlatformName":"SOUTH STATION NB","StationName":"SOUTH STATION","PlatformOrder":8,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-sstat","stop_code":null,"stop_name":"South Station","stop_desc":null,"stop_lat":42.352271,"stop_lon":-71.055242},{"Line":"Red","PlatformKey":"RSOUS","PlatformName":"SOUTH STATION SB","StationName":"SOUTH STATION","PlatformOrder":9,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-sstat","stop_code":null,"stop_name":"South Station","stop_desc":null,"stop_lat":42.352271,"stop_lon":-71.055242},{"Line":"Red","PlatformKey":"RBRON","PlatformName":"BROADWAY NB","StationName":"BROADWAY","PlatformOrder":7,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-brdwy","stop_code":null,"stop_name":"Broadway Station","stop_desc":null,"stop_lat":42.342622,"stop_lon":-71.056967},{"Line":"Red","PlatformKey":"RBROS","PlatformName":"BROADWAY SB","StationName":"BROADWAY","PlatformOrder":10,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-brdwy","stop_code":null,"stop_name":"Broadway Station","stop_desc":null,"stop_lat":42.342622,"stop_lon":-71.056967},{"Line":"Red","PlatformKey":"RANDN","PlatformName":"ANDREW NB","StationName":"ANDREW","PlatformOrder":6,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-andrw","stop_code":null,"stop_name":"Andrew Station","stop_desc":null,"stop_lat":42.330154,"stop_lon":-71.057655},{"Line":"Red","PlatformKey":"RANDS","PlatformName":"ANDREW SB","StationName":"ANDREW","PlatformOrder":11,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-andrw","stop_code":null,"stop_name":"Andrew Station","stop_desc":null,"stop_lat":42.330154,"stop_lon":-71.057655},{"Line":"Red","PlatformKey":"RJFKN","PlatformName":"JFK NB","StationName":"JFK","PlatformOrder":5,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-jfkred","stop_code":null,"stop_name":"JFK/UMass Station","stop_desc":null,"stop_lat":42.320685,"stop_lon":-71.052391},{"Line":"Red","PlatformKey":"RJFKS","PlatformName":"JFK SB","StationName":"JFK","PlatformOrder":12,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-jfkred","stop_code":null,"stop_name":"JFK/UMass Station","stop_desc":null,"stop_lat":42.320685,"stop_lon":-71.052391},{"Line":"Red","PlatformKey":"RSAVN","PlatformName":"SAVIN HILL NB","StationName":"SAVIN HILL","PlatformOrder":4,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Ashmont","Direction":"NB","stop_id":"place-shmnl","stop_code":null,"stop_name":"Savin Hill Station","stop_desc":null,"stop_lat":42.31129,"stop_lon":-71.053331},{"Line":"Red","PlatformKey":"RSAVS","PlatformName":"SAVIN HILL SB","StationName":"SAVIN HILL","PlatformOrder":13,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Ashmont","Direction":"SB","stop_id":"place-shmnl","stop_code":null,"stop_name":"Savin Hill Station","stop_desc":null,"stop_lat":42.31129,"stop_lon":-71.053331},{"Line":"Red","PlatformKey":"RFIEN","PlatformName":"FIELDS CORNER NB","StationName":"FIELDS CORNER","PlatformOrder":3,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Ashmont","Direction":"NB","stop_id":"place-fldcr","stop_code":null,"stop_name":"Fields Corner Station","stop_desc":null,"stop_lat":42.300093,"stop_lon":-71.061667},{"Line":"Red","PlatformKey":"RFIES","PlatformName":"FIELDS CORNER SB","StationName":"FIELDS CORNER","PlatformOrder":14,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Ashmont","Direction":"SB","stop_id":"place-fldcr","stop_code":null,"stop_name":"Fields Corner Station","stop_desc":null,"stop_lat":42.300093,"stop_lon":-71.061667},{"Line":"Red","PlatformKey":"RSHAN","PlatformName":"SHAWMUT NB","StationName":"SHAWMUT","PlatformOrder":2,"StartOfLine":"TRUE","EndOfLine":"FALSE","Branch":"Ashmont","Direction":"NB","stop_id":"place-smmnl","stop_code":null,"stop_name":"Shawmut Station","stop_desc":null,"stop_lat":42.29312583,"stop_lon":-71.06573796},{"Line":"Red","PlatformKey":"RSHAS","PlatformName":"SHAWMUT SB","StationName":"SHAWMUT","PlatformOrder":15,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Ashmont","Direction":"SB","stop_id":"place-smmnl","stop_code":null,"stop_name":"Shawmut Station","stop_desc":null,"stop_lat":42.29312583,"stop_lon":-71.06573796},{"Line":"Red","PlatformKey":"RASHS","PlatformName":"ASHMONT SB","StationName":"ASHMONT","PlatformOrder":16,"StartOfLine":"FALSE","EndOfLine":"TRUE","Branch":"Ashmont","Direction":"SB","stop_id":"place-asmnl","stop_code":null,"stop_name":"Ashmont Station","stop_desc":null,"stop_lat":42.284652,"stop_lon":-71.064489},{"Line":"Red","PlatformKey":"RNQUN","PlatformName":"NORTH QUINCY NB","StationName":"NORTH QUINCY","PlatformOrder":4,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Braintree","Direction":"NB","stop_id":"place-nqncy","stop_code":null,"stop_name":"North Quincy Station","stop_desc":null,"stop_lat":42.275275,"stop_lon":-71.029583},{"Line":"Red","PlatformKey":"RNQUS","PlatformName":"NORTH QUINCY SB","StationName":"NORTH QUINCY","PlatformOrder":13,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Braintree","Direction":"SB","stop_id":"place-nqncy","stop_code":null,"stop_name":"North Quincy Station","stop_desc":null,"stop_lat":42.275275,"stop_lon":-71.029583},{"Line":"Red","PlatformKey":"RWOLN","PlatformName":"WOLLASTON NB","StationName":"WOLLASTON","PlatformOrder":3,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Braintree","Direction":"NB","stop_id":"place-wlsta","stop_code":null,"stop_name":"Wollaston Station","stop_desc":null,"stop_lat":42.2665139,"stop_lon":-71.0203369},{"Line":"Red","PlatformKey":"RWOLS","PlatformName":"WOLLASTON SB","StationName":"WOLLASTON","PlatformOrder":14,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Braintree","Direction":"SB","stop_id":"place-wlsta","stop_code":null,"stop_name":"Wollaston Station","stop_desc":null,"stop_lat":42.2665139,"stop_lon":-71.0203369},{"Line":"Red","PlatformKey":"RQUCN","PlatformName":"QUINCY CENTER NB","StationName":"QUINCY CENTER","PlatformOrder":2,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Braintree","Direction":"NB","stop_id":"place-qnctr","stop_code":null,"stop_name":"Quincy Center Station","stop_desc":null,"stop_lat":42.251809,"stop_lon":-71.005409},{"Line":"Red","PlatformKey":"RQUCS","PlatformName":"QUINCY CENTER SB","StationName":"QUINCY CENTER","PlatformOrder":15,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Braintree","Direction":"SB","stop_id":"place-qnctr","stop_code":null,"stop_name":"Quincy Center Station","stop_desc":null,"stop_lat":42.251809,"stop_lon":-71.005409},{"Line":"Red","PlatformKey":"RQUAN","PlatformName":"QUINCY ADAMS NB","StationName":"QUINCY ADAMS","PlatformOrder":1,"StartOfLine":"TRUE","EndOfLine":"FALSE","Branch":"Braintree","Direction":"NB","stop_id":"place-qamnl","stop_code":null,"stop_name":"Quincy Adams Station","stop_desc":null,"stop_lat":42.233391,"stop_lon":-71.007153},{"Line":"Red","PlatformKey":"RQUAS","PlatformName":"QUINCY ADAMS SB","StationName":"QUINCY ADAMS","PlatformOrder":16,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Braintree","Direction":"SB","stop_id":"place-qamnl","stop_code":null,"stop_name":"Quincy Adams Station","stop_desc":null,"stop_lat":42.233391,"stop_lon":-71.007153},{"Line":"Red","PlatformKey":"RBRAS","PlatformName":"BRAINTREE SB","StationName":"BRAINTREE","PlatformOrder":17,"StartOfLine":"FALSE","EndOfLine":"TRUE","Branch":"Braintree","Direction":"SB","stop_id":"place-brntn","stop_code":null,"stop_name":"Braintree Station","stop_desc":null,"stop_lat":42.2078543,"stop_lon":-71.0011385}]';

var request;
var times;// = [];// = {};
var timesDone = false;

var peopleRequest;
var people;
var peopleDone = false;

function init(){
	loc = new google.maps.LatLng(42.330497742, -71.095794678);
	options = {
		zoom: 11,
		center: loc,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_div"), options);

	try {
  request = new XMLHttpRequest();
  peopleRequest = new XMLHttpRequest();
}
catch (ms1) { 
  try {
    request = new ActiveXObject("Msxml2.XMLHTTP");
    peopleRequest = new ActiveXObject("Msxml2.XMLHTTP");
  }
  catch (ms2) {
    try {
      request = new ActiveXObject("Microsoft.XMLHTTP");
      peopleRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    catch (ex) {

      request = null;
      peopleRequest = null;
    }
  }
}
if (request == null || peopleRequest == null) {
  alert("Error creating request object --Ajax not supported?");
}
	request.open("GET","http://mbtamap-cedar.herokuapp.com/mapper/redline.json",true);
	//request.responseType = "JSON";
	request.send();
	request.onreadystatechange = function() {
		//console.log("changed");
		if (request.readyState == 4){
			times = JSON.parse(request.responseText);
			timesDone = true;
		}
	}



	peopleRequest.open("GET","http://messagehub.herokuapp.com/a3.json",true);
	peopleRequest.send();
	peopleRequest.onreadystatechange = function(){
		if (peopleRequest.readyState == 4){
			people = JSON.parse(peopleRequest.responseText);
			peopleDone = true;
			findMe();
		}
	}
//	findMe();



//	showStations();
}
function addPeople(){
	if (people.length > 0){
		for (i = 0, len = people.length; i < len; i++){
			loc = new google.maps.LatLng(people[i].loc.latitude,people[i].loc.longitude);
			console.log("name: " + people[i].name + " lat: " + people[i].loc.latitude + " lon: " + people[i].loc.longitude);
			
			if (people[i].name == "Waldo"){
				peopleMarkers.push(new google.maps.Marker({
					position: loc,
					title: people[i].name,
					icon: waldoIcon
				}));
				myContent += "<h4>Waldo is " + myDistance(loc) + " miles away!</h4>";
			}
			else if (people[i].name == "Carmen Sandiego"){
				peopleMarkers.push(new google.maps.Marker({
					position: loc,
					title: people[i].name,
					icon: carmenIcon
				}));
				myContent += "<h4>Carmen Sandiego is " + myDistance(loc) + " miles away!</h4>";

			}		
		}
		for (i = 0, len = peopleMarkers.length; i < len; i++){
			peopleMarkers[i].setMap(map);
		}
	}
}
function findMe(){
	if (navigator.geolocation) { 
		navigator.geolocation.getCurrentPosition(function(position) {
			myLat = position.coords.latitude;
			myLong = position.coords.longitude;

			showStations();
			addPeople();
			updateMap();
		});
	}
	else {
		alert("Geolocation is not supported by your web browser.  What year is it?");
	}
}

function updateMap(){
	myLoc = new google.maps.LatLng(myLat,myLong);
	marker = new google.maps.Marker({
		position: myLoc,
		title: "myLoc"
	});
	marker.setMap(map);
					// Open info window on click of marker
	infowindow.setContent(myContent);
	infowindow.open(map, marker);
	google.maps.event.addListener(marker, 'click', function() {
			infowindow.setContent(myContent);
			infowindow.open(map, marker);
		});
	map.panTo(myLoc);
}

function showStations(){
	pastBranch = false;
	pastAshmont = false;
	data = JSON.parse(stations);
	closestIndex = -1;
	closestDistance = 99999999;
	for (i = 0, len = data.length; i < len; i++){
		stationKeys[data[i].PlatformKey] = data[i].StationName;
	}
	for (i = 0, len = data.length; i < len; i++){

		//console.log(data[i].StationName);
		loc = new google.maps.LatLng(data[i].stop_lat,data[i].stop_lon);
		distance = myDistance(loc);
		if (distance < closestDistance) {
			closestIndex = i;
			closestDistance = distance;
		}


		//console.log(myDistance(loc));
		markers.push(new google.maps.Marker({
			position: loc,
			title: data[i].StationName,
			icon: tIcon
		}));

		if (data[i].StationName == "JFK"){
			pastBranch = true;
			ashmontBranch.push(loc);
			braintreeBranch.push(loc);
			redStations.push(loc);
		}
		else if (!pastBranch) redStations.push(loc);
		
		else if (data[i].StationName == "ASHMONT"){
				ashmontBranch.push(loc);
				pastAshmont = true;
		}
		else if (!pastAshmont){
				ashmontBranch.push(loc);
		}
		else braintreeBranch.push(loc);


		
		if (data[i].EndOfLine == "FALSE") {
			i++;
			//console.log("incrementing i");
		}	
	}
	if (closestIndex >= 0) {
		myContent += "<h3>Your closest station is " + data[closestIndex].StationName + ", only " + closestDistance + " miles away!</h3>";
		infowindow.setContent(myContent);
	}
	else alert("nothin");

	for (var m in markers){
		markers[m].setMap(map);

		google.maps.event.addListener(markers[m], 'click', function() {
			obj = this;
			thisTitle = "<h1>" + this.title + " STATION</h1>";
			//if (timesDone){
			//	thisTitle += "<h3>Times have been loaded</h3>";
				thisTitle += findTimes(this.title)
			//}
			//else {
			//	thisTitle += "<h3>Loading times...</h3>";
			//}
			infowindow.setContent(thisTitle);
			infowindow.open(map, obj);
		});
	}
	drawLine();
}

function drawLine(){

	redLine = new google.maps.Polyline({
			path: redStations,
			strokeColor: "#FF0000",
			strokeOpacity: 1.0,
			strokeWeight: 10
		});
	redLine.setMap(map);
	aBranch = new google.maps.Polyline({
		path: ashmontBranch,
		strokeColor: "#FF0000",
		strokeOpacity: 1.0,
		strokeWeight: 10
	});
	aBranch.setMap(map);
	bBranch = new google.maps.Polyline({
		path: braintreeBranch,
		strokeColor: "#FF0000",
		strokeOpacity: 1.0,
		strokeWeight: 10
	});
	bBranch.setMap(map);
}

function myDistance(other){
var lat2 = myLat; 
var lon2 = myLong; 
var lat1 = other.lat(); 
var lon1 = other.lng(); 
var R = 6371; // km 

var dLat = toRad(lat2 - lat1);  

var dLon = toRad(lon2 - lon1);  
var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
                Math.sin(dLon/2) * Math.sin(dLon/2);  
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
var d = R * c; 	
return d;
}

function toRad(x) {
   return x * Math.PI / 180;
}

function findTimes(station){
	var result = "";
	if (timesDone){
	if (times.length > 0){
		result += "<table><tr><th>Direction</th><th>Time</th><th>Trip</th></tr>";
		for (i = 0, len = times.length; i < len; i++){
			if (stationKeys[times[i].PlatformKey] == station && times[i].InformationType == "Predicted"){
				if (times[i].PlatformKey.charAt(4) == 'S') result += "<tr><td>SOUTHBOUND</td>";
				else result += "<tr><td>NORTHBOUND</td>";
				result += "<td>" + times[i].TimeRemaining + "</td><td>" + times[i].Trip + "</tr>";
				//console.log(times[i].PlatformKey);
			}
			else {
				//console.log(stationKeys[times[i].PlatformKey]);
				//console.log(times[i].PlatformKey);
			}
		}
		result += "</table>";
	}
	}

	else result += "<h4>Sorry, no times available</h4>";
	return result;
}


