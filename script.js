// Add interactivity as needed, e.g., smooth scrolling, theme toggle, etc.
// Example: Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Reveal cards on scroll
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.card');
  const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.85;
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < trigger) {
        card.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});

// Water drop effect for user name
document.addEventListener('DOMContentLoaded', () => {
  const waterDrop = document.querySelector('.water-drop');
  if (waterDrop) {
    const text = waterDrop.textContent;
    waterDrop.innerHTML = [...text].map((char, i) =>
      `<span>${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');
  }
});

window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.style.display = 'none', 600);
    }
  }, 3000); // 3 seconds
});