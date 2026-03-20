const links = document.querySelectorAll('.nav-lateral__item');
const secoes = document.querySelectorAll('section[id], footer[id]');

const observer = new IntersectionObserver((entries) => {
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
  threshold: 0.35
});

secoes.forEach((secao) => observer.observe(secao));

// pequeno efeito para deixar alguns cartões do carrossel levemente "vivos"
const cards = document.querySelectorAll('.polaroid');
cards.forEach((card, index) => {
  const rotacao = index % 2 === 0 ? '-1.5deg' : '1.2deg';
  card.style.setProperty('--rot', rotacao);
});

