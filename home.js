// side navbar dropdown box
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

//   Carousel
document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = new bootstrap.Carousel(document.querySelector('#myCarousel'), {
      interval: 2000,  // Controls the duration of each slide in milliseconds
      ride: 'carousel' // Auto start the carousel
    });
  });
  