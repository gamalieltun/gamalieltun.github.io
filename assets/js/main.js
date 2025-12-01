// main.js
// Handles mobile nav toggle + footer year + scroll animations

(function () {
  const navToggle = document.getElementById("navToggle");
  const siteNav = document.getElementById("siteNav");
  const yearSpan = document.getElementById("year");

  // ============================
  // 1. Set footer year
  // ============================
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ============================
  // 2. Mobile nav toggle
  // ============================
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = siteNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close menu when clicking a link
    siteNav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        siteNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ============================
  // 3. WHAT I DO – Scroll Reveal
  // ============================
  function initWhatIDoReveal() {
    const cards = document.querySelectorAll("#what-i-do .card");
    if (!cards.length) return;

    // Add initial "hidden" state
    cards.forEach(card => card.classList.add("reveal-card"));

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // If reduced motion or IntersectionObserver unsupported → show instantly
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      cards.forEach(card => card.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target); // Animate only once
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    cards.forEach(card => observer.observe(card));
  }

  // Run animation after DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWhatIDoReveal);
  } else {
    initWhatIDoReveal();
  }

})();
