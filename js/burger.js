function burger() {
  const burger = document.querySelector('[data-burger]');
  const nav = document.querySelector('[data-nav]');
  const header = document.querySelector('.header');
  const body = document.body;
  const navItems = document.querySelectorAll('.nav__list');

  let headerHeight = header.offsetHeight;
  document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

  console.log();

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
    burger.classList.toggle('burger--active');
    body.classList.toggle('stop-scroll');
    header.classList.toggle('secondary');
  });

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      nav.classList.remove('nav--visible');
      burger.classList.remove('burger--active');
      body.classList.remove('stop-scroll');
      header.classList.remove('secondary');
    });
  });
}

burger();