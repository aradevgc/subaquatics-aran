const cards = Array.from(document.querySelectorAll('.project-card'));
const previewTitle = document.getElementById('preview-title');
const previewDescription = document.getElementById('preview-description');

const setActiveCard = (activeCard) => {
  cards.forEach((card) => {
    card.classList.toggle('active', card === activeCard);
  });

  if (previewTitle && previewDescription && activeCard) {
    previewTitle.textContent = activeCard.dataset.title || 'Project';
    previewDescription.textContent = activeCard.dataset.description || 'A refined digital experience.';
  }
};

cards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 80}ms`;
  card.addEventListener('mouseenter', () => setActiveCard(card));
  card.addEventListener('focus', () => setActiveCard(card));
  card.addEventListener('click', () => setActiveCard(card));
});

if (cards.length) {
  setActiveCard(cards[0]);
}
