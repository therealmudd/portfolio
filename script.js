// Get all section IDs and nav links
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".navbar a");

// Function to remove 'active' class from all nav links
const removeActive = () => {
  navLinks.forEach(link => link.classList.remove("active"));
};

// Function to set 'active' class based on scroll position
const setActiveNav = () => {
  let currentSection = null;

  // Determine which section is closest to the top
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 100) { // Adjust offset as needed
      currentSection = section.getAttribute("id");
    }
  });

  // Update active class on nav links
  removeActive();
  navLinks.forEach(link => {
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });

  // Update the browser's URL to reflect the current section
  if (currentSection) {
    const currentURL = new URL(window.location);
    currentURL.hash = `#${currentSection}`;
    history.replaceState(null, '', currentURL.toString()); // Replaces the current history entry without reloading
  }
  else{
    history.replaceState(null, '', window.location.pathname);
  }
};

// Listen for scroll events to update active nav link
window.addEventListener("scroll", setActiveNav);
