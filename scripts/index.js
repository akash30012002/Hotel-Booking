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

viewButton.addEventListener('click', toggleViewMore)
