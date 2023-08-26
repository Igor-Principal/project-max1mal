(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };



  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

(() => {
  const burgerBtn = document.querySelector('.burger-btn');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const headerLock = document.querySelector('.header-lock');

  const heroSection = document.querySelector('.hero-section');

  

  burgerBtn.addEventListener('click', () => {
    let expanded = burgerBtn.getAttribute('aria-expanded') === 'true' || 'false';
    headerLock.classList.toggle('header-lock-active');
  });

  closeMenuBtn.addEventListener('click', () => {
    let expanded = burgerBtn.getAttribute('aria-expanded') === 'true' || 'false';
    headerLock.classList.toggle('header-lock');
  })


  burgerBtn.addEventListener('click', () => {
    let expanded = heroSection.getAttribute('aria-expanded') === 'true' || 'false';
    heroSection.classList.toggle('hero-section-active');
  })
  
})();