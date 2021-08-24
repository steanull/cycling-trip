const headerMenuBtn = document.querySelector('.header__menu-button');
const headerMenuCloseBtn = document.querySelector('.header__close-button');
const headerMenu = document.querySelector('.header__menu-wrapper');

//Открытие и закрытие Гамбургера
headerMenuBtn.addEventListener('click', function () {
  headerMenu.classList.add('header__menu-wrapper_opened');
})
headerMenuCloseBtn.addEventListener('click', function () {
  headerMenu.classList.remove('header__menu-wrapper_opened');
})
