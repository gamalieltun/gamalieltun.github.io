/* ============================================================
   GAMALIEL TUN — animations.js
   Drop into assets/js/animations.js
   Add <script src="assets/js/animations.js"></script>
   BEFORE </body> on every page
   ============================================================ */

   (function () {
    'use strict';
  
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
    /* ── 1. INJECT SCAN LINE ─────────────────────────────── */
    if (!prefersReduced) {
      var scanLine = document.createElement('div');
      scanLine.className = 'scan-line';
      document.body.appendChild(scanLine);
    }
  
    /* ── 2. CURSOR GLOW ──────────────────────────────────── */
    if (!prefersReduced && window.innerWidth > 768) {
      var glow = document.createElement('div');
      glow.id = 'cursor-glow';
      document.body.appendChild(glow);
  
      var mx = window.innerWidth / 2;
      var my = window.innerHeight / 2;
      var cx = mx, cy = my;
  
      document.addEventListener('mousemove', function (e) {
        mx = e.clientX;
        my = e.clientY;
      });
  
      // Smooth lerp follow
      function lerp(a, b, t) { return a + (b - a) * t; }
  
      function tickGlow() {
        cx = lerp(cx, mx, 0.08);
        cy = lerp(cy, my, 0.08);
        glow.style.left = cx + 'px';
        glow.style.top  = cy + 'px';
        requestAnimationFrame(tickGlow);
      }
      tickGlow();
  
      // Expand glow on hovering interactive elements
      document.addEventListener('mouseover', function (e) {
        if (e.target.closest('a, button, .card')) {
          glow.style.width  = '500px';
          glow.style.height = '500px';
          glow.style.background = 'radial-gradient(circle, rgba(232,57,42,0.1) 0%, transparent 70%)';
        }
      });
      document.addEventListener('mouseout', function (e) {
        if (e.target.closest('a, button, .card')) {
          glow.style.width  = '300px';
          glow.style.height = '300px';
          glow.style.background = 'radial-gradient(circle, rgba(232,57,42,0.06) 0%, transparent 70%)';
        }
      });
    }
  
    /* ── 3. MAGNETIC BUTTONS ─────────────────────────────── */
    if (!prefersReduced && window.innerWidth > 768) {
      document.querySelectorAll('.btn').forEach(function (btn) {
        btn.addEventListener('mousemove', function (e) {
          var rect = btn.getBoundingClientRect();
          var dx = (e.clientX - rect.left - rect.width  / 2) * 0.25;
          var dy = (e.clientY - rect.top  - rect.height / 2) * 0.25;
          btn.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)';
        });
        btn.addEventListener('mouseleave', function () {
          btn.style.transform = '';
        });
      });
    }
  
    /* ── 4. HERO CANVAS — particle field ────────────────── */
    (function () {
      var hero = document.querySelector('.hero');
      if (!hero || prefersReduced) return;
  
      var canvas = document.createElement('canvas');
      canvas.style.cssText = [
        'position:absolute',
        'inset:0',
        'width:100%',
        'height:100%',
        'pointer-events:none',
        'z-index:0',
        'opacity:0.55'
      ].join(';');
      hero.style.position = 'relative';
      hero.insertBefore(canvas, hero.firstChild);
  
      var ctx = canvas.getContext('2d');
      var W, H, particles, lines;
  
      function resize() {
        W = canvas.width  = hero.offsetWidth;
        H = canvas.height = hero.offsetHeight;
      }
      resize();
      window.addEventListener('resize', resize);
  
      // Particle config
      var COUNT = window.innerWidth < 768 ? 40 : 80;
      particles = [];
  
      for (var i = 0; i < COUNT; i++) {
        particles.push({
          x:  Math.random() * W,
          y:  Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r:  Math.random() * 1.5 + 0.5,
          // some red, mostly dim white
          red: Math.random() < 0.15
        });
      }
  
      var LINK_DIST = 120;
      var mx = -999, my = -999;
  
      document.addEventListener('mousemove', function (e) {
        var rect = hero.getBoundingClientRect();
        mx = e.clientX - rect.left;
        my = e.clientY - rect.top;
      });
  
      function draw() {
        ctx.clearRect(0, 0, W, H);
  
        // Update + draw dots
        for (var i = 0; i < particles.length; i++) {
          var p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = W;
          if (p.x > W) p.x = 0;
          if (p.y < 0) p.y = H;
          if (p.y > H) p.y = 0;
  
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = p.red ? 'rgba(232,57,42,0.8)' : 'rgba(240,237,232,0.35)';
          ctx.fill();
        }
  
        // Draw connecting lines
        for (var a = 0; a < particles.length; a++) {
          for (var b = a + 1; b < particles.length; b++) {
            var dx = particles[a].x - particles[b].x;
            var dy = particles[a].y - particles[b].y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < LINK_DIST) {
              var alpha = (1 - dist / LINK_DIST) * 0.18;
              // Red line if either particle is red
              var lineColor = (particles[a].red || particles[b].red)
                ? 'rgba(232,57,42,' + alpha + ')'
                : 'rgba(240,237,232,' + alpha + ')';
              ctx.beginPath();
              ctx.moveTo(particles[a].x, particles[a].y);
              ctx.lineTo(particles[b].x, particles[b].y);
              ctx.strokeStyle = lineColor;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
  
        // Mouse attraction lines
        if (mx > 0 && my > 0) {
          for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
            var dx = p.x - mx;
            var dy = p.y - my;
            var dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 160) {
              var alpha = (1 - dist / 160) * 0.4;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(mx, my);
              ctx.strokeStyle = 'rgba(232,57,42,' + alpha + ')';
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
  
        requestAnimationFrame(draw);
      }
      draw();
    })();
  
    /* ── 5. STAT COUNTER ANIMATION ───────────────────────── */
    (function () {
      var stats = document.querySelectorAll('.stat-num');
      if (!stats.length || prefersReduced) return;
  
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          obs.unobserve(el);
          el.classList.add('counting');
          // Remove class after animation
          setTimeout(function () { el.classList.remove('counting'); }, 600);
        });
      }, { threshold: 0.5 });
  
      stats.forEach(function (el) { obs.observe(el); });
    })();
  
    /* ── 6. CARD 3-D TILT ────────────────────────────────── */
    if (!prefersReduced && window.innerWidth > 768) {
      document.querySelectorAll('.card').forEach(function (card) {
        card.addEventListener('mousemove', function (e) {
          var rect = card.getBoundingClientRect();
          var x = (e.clientX - rect.left) / rect.width  - 0.5;
          var y = (e.clientY - rect.top)  / rect.height - 0.5;
          var tiltX =  y * 6;  // degrees
          var tiltY = -x * 6;
          card.style.transform = 'translateY(-4px) perspective(600px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg)';
        });
        card.addEventListener('mouseleave', function () {
          card.style.transform = '';
          card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        });
        card.addEventListener('mouseenter', function () {
          card.style.transition = 'transform 0.1s ease, box-shadow 0.4s ease, border-color 0.3s ease';
        });
      });
    }
  
    /* ── 7. SECTION TITLE — letter-split stagger ─────────── */
    if (!prefersReduced) {
      document.querySelectorAll('.section-title').forEach(function (el) {
        // Store plain text, split into chars
        var text = el.textContent.trim();
        var html = '';
        for (var i = 0; i < text.length; i++) {
          if (text[i] === ' ') {
            html += ' ';
          } else {
            html += '<span class="char" style="display:inline-block;opacity:0;transform:translateY(20px);transition:opacity 0.4s ease ' + (i * 0.03) + 's,transform 0.4s cubic-bezier(0.16,1,0.3,1) ' + (i * 0.03) + 's">' + text[i] + '</span>';
          }
        }
        el.innerHTML = html;
  
        var obs = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            obs.unobserve(entry.target);
            entry.target.querySelectorAll('.char').forEach(function (c) {
              c.style.opacity = '1';
              c.style.transform = 'translateY(0)';
            });
            entry.target.classList.add('in-view');
          });
        }, { threshold: 0.4 });
  
        obs.observe(el);
      });
    }
  
    /* ── 8. TIMELINE DOT REVEAL (about page) ─────────────── */
    if (!prefersReduced) {
      var tlItems = document.querySelectorAll('.tl-item');
      if (tlItems.length) {
        var tlObs = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              tlObs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.2 });
        tlItems.forEach(function (el) { tlObs.observe(el); });
      }
    }
  
  })();