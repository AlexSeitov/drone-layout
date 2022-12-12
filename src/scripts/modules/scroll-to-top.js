const toTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    toTopBtn.classList.add('active');
  } else {
    toTopBtn.classList.remove('active');
  }
});
