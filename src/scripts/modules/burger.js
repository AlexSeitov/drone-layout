export default function burger(btn, nav, navLink, body) {
  const mobileBtn = document.querySelector(btn);
  const navMenu = document.querySelector(nav);
  const bodyPage = document.querySelector(body);
  const navLinks = document.querySelectorAll(navLink);

  function toggleMenu() {
    mobileBtn.classList.toggle('burger_active');
    navMenu.classList.toggle('nav_active');
    bodyPage.classList.toggle('disable-scroll');
  }

  function closeMenu() {
    mobileBtn.classList.remove('burger_active');
    bodyPage.classList.remove('disable-scroll');
    navMenu.classList.remove('nav_active');
  }

  if (mobileBtn) {
    mobileBtn.addEventListener('click', toggleMenu);
  }

  if (navLinks) {
    navLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

  document.addEventListener('click', (e) => {
    if (e.target.classList == 'disable-scroll') {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  let touchstartX = 0;
  let touchendX = 0;

  function checkDirection() {
    let sum = touchendX - touchstartX;
    if (sum > 100) {
      closeMenu();
    }
  }

  document.addEventListener('touchstart', (e) => {
    touchstartX = e.changedTouches[0].screenX;
  });

  document.addEventListener('touchend', (e) => {
    touchendX = e.changedTouches[0].screenX;
    checkDirection();
  });
}
