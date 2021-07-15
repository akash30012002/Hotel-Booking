// View More button functionality
let viewButton = document.querySelector('.btn-secondary');
let secondRowImages = document.querySelectorAll('.images')[1];
secondRowImages.style.display = 'none';

function toggleViewMore(){
  let buttonText = viewButton.innerText
  if (buttonText === 'View More'){
    secondRowImages.style.display = 'flex';
    viewButton.innerText = 'View Less';
  }
  else{
    secondRowImages.style.display = 'none';
    viewButton.innerText = 'View More';
  }
}

viewButton.addEventListener('click', toggleViewMore);

// Modify link query string on the basis of hotels
function modifyCardLinks(){
  let cityLinks = document.querySelectorAll('.image a');
  let cityNames = document.querySelectorAll('.city');
  for (let i=0; i<cityLinks.length; i++){
    let attribute = cityLinks[i].href;
    cityLinks[i].setAttribute('href', `${attribute}?city=${cityNames[i].textContent}`)
  }
}

modifyCardLinks();
