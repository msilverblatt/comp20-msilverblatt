var myLat = 0;
var myLong = 0;
var map;
var marker;
var loc;

				// This is a global info window...
var infowindow = new google.maps.InfoWindow();


function init(){
	loc = new google.maps.LatLng(0, -71.0567528);
	options = {
		zoom: 13,
		center: loc,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_div"), options);
	findMe();
	//marker = new google.maps.Marker({
	//				position: loc,
	//				title: "Faneuil Hall, Boston, MA"
	//			});
	//marker.setMap(map);
	console.log("hellow");
	//marker.setMap(map);



//	renderMap();


	
	
}

function findMe(){
	if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
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