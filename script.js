function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

document.addEventListener('DOMContentLoaded', () => {
  typeWriter(document.querySelector('.typing-title'), '¡Hola! Soy Agustín');
  typeWriter(document.querySelector('.typing-effect'), 'AGUSTÍN.DEV', 150);
});

window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.querySelector('.loader');
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
  }, 2000);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});