// Change Pay Now butoon on Login

let payNowButton = document.querySelector('.payNow');

function changePayNow(){
  if (loginState === "loggedIn"){
    payNowButton.innerHTML = `<button type="button" class="btn btn-success">Pay Now</button>`
  }
}

modalLogin.addEventListener('click', changePayNow);
