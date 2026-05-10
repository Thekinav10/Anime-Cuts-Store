function showToast(name) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = name + ' is downloading...';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// Smooth nav highlight on scroll
const sections = document.querySelectorAll('[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) cur = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--white)' : '';
  });
});
