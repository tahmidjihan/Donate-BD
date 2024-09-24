// tab switch
const tabOneBtn = document.querySelector('.btn-tab1');
const tabTwoBtn = document.querySelector('.btn-tab2');

const tabOne = document.querySelector('#donations');
const tabTwo = document.querySelector('#history');

tabOneBtn.addEventListener('click', function () {
  tabOneBtn.classList.add('bg-green-400');
  tabTwoBtn.classList.remove('bg-green-400');
  tabOne.classList.remove('hidden');
  tabTwo.classList.add('hidden');
});
tabTwoBtn.addEventListener('click', function () {
  tabOneBtn.classList.remove('bg-green-400');
  tabTwoBtn.classList.add('bg-green-400');
  tabOne.classList.add('hidden');
  tabTwo.classList.remove('hidden');
});
