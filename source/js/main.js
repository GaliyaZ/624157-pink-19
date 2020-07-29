let menuOpen = document.querySelector('.nav__toggle');
let menuNav = document.querySelector('.nav__list');

menuOpen.addEventListener('click', function(evt) {
  menuNav.classList.toggle('visually-hidden');
  menuOpen.classList.toggle('nav__toggle--closed');
  menuOpen.classList.toggle('nav__toggle--opened');
});
