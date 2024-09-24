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
// donations calc

const cardOneInput = document.querySelector('.card-1-input');
const cardOneBtn = document.querySelector('.card-1-btn');
const cardTwoInput = document.querySelector('.card-2-input');
const cardTwoBtn = document.querySelector('.card-2-btn');
const cardThreeInput = document.querySelector('.card-3-input');
const cardThreeBtn = document.querySelector('.card-3-btn');

cardOneBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let ballance = getBallance();
  const inputVal = cardOneInput.value;
  const cardDonationBox = document.querySelector('#card-1-donations');
  const subject = 'Flood Relief in Noakhali, Bangladesh';
  validateDonation(inputVal, ballance, cardDonationBox, subject);
});
cardTwoBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let ballance = getBallance();
  const inputVal = cardTwoInput.value;
  const cardDonationBox = document.querySelector('#card-2-donations');
  const subject = 'famine-2024 at Feni,Bangladesh';
  validateDonation(inputVal, ballance, cardDonationBox, subject);
});
cardThreeBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let ballance = getBallance();
  const inputVal = cardThreeInput.value;
  const cardDonationBox = document.querySelector('#card-3-donations');
  const subject = 'Aid for Injured in the Quota Movement, Bangladesh';
  validateDonation(inputVal, ballance, cardDonationBox, subject);
});
//modal
const dialog = document.getElementById('successful');
const closeForm = document.getElementById('closeForm');

closeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  dialog.close();
});
//history
