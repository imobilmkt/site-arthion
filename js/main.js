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

  /* Carrossel de depoimentos (setas ‹ ›) */
  var track = document.getElementById('testimonialsTrack');
  var prevBtn = document.getElementById('testimonialPrev');
  var nextBtn = document.getElementById('testimonialNext');

  if (track && prevBtn && nextBtn) {
    function scrollByCard(direction) {
      var card = track.querySelector('.testimonial');
      if (!card) return;
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      var amount = (card.getBoundingClientRect().width + gap) * direction;
      track.scrollBy({ left: amount, behavior: 'smooth' });
    }

    prevBtn.addEventListener('click', function () { scrollByCard(-1); });
    nextBtn.addEventListener('click', function () { scrollByCard(1); });
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
