// ===== Mobile Menu Toggle =====
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// ===== Hero Button Interaction =====
const heroButton = document.querySelector('.hero__content .button');

if (heroButton) {
  heroButton.addEventListener('click', (event) => {
    event.preventDefault();
    // Smooth scroll to projects section
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
  });
}

// ===== Scroll Animation (simple fade-in) =====
const fadeElements = document.querySelectorAll('.about, .projects, .contact');

function checkFadeIn() {
  const triggerBottom = window.innerHeight * 0.8;

  fadeElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkFadeIn);
checkFadeIn(); // trigger once on load
