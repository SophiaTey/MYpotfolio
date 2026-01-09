const burger = document.getElementById('burger');
const nav = document.getElementById('nav-menu');
const close = document.getElementById('close');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Открыть меню
burger.addEventListener('click', () => {
  nav.classList.add('active');
});

// Закрыть меню через кнопку Х
close.addEventListener('click', () => {
  nav.classList.remove('active');
});

// Закрыть меню при клике на любую ссылку
mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});
