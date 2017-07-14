// MAP
function initMap() {
	// Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 50.5097738, lng: 30.5000318},
		scrollwheel: false,
		zoom: 16
    });
	}