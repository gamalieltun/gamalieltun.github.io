// main.js
// Handles mobile nav toggle + footer year

(function () {
    const navToggle = document.getElementById("navToggle");
    const siteNav = document.getElementById("siteNav");
    const yearSpan = document.getElementById("year");
  
    // Set footer year
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  
    // Mobile nav toggle
    if (navToggle && siteNav) {
      navToggle.addEventListener("click", function () {
        const isOpen = siteNav.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
  
      // Close menu when clicking a link (mobile UX)
      siteNav.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
          siteNav.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    }
    // === Scroll reveal for "What I Do" cards ===
document.addEventListener("DOMContentLoaded", function () {
  const whatCards = document.querySelectorAll("#what-i-do .card");
  if (!whatCards.length) return;

  // If user prefers reduced motion, show everything without animation
  const prefersReducedMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    whatCards.forEach(card => {
      card.classList.remove("reveal-card");
      card.classList.add("visible");
    });
    return;
  }

  // Prepare cards with initial hidden state
  whatCards.forEach(card => {
    card.classList.add("reveal-card");
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Once visible, stop observing this card
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  whatCards.forEach(card => observer.observe(card));
});

  })();
  