
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

