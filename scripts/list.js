// Toggle list view and map view
let listViewButton = document.querySelectorAll('ul li')[0];
let mapViewButton = document.querySelectorAll('ul li')[1];

function displayMap(){
  listViewButton.innerHTML = "List View";
  mapViewButton.innerHTML = `<button type="button" class="btn btn-primary">Map View</button>`;
  document.querySelector('#list-view').style.display = 'none';
  document.querySelector('#map-view').style.display = 'block';
}

function displayList(){
  listViewButton.innerHTML = `<button type="button" class="btn btn-primary">List View</button>`;
  mapViewButton.innerHTML = `Map View`;
  document.querySelector('#list-view').style.display = 'flex';
  document.querySelector('#map-view').style.display = 'none';
}

listViewButton.addEventListener('click', displayList);
mapViewButton.addEventListener('click', displayMap);
