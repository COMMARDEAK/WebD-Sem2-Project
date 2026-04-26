// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Animate skill bars when they come into view
const fills = document.querySelectorAll('.bar-fill');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.w;
    }
  });
}, { threshold: 0.4 });

fills.forEach(fill => observer.observe(fill));

// Contact form submit
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formMsg').textContent = '✓ Message sent! I\'ll get back to you soon.';
  this.reset();
  setTimeout(() => document.getElementById('formMsg').textContent = '', 4000);
});