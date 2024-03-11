document.addEventListener('DOMContentLoaded', function() {
    // Your existing JavaScript code here
  
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-popup');
    
    function showPopup() {
      popup.style.display = 'block'; // Make the popup visible
    }
    
    function closePopup() {
      popup.style.display = 'none'; // Hide the popup
    }
    
    // Optional: Show the popup after a delay (can be adjusted or removed)
    setTimeout(showPopup, 3000);
    
    // Add event listener to close button for click events
    closeBtn.addEventListener('click', closePopup);
  
  

  
  });
  
  
  