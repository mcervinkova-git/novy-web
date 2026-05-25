'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // Smooth scroll pro navigační odkazy
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Formulář — odeslání
  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      btn.textContent = 'Odesláno ✓';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Odeslat zprávu';
        btn.disabled = false;
        form.reset();
      }, 3000);
    });
  }

});
