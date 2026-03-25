/* ============================================================
   1. NAVEGAÇÃO LATERAL (HIGHLIGHT)
   ============================================================ */
const links = document.querySelectorAll('.nav-lateral__item');
const secoes = document.querySelectorAll('section[id], footer[id]');

const observerNav = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;

      links.forEach((link) => {
        link.classList.remove('is-active');
        const href = link.getAttribute('href');
        if (href === `#${id}`) {
          link.classList.add('is-active');
        }
      });
    }
  });
}, {
  root: null,
  threshold: 0.4
});

secoes.forEach((secao) => observerNav.observe(secao));

/* ============================================================
   2. EFEITO POLAROID (ROTAÇÃO ALEATÓRIA)
   ============================================================ */
const cards = document.querySelectorAll('.polaroid');
cards.forEach((card, index) => {
  const rotacao = index % 2 === 0 ? '-1.5deg' : '1.2deg';
  card.style.setProperty('--rot', rotacao);
});

/* ============================================================
   3. CARROSSEL AUTOMÁTICO
   ============================================================ */
const carrossel = document.querySelector('.carrossel');
let intervalo;

function iniciarAutoScroll() {
  intervalo = setInterval(() => {
    const cardWidth = carrossel.querySelector('.polaroid').offsetWidth + 16; 
    const scrollFim = carrossel.scrollWidth - carrossel.clientWidth;

    if (carrossel.scrollLeft >= scrollFim - 10) {
      carrossel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      carrossel.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  }, 3500);
}

carrossel.addEventListener('mouseenter', () => clearInterval(intervalo));
carrossel.addEventListener('mouseleave', iniciarAutoScroll);
carrossel.addEventListener('touchstart', () => clearInterval(intervalo));
carrossel.addEventListener('touchend', iniciarAutoScroll);

iniciarAutoScroll();
