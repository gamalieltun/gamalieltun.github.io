/* ============================================================
   MAIN.JS — Gamaliel Tun
   Nav toggle · Scroll reveals · Timeline reveals
   ============================================================ */
(function () {
  'use strict';

  var toggle = document.getElementById('navToggle');
  var nav    = document.getElementById('siteNav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  if ('IntersectionObserver' in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) { revealObs.observe(el); });

    var tlObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          tlObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.tl-item').forEach(function (el) { tlObs.observe(el); });
  } else {
    document.querySelectorAll('.reveal, .tl-item').forEach(function (el) { el.classList.add('visible'); });
  }

})();