function scrollToTop() {
  const scrollTop = document.querySelector('.scroll-top');
  const offset = 1000;

  function getTop() {
    return window.pageYOffset;
  }

  window.addEventListener('scroll', () => {

    if (getTop() > offset) {
      scrollTop.classList.add('scroll-top--visible');
    } else {
      scrollTop.classList.remove('scroll-top--visible');
    }
  });

  scrollTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

}

scrollToTop();