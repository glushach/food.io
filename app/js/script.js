window.addEventListener('DOMContentLoaded', () => {
  const menuItem = document.querySelectorAll('.menu__list'),
  hamburger = document.querySelectorAll('.hamburger');

  hamburger.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('hamburger-active');
      menuItem.forEach(item => {
        item.classList.toggle('menu__list-active');
      });
    });
  });
});

