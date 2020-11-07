window.addEventListener('DOMContentLoaded', () => {
  const menuItem = document.querySelector('.menu__list'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger-active');
      menuItem.classList.toggle('menu__list-active');
  });
});