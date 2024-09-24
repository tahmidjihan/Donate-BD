function getBallance() {
  const ballance = document.querySelector('#ballance').innerText;
  return ballance;
}

function addToTotalDonated(amount, previous) {
  const previousOne = parseFloat(previous.innerText);
  previous.innerText = parseFloat(previousOne) + parseFloat(amount);
  return previous + amount;
}

function removeBallance(amount, previous) {
  const ballance = document.querySelector('#ballance');
  ballance.innerText = previous - amount;
  return previous - amount;
}

function validateDonation(inputVal, ballance, cardDonationBox, subject) {
  if (isNaN(inputVal) || inputVal < 0 || inputVal === '') {
    alert('Please give a valid number.');
    return false;
  } else if (parseFloat(inputVal) > ballance) {
    alert('Insufficient Ballance');
    return false;
    return;
  } else {
    const modal = document.querySelector('#successful');
    addToTotalDonated(inputVal, cardDonationBox);
    removeBallance(inputVal, ballance);
    ballance = getBallance();
    modal.showModal();
    //history
    const history = document.getElementById('history');
    const dateAndTime = new Date();
    const card = `        <div
          class="card w-96 lg:w-[800px] bg-base-100 shadow-xl mx-auto border"
        >
          <div class="card-body">
            <h2 class="card-title font-bold">${inputVal} Taka is Donated for ${subject}</h2>
            <p>Date: ${dateAndTime}</p>
          </div>
        </div>`;
    history.appendChild(card);
  }
}
