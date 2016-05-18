var map = document.getElementById('map');
function getlocation () {
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(show_pos);
	} else {
		map.innerHTML = "Geolocation not supported";
	}
}
function show_pos(position) {
	var imgUrl = "http://maps.googleapis.com/maps/api/staticmap?center="+position.coords.latitude+","+position.coords.longitude+"&sensor=true&zoom=14&size=500x500";
	map.innerHTML = "<img src='" + imgUrl + "'/>";
}