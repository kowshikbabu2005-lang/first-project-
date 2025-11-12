// Simple JS for toggling theme and fake contact handler
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('themeBtn');
  btn?.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? '' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('site-theme', theme);
  });
  // restore theme
  const saved = localStorage.getItem('site-theme');
  if(saved) document.documentElement.setAttribute('data-theme', saved);

  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.getElementById('status');
      status.textContent = 'Message sent (pretend).';
      form.reset();
    });
  }
});
