function initMap() {
    // Map options
    const options = {
      zoom: 12,
      center: { lat: 6.655413354732172, lng: 3.195698556299673 }, // Akute, Ogun State
    };
  
    // Create a new map and attach it to the div with id="map"
    const map = new google.maps.Map(document.getElementById("map"), options);
  }
  
  // Load the Google Maps script dynamically
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
  script.async = true;
  document.body.appendChild(script);
  