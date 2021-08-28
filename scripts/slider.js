const tabsBtn = document.querySelectorAll('.bicycles__link');
const tabsContentBicycles = document.querySelectorAll('.slider');
const tabsContentCoverage = document.querySelectorAll('.coverage');

//Добавление класса active нажатой ссылке
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('bicycles__link')) {
    const tabsPath = e.target.dataset.tabsPath;
    tabsBtn.forEach(el => {
      el.classList.remove('bicycles__link_active')
    });
    document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('bicycles__link_active');
    tabsHandler(tabsPath);
  }

  //Функционал кнопки "назад"
  if (e.target.classList.contains('coverage__slider-button_prev')) {
    let activeBtn = document.querySelector('.bicycles__link_active');
    let activeParent = activeBtn.closest('.bicycles__menu-item');
    let previousParent = activeParent.previousElementSibling;

    if (previousParent) {
      let prevActive = previousParent.querySelector('.bicycles__link')
      tabsBtn.forEach(el => {
        el.classList.remove('bicycles__link_active')
      });
      prevActive.classList.add('bicycles__link_active');

      let path = prevActive.dataset.tabsPath;
      tabsHandler(path);
    }
  }

  //Функционал кнопки "вперед"
  if (e.target.classList.contains('coverage__slider-button_next')) {
    let activeBtn = document.querySelector('.bicycles__link_active');
    let activeParent = activeBtn.closest('.bicycles__menu-item');
    let nextParent = activeParent.nextElementSibling;

    if (nextParent) {
      let nextActive = nextParent.querySelector('.bicycles__link');
      tabsBtn.forEach(el => {
        el.classList.remove('bicycles__link_active')
      });
      nextActive.classList.add('bicycles__link_active');

      let path = nextActive.dataset.tabsPath;
      tabsHandler(path);
    }
  }
});

//Переключение класса active изменяемого контента
const tabsHandler = (path) => {
  tabsContentBicycles.forEach(el => {
    el.classList.remove('slider_active')
  });
  tabsContentCoverage.forEach(el => {
    el.classList.remove('coverage_active')
  });

  document.querySelector(`[data-tabs-target="b-${path}"]`).classList.add('slider_active');
  document.querySelector(`[data-tabs-target="c-${path}"]`).classList.add('coverage_active');
};
