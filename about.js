// Initialize the map
var map = L.map('map').setView([6.670515, 3.413232], 13); // Coordinates for Akute, Ogun State

// Add OpenStreetMap tile layer (free, open source)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Add a marker for the location
L.marker([6.670515, 3.413232])
  .addTo(map)
  .bindPopup('<b>Akute, Ogun State</b><br>Located here.')
  .openPopup();

document.addEventListener('DOMContentLoaded', function () {
  // Loop through all dropdown buttons to toggle between hiding and showing its dropdown content
  var dropdown = document.getElementsByClassName('dropdown-btn');
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', function () {
      this.classList.toggle('active');
      var dropdownContent = this.nextElementSibling;

      // Toggle the dropdown visibility
      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
      } else {
        dropdownContent.style.display = 'block';
      }
    });
  }
});
