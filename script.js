// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Add dynamic text functionality for the Holistic Healing section
  const healingImage = document.querySelector(".holistic-healing .image");
  const dynamicText = document.createElement("div");
  dynamicText.classList.add("dynamic-text");
  dynamicText.textContent = "Heal Together, Find Peace";

  // Append the dynamic text to the healing image
  healingImage.appendChild(dynamicText);

  // Smooth scroll functionality for buttons
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetSection = document.querySelector(".holistic-healing");
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});



// Add fade-in effect when the section is in view
document.addEventListener("DOMContentLoaded", () => {
  const healingSection = document.querySelector(".holistic-healing");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          healingSection.style.opacity = 1;
          healingSection.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  healingSection.style.opacity = 0;
  healingSection.style.transform = "translateY(50px)";
  observer.observe(healingSection);
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

// Function to detect if the section is visible in the viewport
function revealOnScroll() {
const sections = document.querySelectorAll('.dynamic-section');
sections.forEach((section) => {
  const rect = section.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    section.classList.add('visible');
  }
});
}

// Attach the scroll event listener
window.addEventListener('scroll', revealOnScroll);

// Initial check in case the section is already in view
document.addEventListener('DOMContentLoaded', revealOnScroll);




const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

// Optional: Auto-play
setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}, 5000);
