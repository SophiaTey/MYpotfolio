const burger = document.getElementById('burger');
const nav = document.getElementById('nav-menu');
const links = document.querySelectorAll('.mobile-menu .links');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});

// Закрываем при клике на ссылку
links.forEach((link) => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('active');
  });
});
