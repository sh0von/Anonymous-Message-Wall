var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close-btn")[0];

btn.onclick = function () {
  modal.style.display = "flex";
  modal.classList.add("fadeIn");
  modal.classList.remove("fadeOut");
};

span.onclick = function () {
  modal.classList.add("fadeOut");
  modal.classList.remove("fadeIn");
  // Delay hiding the modal to allow the fade out animation to complete
  setTimeout(function () {
    modal.style.display = "none";
  }, 500); // Adjust the time according to your animation duration
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.add("fadeOut");
    modal.classList.remove("fadeIn");
    // Delay hiding the modal to allow the fade out animation to complete
    setTimeout(function () {
      modal.style.display = "none";
    }, 500); // Adjust the time according to your animation duration
  }
};
        document.addEventListener('DOMContentLoaded', function() {
            var button = document.getElementById('openModalBtn');
            button.classList.add('vibrate');
            setTimeout(function() {
                button.classList.remove('vibrate');
            }, 1000); // Remove vibration effect after 1 second
        });


        document.addEventListener("DOMContentLoaded", function () {
            const mobileMenuBtn = document.getElementById("mobileMenuBtn");
            const mobileMenu = document.getElementById("mobileMenu");
    
            mobileMenuBtn.addEventListener("click", function () {
              mobileMenu.classList.toggle("hidden");
              mobileMenu.classList.toggle("fade-in");
            });
          });