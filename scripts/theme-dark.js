const headerDark = document.querySelector(".header__menu");
const footerDark = document.querySelector(".footer");
const footerBtnDark = footerDark.querySelector(".footer__button");
const footerBtnWrapperDark = footerDark.querySelector(".footer__button-wrapper");
const footerTitle = footerDark.querySelector(".footer__title");
const headerLink = document.querySelectorAll(".header__link");
const headerTitle = document.querySelector(".header__title");
const headerDescription = document.querySelector(".header__description");
const headerText = document.querySelector(".header__text");
const merksQuote = document.querySelector(".merks__quote");
const merksAuthor = document.querySelector(".merks__author");
const merksDescription = document.querySelector(".merks__description");
const coverageSliderBtn = document.querySelectorAll(".coverage__slider-button");
const bicyclesTitle = document.querySelector(".bicycles__title");
const bicyclesDesc = document.querySelectorAll(".bicycles__desc");
const bicycleLink = document.querySelectorAll(".bicycles__link");
const trainingsTitle = document.querySelector(".trainings__title");
const trainingsDescription = document.querySelector(".trainings__description");
const trainingsLink = document.querySelectorAll(".trainings__link");
const footerEmail = document.querySelector(".footer__email");
const footerSubmit = document.querySelector(".footer__submit");
const headerMenuWrapper = document.querySelector(".header__menu-wrapper");
const headerBtnDark = document.querySelector(".header__theme-button");
const headerCloseBtnDark = document.querySelector(".header__close-button");
const headerMenuBtnDark = document.querySelector(".header__menu-button");
const coverageTitle = document.querySelectorAll(".coverage__title");
const coverageDescription = document.querySelectorAll(".coverage__description");

//Функция добавления или удаление класса темной темы в зависимости от состояния
function applyTheme() {
  document.body.classList.toggle(`page_theme-dark`);
  headerDark.classList.toggle(`header__menu_theme-dark`);
  footerDark.classList.toggle(`footer_theme-dark`);
  footerBtnDark.classList.toggle(`footer__button_theme-dark`);
  footerBtnWrapperDark.classList.toggle(`footer__button-wrapper_theme-dark`);
  footerTitle.classList.toggle(`footer__title_theme-dark`);
  headerLink.forEach((item) => {
    item.classList.toggle(`header__link_theme-dark`);
  });
  headerTitle.classList.toggle(`header__title_theme-dark`);
  headerDescription.classList.toggle(`header__description_theme-dark`);
  headerText.classList.toggle(`header__text_theme-dark`);
  merksQuote.classList.toggle(`merks__quote_theme-dark`);
  merksAuthor.classList.toggle(`merks__author_theme-dark`);
  merksDescription.classList.toggle(`merks__description_theme-dark`);
  coverageSliderBtn.forEach((item) => {
    item.classList.toggle(`coverage__slider-button_theme-dark`);
  });
  bicyclesTitle.classList.toggle(`bicycles__title_theme-dark`);
  bicyclesDesc.forEach((item) => {
    item.classList.toggle(`bicycles__desc_theme-dark`);
  });
  bicycleLink.forEach((item) => {
    item.classList.toggle(`bicycle__link_theme-dark`);
  });
  trainingsTitle.classList.toggle(`trainings__title_theme-dark`);
  trainingsDescription.classList.toggle(`trainings__description_theme-dark`);
  trainingsLink.forEach((item) => {
    item.classList.toggle(`trainings__link_theme-dark`);
  });
  footerSubmit.classList.toggle(`footer__submit_theme-dark`);
  footerEmail.classList.toggle(`footer__email_theme-dark`);
  headerMenuWrapper.classList.toggle(`header__menu-wrapper_dark-theme`);
  headerBtnDark.classList.toggle(`header__theme-button_theme-dark`);
  headerCloseBtnDark.classList.toggle(`header__close-button_theme-dark`);
  headerMenuBtnDark.classList.toggle(`header__menu-button_dark-theme`);

  coverageDescription.forEach((item) => {
    item.classList.toggle(`coverage__description_theme-dark`);
  });
  coverageTitle.forEach((item) => {
    item.classList.toggle(`coverage__title_theme-dark`);
  });
}

//Слушатели нажатия кнопок переключения темы
document.querySelector(".footer__button").addEventListener("click", function () {
  applyTheme();
});
document.querySelector(".header__theme-button").addEventListener("click", function () {
  applyTheme();
});
