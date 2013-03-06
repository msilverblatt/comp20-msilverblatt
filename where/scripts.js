var myLat = 0;
var myLong = 0;
var map;
var marker;
var loc;


var infowindow = new google.maps.InfoWindow();
var stations = '[{"Line":"Red","PlatformKey":"RALEN","PlatformName":"ALEWIFE NB","StationName":"ALEWIFE","PlatformOrder":17,"StartOfLine":"FALSE","EndOfLine":"TRUE","Branch":"Trunk","Direction":"NB","stop_id":"place-alfcl","stop_code":null,"stop_name":"Alewife Station","stop_desc":null,"stop_lat":42.395428,"stop_lon":-71.142483},{"Line":"Red","PlatformKey":"RDAVN","PlatformName":"DAVIS NB","StationName":"DAVIS","PlatformOrder":16,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-davis","stop_code":null,"stop_name":"Davis Station","stop_desc":null,"stop_lat":42.39674,"stop_lon":-71.121815},{"Line":"Red","PlatformKey":"RDAVS","PlatformName":"DAVIS SB","StationName":"DAVIS","PlatformOrder":1,"StartOfLine":"TRUE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-davis","stop_code":null,"stop_name":"Davis Station","stop_desc":null,"stop_lat":42.39674,"stop_lon":-71.121815},{"Line":"Red","PlatformKey":"RPORN","PlatformName":"PORTER NB","StationName":"PORTER","PlatformOrder":15,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-portr","stop_code":null,"stop_name":"Porter Square Station","stop_desc":null,"stop_lat":42.3884,"stop_lon":-71.119149},{"Line":"Red","PlatformKey":"RPORS","PlatformName":"PORTER SB","StationName":"PORTER","PlatformOrder":2,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-portr","stop_code":null,"stop_name":"Porter Square Station","stop_desc":null,"stop_lat":42.3884,"stop_lon":-71.119149},{"Line":"Red","PlatformKey":"RHARN","PlatformName":"HARVARD NB","StationName":"HARVARD","PlatformOrder":14,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-harsq","stop_code":null,"stop_name":"Harvard Square Station","stop_desc":null,"stop_lat":42.373362,"stop_lon":-71.118956},{"Line":"Red","PlatformKey":"RHARS","PlatformName":"HARVARD SB","StationName":"HARVARD","PlatformOrder":3,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-harsq","stop_code":null,"stop_name":"Harvard Square Station","stop_desc":null,"stop_lat":42.373362,"stop_lon":-71.118956},{"Line":"Red","PlatformKey":"RCENN","PlatformName":"CENTRAL NB","StationName":"CENTRAL","PlatformOrder":13,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-cntsq","stop_code":null,"stop_name":"Central Square Station","stop_desc":null,"stop_lat":42.365486,"stop_lon":-71.103802},{"Line":"Red","PlatformKey":"RCENS","PlatformName":"CENTRAL SB","StationName":"CENTRAL","PlatformOrder":4,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-cntsq","stop_code":null,"stop_name":"Central Square Station","stop_desc":null,"stop_lat":42.365486,"stop_lon":-71.103802},{"Line":"Red","PlatformKey":"RKENN","PlatformName":"KENDALL NB","StationName":"KENDALL","PlatformOrder":12,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-knncl","stop_code":null,"stop_name":"Kendall/MIT Station","stop_desc":null,"stop_lat":42.36249079,"stop_lon":-71.08617653},{"Line":"Red","PlatformKey":"RKENS","PlatformName":"KENDALL SB","StationName":"KENDALL","PlatformOrder":5,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-knncl","stop_code":null,"stop_name":"Kendall/MIT Station","stop_desc":null,"stop_lat":42.36249079,"stop_lon":-71.08617653},{"Line":"Red","PlatformKey":"RMGHN","PlatformName":"CHARLES MGH NB","StationName":"CHARLES MGH","PlatformOrder":11,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-chmnl","stop_code":null,"stop_name":"Charles/MGH Station","stop_desc":null,"stop_lat":42.361166,"stop_lon":-71.070628},{"Line":"Red","PlatformKey":"RMGHS","PlatformName":"CHARLES MGH SB","StationName":"CHARLES MGH","PlatformOrder":6,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-chmnl","stop_code":null,"stop_name":"Charles/MGH Station","stop_desc":null,"stop_lat":42.361166,"stop_lon":-71.070628},{"Line":"Red","PlatformKey":"RPRKN","PlatformName":"PARK NB","StationName":"PARK","PlatformOrder":10,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-pktrm","stop_code":null,"stop_name":"Park St. Station","stop_desc":null,"stop_lat":42.35639457,"stop_lon":-71.0624242},{"Line":"Red","PlatformKey":"RPRKS","PlatformName":"PARK SB","StationName":"PARK","PlatformOrder":7,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-pktrm","stop_code":null,"stop_name":"Park St. Station","stop_desc":null,"stop_lat":42.35639457,"stop_lon":-71.0624242},{"Line":"Red","PlatformKey":"RDTCN","PlatformName":"DOWNTOWN CROSSING NB","StationName":"DOWNTOWN CROSSING","PlatformOrder":9,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-dwnxg","stop_code":null,"stop_name":"Downtown Crossing Station","stop_desc":null,"stop_lat":42.355518,"stop_lon":-71.060225},{"Line":"Red","PlatformKey":"RDTCS","PlatformName":"DOWNTOWN CROSSING SB","StationName":"DOWNTOWN CROSSING","PlatformOrder":8,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-dwnxg","stop_code":null,"stop_name":"Downtown Crossing Station","stop_desc":null,"stop_lat":42.355518,"stop_lon":-71.060225},{"Line":"Red","PlatformKey":"RSOUN","PlatformName":"SOUTH STATION NB","StationName":"SOUTH STATION","PlatformOrder":8,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-sstat","stop_code":null,"stop_name":"South Station","stop_desc":null,"stop_lat":42.352271,"stop_lon":-71.055242},{"Line":"Red","PlatformKey":"RSOUS","PlatformName":"SOUTH STATION SB","StationName":"SOUTH STATION","PlatformOrder":9,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-sstat","stop_code":null,"stop_name":"South Station","stop_desc":null,"stop_lat":42.352271,"stop_lon":-71.055242},{"Line":"Red","PlatformKey":"RBRON","PlatformName":"BROADWAY NB","StationName":"BROADWAY","PlatformOrder":7,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-brdwy","stop_code":null,"stop_name":"Broadway Station","stop_desc":null,"stop_lat":42.342622,"stop_lon":-71.056967},{"Line":"Red","PlatformKey":"RBROS","PlatformName":"BROADWAY SB","StationName":"BROADWAY","PlatformOrder":10,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-brdwy","stop_code":null,"stop_name":"Broadway Station","stop_desc":null,"stop_lat":42.342622,"stop_lon":-71.056967},{"Line":"Red","PlatformKey":"RANDN","PlatformName":"ANDREW NB","StationName":"ANDREW","PlatformOrder":6,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-andrw","stop_code":null,"stop_name":"Andrew Station","stop_desc":null,"stop_lat":42.330154,"stop_lon":-71.057655},{"Line":"Red","PlatformKey":"RANDS","PlatformName":"ANDREW SB","StationName":"ANDREW","PlatformOrder":11,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-andrw","stop_code":null,"stop_name":"Andrew Station","stop_desc":null,"stop_lat":42.330154,"stop_lon":-71.057655},{"Line":"Red","PlatformKey":"RJFKN","PlatformName":"JFK NB","StationName":"JFK","PlatformOrder":5,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"NB","stop_id":"place-jfkred","stop_code":null,"stop_name":"JFK/UMass Station","stop_desc":null,"stop_lat":42.320685,"stop_lon":-71.052391},{"Line":"Red","PlatformKey":"RJFKS","PlatformName":"JFK SB","StationName":"JFK","PlatformOrder":12,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Trunk","Direction":"SB","stop_id":"place-jfkred","stop_code":null,"stop_name":"JFK/UMass Station","stop_desc":null,"stop_lat":42.320685,"stop_lon":-71.052391},{"Line":"Red","PlatformKey":"RSAVN","PlatformName":"SAVIN HILL NB","StationName":"SAVIN HILL","PlatformOrder":4,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Ashmont","Direction":"NB","stop_id":"place-shmnl","stop_code":null,"stop_name":"Savin Hill Station","stop_desc":null,"stop_lat":42.31129,"stop_lon":-71.053331},{"Line":"Red","PlatformKey":"RSAVS","PlatformName":"SAVIN HILL SB","StationName":"SAVIN HILL","PlatformOrder":13,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Ashmont","Direction":"SB","stop_id":"place-shmnl","stop_code":null,"stop_name":"Savin Hill Station","stop_desc":null,"stop_lat":42.31129,"stop_lon":-71.053331},{"Line":"Red","PlatformKey":"RFIEN","PlatformName":"FIELDS CORNER NB","StationName":"FIELDS CORNER","PlatformOrder":3,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Ashmont","Direction":"NB","stop_id":"place-fldcr","stop_code":null,"stop_name":"Fields Corner Station","stop_desc":null,"stop_lat":42.300093,"stop_lon":-71.061667},{"Line":"Red","PlatformKey":"RFIES","PlatformName":"FIELDS CORNER SB","StationName":"FIELDS CORNER","PlatformOrder":14,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Ashmont","Direction":"SB","stop_id":"place-fldcr","stop_code":null,"stop_name":"Fields Corner Station","stop_desc":null,"stop_lat":42.300093,"stop_lon":-71.061667},{"Line":"Red","PlatformKey":"RSHAN","PlatformName":"SHAWMUT NB","StationName":"SHAWMUT","PlatformOrder":2,"StartOfLine":"TRUE","EndOfLine":"FALSE","Branch":"Ashmont","Direction":"NB","stop_id":"place-smmnl","stop_code":null,"stop_name":"Shawmut Station","stop_desc":null,"stop_lat":42.29312583,"stop_lon":-71.06573796},{"Line":"Red","PlatformKey":"RSHAS","PlatformName":"SHAWMUT SB","StationName":"SHAWMUT","PlatformOrder":15,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Ashmont","Direction":"SB","stop_id":"place-smmnl","stop_code":null,"stop_name":"Shawmut Station","stop_desc":null,"stop_lat":42.29312583,"stop_lon":-71.06573796},{"Line":"Red","PlatformKey":"RASHS","PlatformName":"ASHMONT SB","StationName":"ASHMONT","PlatformOrder":16,"StartOfLine":"FALSE","EndOfLine":"TRUE","Branch":"Ashmont","Direction":"SB","stop_id":"place-asmnl","stop_code":null,"stop_name":"Ashmont Station","stop_desc":null,"stop_lat":42.284652,"stop_lon":-71.064489},{"Line":"Red","PlatformKey":"RNQUN","PlatformName":"NORTH QUINCY NB","StationName":"NORTH QUINCY","PlatformOrder":4,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Braintree","Direction":"NB","stop_id":"place-nqncy","stop_code":null,"stop_name":"North Quincy Station","stop_desc":null,"stop_lat":42.275275,"stop_lon":-71.029583},{"Line":"Red","PlatformKey":"RNQUS","PlatformName":"NORTH QUINCY SB","StationName":"NORTH QUINCY","PlatformOrder":13,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Braintree","Direction":"SB","stop_id":"place-nqncy","stop_code":null,"stop_name":"North Quincy Station","stop_desc":null,"stop_lat":42.275275,"stop_lon":-71.029583},{"Line":"Red","PlatformKey":"RWOLN","PlatformName":"WOLLASTON NB","StationName":"WOLLASTON","PlatformOrder":3,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Braintree","Direction":"NB","stop_id":"place-wlsta","stop_code":null,"stop_name":"Wollaston Station","stop_desc":null,"stop_lat":42.2665139,"stop_lon":-71.0203369},{"Line":"Red","PlatformKey":"RWOLS","PlatformName":"WOLLASTON SB","StationName":"WOLLASTON","PlatformOrder":14,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Braintree","Direction":"SB","stop_id":"place-wlsta","stop_code":null,"stop_name":"Wollaston Station","stop_desc":null,"stop_lat":42.2665139,"stop_lon":-71.0203369},{"Line":"Red","PlatformKey":"RQUCN","PlatformName":"QUINCY CENTER NB","StationName":"QUINCY CENTER","PlatformOrder":2,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Braintree","Direction":"NB","stop_id":"place-qnctr","stop_code":null,"stop_name":"Quincy Center Station","stop_desc":null,"stop_lat":42.251809,"stop_lon":-71.005409},{"Line":"Red","PlatformKey":"RQUCS","PlatformName":"QUINCY CENTER SB","StationName":"QUINCY CENTER","PlatformOrder":15,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Braintree","Direction":"SB","stop_id":"place-qnctr","stop_code":null,"stop_name":"Quincy Center Station","stop_desc":null,"stop_lat":42.251809,"stop_lon":-71.005409},{"Line":"Red","PlatformKey":"RQUAN","PlatformName":"QUINCY ADAMS NB","StationName":"QUINCY ADAMS","PlatformOrder":1,"StartOfLine":"TRUE","EndOfLine":"FALSE","Branch":"Braintree","Direction":"NB","stop_id":"place-qamnl","stop_code":null,"stop_name":"Quincy Adams Station","stop_desc":null,"stop_lat":42.233391,"stop_lon":-71.007153},{"Line":"Red","PlatformKey":"RQUAS","PlatformName":"QUINCY ADAMS SB","StationName":"QUINCY ADAMS","PlatformOrder":16,"StartOfLine":"FALSE","EndOfLine":"FALSE","Branch":"Braintree","Direction":"SB","stop_id":"place-qamnl","stop_code":null,"stop_name":"Quincy Adams Station","stop_desc":null,"stop_lat":42.233391,"stop_lon":-71.007153},{"Line":"Red","PlatformKey":"RBRAS","PlatformName":"BRAINTREE SB","StationName":"BRAINTREE","PlatformOrder":17,"StartOfLine":"FALSE","EndOfLine":"TRUE","Branch":"Braintree","Direction":"SB","stop_id":"place-brntn","stop_code":null,"stop_name":"Braintree Station","stop_desc":null,"stop_lat":42.2078543,"stop_lon":-71.0011385}]';


function init(){
	loc = new google.maps.LatLng(0, -71.0567528);
	options = {
		zoom: 13,
		center: loc,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_div"), options);
	findMe();
	showStations();
}

function findMe(){
	if (navigator.geolocation) { 
		navigator.geolocation.getCurrentPosition(function(position) {
			myLat = position.coords.latitude;
			myLong = position.coords.longitude;
			updateMap();
		});
	}
	else {
		alert("Geolocation is not supported by your web browser.  What year is it?");
	}
}

function updateMap(){
	loc = new google.maps.LatLng(myLat,myLong);
	marker = new google.maps.Marker({
		position: loc,
		title: "myLoc"
	});
	marker.setMap(map);
					// Open info window on click of marker
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(marker.title);
		infowindow.open(map, marker);
	});
	map.panTo(loc);
}

function showStations(){
	data = JSON.parse(stations);
	for (i = 0, len = data.length; i < len; i++){
		console.log(data[i].StationName);
		loc = new google.maps.LatLng(data[i].stop_lat,data[i].stop_lon);
		marker = new google.maps.Marker({
			position: loc,
			title: data[i].StationName
		})
		marker.setMap(map);
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.setContent(marker.title);
			infowindow.open(map, marker);
	});
	}
}

