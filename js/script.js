'use strict';

// ── BLOG DATA ──────────────────────────────────────────────
const blogPosts = [
  {
    tag: 'AI',
    title: 'Jak AI mění PPC kampaně v roce 2026',
    perex: 'Smart Bidding, Performance Max, generativní reklamní texty — umělá inteligence pronikla do každého koutu Google Ads. Kde AI pomáhá a kde stále potřebujete zkušeného člověka za volantem?',
    date: '20. května 2026',
    url: 'blog/ai-v-ppc-kampanich.html',
  },
  {
    tag: 'PPC',
    title: 'Performance Max: 5 věcí, které vám nikdo neřekl',
    perex: 'Performance Max kampaně jsou výkonné, ale i záludné. Po dvou letech práce s PMax jsem nasbírala tipy, které v žádném návodu nenajdete.',
    date: '5. května 2026',
    url: 'blog/performance-max.html',
  },
  {
    tag: 'PPC',
    title: 'DemandGen kampaně: nástupce Discovery, který stojí za pozornost',
    perex: 'Google nahradil Discovery kampaně novým formátem DemandGen — s video assety, širším inventářem a lepší kontrolou nad publikem. Kdy ho zařadit do mediamixu?',
    date: '18. dubna 2026',
    url: 'blog/demandgen-kampane.html',
  },
];

// ── RENDER BLOG CARDS ─────────────────────────────────────
function renderBlogCards() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;

  grid.innerHTML = blogPosts.map(post => `
    <article class="blog-card">
      <span class="blog-card__tag">${post.tag}</span>
      <h3 class="blog-card__title">
        <a href="${post.url}">${post.title}</a>
      </h3>
      <p class="blog-card__perex">${post.perex}</p>
      <div class="blog-card__footer">
        <time class="blog-card__date">${post.date}</time>
        <a href="${post.url}" class="blog-card__link">Číst více →</a>
      </div>
    </article>
  `).join('');
}

// ── SMOOTH SCROLL ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderBlogCards();

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
