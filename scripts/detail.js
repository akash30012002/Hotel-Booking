// Auto calculate price

let todayDate = new Date().toISOString().substr(0, 10);
document.querySelector('input[name="fromDate"]').setAttribute('min', todayDate)
document.querySelector('input[name="toDate"]').setAttribute('min', todayDate)

function autoCalculate(){
  let noOfAdultsInput = details[0];
  let bookingNameInput = details[1];
  let fromDateInput = details[2];
  let toDateInput = details[3];
  let totalPriceInput = details[4];
  if (fromDateInput.value){
    toDateInput.setAttribute('min',fromDateInput.value)
  }
  // calculate no of days
  let totalDays;
  if (fromDateInput.value && toDateInput.value){
    let fromDateEpoch = fromDateInput.value + 'T00:00:00';
    let toDateEpoch = toDateInput.value + 'T00:00:00';
    totalDays = (new Date(toDateEpoch).getTime() - new Date(fromDateEpoch).getTime())/24/3600/1000;
  }
  // calculate total price
  if (totalDays && noOfAdultsInput.value){
    let calculatedTotalPrice = Math.floor(noOfAdultsInput.value) * totalDays * 1000;
    totalPriceInput.value = calculatedTotalPrice;
  }
}

let details = document.querySelectorAll('.formDiv div input');
details[0].addEventListener('input', autoCalculate);
details[2].addEventListener('change', autoCalculate);
details[3].addEventListener('change', autoCalculate);
