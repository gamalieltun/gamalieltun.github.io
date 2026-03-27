// main.js — mobile nav toggle + footer year
// No scroll listeners, no parallax, no double observers

(function () {
  'use strict';

  // ── Footer year ─────────────────────────────
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Mobile nav toggle ────────────────────────
  var navToggle = document.getElementById('navToggle');
  var siteNav   = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close when any nav link is tapped
    siteNav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!siteNav.contains(e.target) && !navToggle.contains(e.target)) {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ── Scroll reveal (shared utility) ──────────
  // Only runs if IntersectionObserver is available and
  // the inline page script hasn't already set things up.
  // We use a flag on window to avoid double-observing.
  if (!window._revealObserverInit && 'IntersectionObserver' in window) {
    window._revealObserverInit = true;

    var revealObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target); // animate once only
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    var titleObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add('in-view');
      });
    }, { threshold: 0.3 });

    // Observe cards that exist at load time
    document.querySelectorAll('.reveal-card').forEach(function (el) {
      revealObs.observe(el);
    });

    document.querySelectorAll('.section-title').forEach(function (el) {
      titleObs.observe(el);
    });

  } else if (!('IntersectionObserver' in window)) {
    // Instant fallback for old browsers
    document.querySelectorAll('.reveal-card').forEach(function (el) {
      el.classList.add('visible');
    });
    document.querySelectorAll('.section-title').forEach(function (el) {
      el.classList.add('in-view');
    });
  }

})();