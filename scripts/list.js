const listBtn = document.querySelector('.bicycles__link-value');
const dropList = document.querySelector('.bicycles__menu');
const dropItem = dropList.querySelectorAll('.bicycles__link');

listBtn.addEventListener('click', function () {
  dropList.classList.toggle('bicycles__menu_active');
});

for (let i = 0 ; i < dropItem.length; i++) {
  dropItem[i].addEventListener('click' , function () {
    listBtn.innerHTML = dropItem[i].innerHTML;
    dropList.classList.remove('bicycles__menu_active');
  }, false );
};

