
// Get params from URL
let hotelID,noOfAdults,bookingName,fromDate,toDate,totalPrice;

function getParamsFromURL() {
  let url = location.href;
  let params = (new URL(url)).searchParams;
  hotelID = params.get('id');
  noOfAdults = params.get('adult');
  bookingName = params.get('name');
  fromDate = params.get('fromDate');
  toDate = params.get('toDate');
  totalPrice = params.get('price');
}

getParamsFromURL();
// API call
async function getHotel() {
  let url = `https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${hotelID}`;
  try {
    let res = await fetch(url, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "4d124c4d81msh7fa98382e05e4c7p17c58ejsn28d0e88a3b06",
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com"
      }
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

let descriptionObj;
async function renderPaymentDetails(){
  let hotelDescription = await getHotel();
  descriptionObj = hotelDescription.data[0];
  // change hotel image and description
  document.querySelector('.image img').src = descriptionObj.photo.images.medium.url;
  let topObj = document.querySelector('.top')
  let detailDiv = document.createElement('div');
  detailDiv.classList.add("details");
  let hotelDetails = `
  <div class="details">
    <h2>${descriptionObj.name}</h2>
    <p>${descriptionObj.ranking}</p>
    <p>${descriptionObj.address}</p>
  </div>`
  detailDiv.innerHTML = hotelDetails;
  topObj.appendChild(detailDiv);
  // Change booking details
  let noOfNights = totalPrice/1000/noOfAdults;
  let contentDiv = document.querySelector('.content');
  let bottomDiv = document.createElement('div');
  bottomDiv.classList.add("bottom");
  let bookingDetailsObj = `
  <div class="customer">
    <p><b>Name:</b> ${bookingName}</p>
    <p><b>Number of Adults:</b> ${noOfAdults}</p>
    <p><b>Check-in Date:</b> ${fromDate}</p>
    <p><b>Check-out Date:</b> ${toDate}</p>
  </div>
  <div class="payment">
    <p><b>Tariff Breakdown:</b> Rs 1000 x ${noOfAdults} Adults x ${noOfNights} nights</p>
    <p><b>Total Amount:</b> Rs. ${totalPrice}</p>
  </div>
  <div class="payNow">
    <button type="button" class="btn btn-success" disabled>Pay Now</button>
  </div>`
  bottomDiv.innerHTML = bookingDetailsObj;
  contentDiv.appendChild(bottomDiv);
}

renderPaymentDetails();

// Change Pay Now butoon on Login

function changePayNow(){
  let payNowButton = document.querySelector('.payNow');
  if (loginState === "loggedIn"){
    payNowButton.innerHTML = `<button type="button" class="btn btn-success">Pay Now</button>`
  }
}

modalLogin.addEventListener('click', changePayNow);

// Alert on bookingName
// function alertOnBook(){
//   alert('Hi! Your booking is successful');
// }

// document.querySelector('.btn-success').addEventListener('click',alertOnBook)
