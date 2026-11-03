(function () {
  'use strict';

  var header = document.getElementById('header');
  var hamburger = document.getElementById('hamburger');
  var nav = document.getElementById('nav');

  /* Header muda ao rolar */
  function onScroll() {
    if (window.scrollY > 12) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Menu hambúrguer (mobile) */
  function closeMenu() {
    nav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Abrir menu');
  }

  function toggleMenu() {
    var isOpen = nav.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  }

  hamburger.addEventListener('click', toggleMenu);

  /* Carrossel de depoimentos (setas ‹ › + dots) */
  var track = document.getElementById('testimonialsTrack');
  var prevBtn = document.getElementById('testimonialPrev');
  var nextBtn = document.getElementById('testimonialNext');
  var dotsEl = document.getElementById('testimonialsDots');

  if (track) {
    var cards = Array.prototype.slice.call(track.querySelectorAll('.testimonial'));

    function cardStep() {
      var card = track.querySelector('.testimonial');
      if (!card) return 0;
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return card.getBoundingClientRect().width + gap;
    }

    function scrollByCard(direction) {
      track.scrollBy({ left: cardStep() * direction, behavior: 'smooth' });
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { scrollByCard(-1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { scrollByCard(1); });

    if (dotsEl && cards.length > 1) {
      var dots = cards.map(function (card, index) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'testimonials-dots__btn';
        dot.setAttribute('aria-label', 'Ir para o depoimento ' + (index + 1));
        dot.addEventListener('click', function () {
          track.scrollTo({ left: cardStep() * index, behavior: 'smooth' });
        });
        dotsEl.appendChild(dot);
        return dot;
      });

      function updateActiveDot() {
        var step = cardStep();
        var active = step ? Math.round(track.scrollLeft / step) : 0;
        dots.forEach(function (dot, index) {
          dot.classList.toggle('is-active', index === active);
        });
      }

      updateActiveDot();
      track.addEventListener('scroll', function () {
        window.requestAnimationFrame(updateActiveDot);
      }, { passive: true });
      window.addEventListener('resize', updateActiveDot);
    }
  }

  nav.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  /* Fade-in ao rolar (respeita prefers-reduced-motion) */
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }
})();
