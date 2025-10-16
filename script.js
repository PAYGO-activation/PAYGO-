// ...existing code ...
document.querySelector('.cta')?.addEventListener('click', () => {
  const btn = document.querySelector('.cta');
  btn.disabled = true;
  btn.textContent = 'Activating...';
  setTimeout(() => {
    window.location.href = 'activation.html';
  }, 5000);
});
// ...existing code ...