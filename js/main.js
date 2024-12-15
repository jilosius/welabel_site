
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

    // Initialize "Back to Top" functionality after the footer is loaded
    initializeBackToTopButton();
  })
  .catch((error) => console.error("Error loading footer:", error));

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


// Back to top button
// Function to initialize "Back to Top" button functionality
function initializeBackToTopButton() {
  const backToTopButton = document.getElementById("backToTop");

  if (!backToTopButton) {
    console.error("Back to Top button not found!");
    return;
  }

  // Show/hide the button based on scroll position
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      backToTopButton.style.display = "flex";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Scroll to the top when the button is clicked
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  console.log("Back to Top button initialized!");
}




// // Select the image element with the 'flow-in-left' class
// const image = document.querySelector(".flow-in-left");

// if (image) {
//   // Only create an Intersection Observer if the image exists
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // Add the 'active' class to all icons when the group is visible
//         document.querySelectorAll(".flow-in-left").forEach((icon) => {
//           icon.classList.add("active");
//         });
//       } else {
//         // Remove the 'active' class to reset animation when the group is not visible
//         document.querySelectorAll(".flow-in-left").forEach((icon) => {
//           icon.classList.remove("active");
//         });
//       }
//     });
//   }, { threshold: 0.5 }); // Adjust threshold as needed

//   // Observe the image
//   observer.observe(image);
// }

// // Select the wrapper element for the icons
// const iconGroup = document.querySelector(".icon-group");

// if (iconGroup) {
//   // Only create an Intersection Observer if the icon group exists
//   const observer2 = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // Add the 'active' class to all icons when the group is visible
//         document.querySelectorAll(".flow-in-up, .flow-in-down, .flow-in-diagonal").forEach((icon) => {
//           icon.classList.add("active");
//         });
//       } else {
//         // Remove the 'active' class to reset animation when the group is not visible
//         document.querySelectorAll(".flow-in-up, .flow-in-down, .flow-in-diagonal").forEach((icon) => {
//           icon.classList.remove("active");
//         });
//       }
//     });
//   }, { threshold: 0.5 }); // Trigger when 50% of the group is visible

//   // Observe the icon group
//   observer2.observe(iconGroup);
// }


// // Observe the icon group
// observer2.observe(iconGroup); // may need to move this to the about page code
// Function to handle the intersection and animation
const createObserver = (element, animationClass) => {
  if (element) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.classList.add(animationClass);
        } 
      });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    observer.observe(element);
  }
};

// Observe each element independently
document.querySelectorAll(".flow-in-left").forEach((element) => {
  createObserver(element, "active");
});

document.querySelectorAll(".flow-in-up").forEach((element) => {
  createObserver(element, "active");
});

document.querySelectorAll(".flow-in-down").forEach((element) => {
  createObserver(element, "active");
});

document.querySelectorAll(".flow-in-diagonal").forEach((element) => {
  createObserver(element, "active");
});

document.querySelectorAll(".flow-in-right").forEach((element) => {
  createObserver(element, "active");
});





// flow-in-sequential
// Select all elements with the class .flow-in-sequential
const elements = document.querySelectorAll(".flow-in-sequential");

if (elements.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the 'active' class with a staggered delay for each element
        const index = [...elements].indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add("active");
        }, index * 100); // 250ms delay for each element, adjust as needed
      } else {
        // Remove the 'active' class to reset animation when the element is not visible
        entry.target.classList.remove("active");
      }
    });
  }, { threshold: 0.5 });

  // Observe each element individually
  elements.forEach((element) => {
    observer.observe(element);
  });
}


// Initialize and add the map
// let map;

// async function initMap() {
//   // The location of Uluru
//   const position = { lat: -25.344, lng: 131.031 };
//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
//   map = new Map(document.getElementById("map"), {
//     zoom: 4,
//     center: position,
//     mapId: "DEMO_MAP_ID",
//   });

//   // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: position,
//     title: "Uluru",
//   });
// }

// initMap();


// // The location of Uluru
// const position = { lat: -25.344, lng: 131.031 };
// // Request needed libraries.
// //@ts-ignore
// const { Map } = await google.maps.importLibrary("maps");
// const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

// // The map, centered at Uluru
// map = new Map(document.getElementById("map"), {
//   zoom: 4,
//   center: position,
//   mapId: "DEMO_MAP_ID",
// });




