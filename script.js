let burger = document.getElementById('burger-menu');
let nav = document.getElementById('menu');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});