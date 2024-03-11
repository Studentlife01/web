document.addEventListener('DOMContentLoaded', function() {
    // Your existing JavaScript code here
  
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-popup');
    
    function showPopup() {
      //popup.style.display = 'block'; // Make the popup visible
    }
    
    function closePopup() {
      popup.style.display = 'none'; // Hide the popup
    }
    
    // Optional: Show the popup after a delay (can be adjusted or removed)
    setTimeout(showPopup, 3000);
    
    // Add event listener to close button for click events
    closeBtn.addEventListener('click', closePopup);
  
  

  
  });
  
  //slider

  window.onload = function() {
    var imgs = document.querySelectorAll('.slider img');
    var dots = document.querySelectorAll('.dot');
    var currentImg = 0;
    const interval = 3000;
  
    function changeSlide(n) {
      for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace(' active', '');
      }
  
      currentImg = n;
  
      imgs[currentImg].style.opacity = 1;
      dots[currentImg].className += ' active';
    }
  
    changeSlide(currentImg);
  
    var timer = setInterval(function() {
      currentImg = (currentImg + 1) % imgs.length;
      changeSlide(currentImg);
    }, interval);
  
    for (var i = 0; i < dots.length; i++) {
      dots[i].addEventListener('click', function() {
        for (var j = 0; j < dots.length; j++) {
          if (dots[j] === this) {
            changeSlide(j);
            clearInterval(timer);
            timer = setInterval(function() {
              currentImg = (currentImg + 1) % imgs.length;
              changeSlide(currentImg);
            }, interval);
          }
        }
      });
    }
  };
  
  //event//////////////////////////////
  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.nav-menu').classList.toggle('active');
});