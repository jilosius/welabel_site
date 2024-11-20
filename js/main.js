
// Code to get the header and add the active class to the current page

fetch("components/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    // Now that the header is loaded, we can add the active class
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
    if (currentPath == "") navLinks[0].classList.add("active");
  });


// Code to get the footer

fetch("components/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

// code for the counter

// document.addEventListener('DOMContentLoaded', () => {
//   const targetNumber = 1000; // Target number to count up to
//   const counterElement = document.getElementById('counter');
//   let currentNumber = 0;

//   const incrementCounter = () => {
//     if (currentNumber < targetNumber) {
//       currentNumber++;
//       counterElement.textContent = currentNumber;
//       setTimeout(incrementCounter, 0.5); // Adjust speed here
//     }
//   };

//   incrementCounter();
// });




// code for flow in animation
// Select the image element with the 'flow-in' class
const image = document.querySelector(".flow-in-left");

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add the 'active' class to all icons when the group is visible
            document.querySelectorAll(".flow-in-left").forEach((icon) => {
                icon.classList.add("active");
            });
        } else {
            // Remove the 'active' class to reset animation when the group is not visible
            document.querySelectorAll(".flow-in-left").forEach((icon) => {
                icon.classList.remove("active");
            });
        }
    });
}, { threshold: 0.5 }); // Adjust threshold as needed

// Observe the image
observer.observe(image);

// Select the wrapper element for the icons
const iconGroup = document.querySelector(".icon-group");

// Create an Intersection Observer for the icon group
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add the 'active' class to all icons when the group is visible
            document.querySelectorAll(".flow-in-up, .flow-in-down, .flow-in-diagonal").forEach((icon) => {
                icon.classList.add("active");
            });
        } else {
            // Remove the 'active' class to reset animation when the group is not visible
            document.querySelectorAll(".flow-in-up, .flow-in-down, .flow-in-diagonal").forEach((icon) => {
                icon.classList.remove("active");
            });
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the group is visible

// Observe the icon group
observer2.observe(iconGroup);
