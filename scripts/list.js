// Toggle list view and map view
let listViewButton = document.querySelectorAll('ul li')[0];
let mapViewButton = document.querySelectorAll('ul li')[1];

function displayMap() {
  listViewButton.innerHTML = "List View";
  mapViewButton.innerHTML = `<button type="button" class="btn btn-primary">Map View</button>`;
  document.querySelector('#list-view').style.display = 'none';
  document.querySelector('#map-view').style.display = 'block';
}

function displayList() {
  listViewButton.innerHTML = `<button type="button" class="btn btn-primary">List View</button>`;
  mapViewButton.innerHTML = `Map View`;
  document.querySelector('#list-view').style.display = 'flex';
  document.querySelector('#map-view').style.display = 'none';
}

listViewButton.addEventListener('click', displayList);
mapViewButton.addEventListener('click', displayMap);

// Find city from url
function getCityFromURL() {
  let url = location.href;
  let params = (new URL(url)).searchParams;
  return params.get('city');
}

let city = getCityFromURL();

// API call
async function getHotels() {
  let url = `https://travel-advisor.p.rapidapi.com/locations/search?query=${city}`;
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
// Render hotel list HTML
let hotels;
async function renderHotels() {
  let response = await getHotels();
  hotels = response.data;
  let noOfHotels = hotels.length;
  let listViewDiv = document.querySelector('#list-view');
  for (let i=0; i<noOfHotels; i++) {
    if (hotels[i].result_type === 'lodging'){
      let divElement = document.createElement('div');
      let hotelDetails = `
      <div class="image">
        <a href="detail.html?id=${hotels[i].result_object.location_id}"><img src=${hotels[i].result_object.photo.images.large.url} alt=""></a>
      </div>
      <div class="details">
        <a href="detail.html?id=${hotels[i].result_object.location_id}">
          <div style="height:100%">
            <h3>${hotels[i].result_object.name}</h3>
            <p>
              <span>${hotels[i].result_object.rating}</span>
              <span class="fa fa-star checked"></span>
            </p>
            <p>${hotels[i].result_object.address}</p>
          </div>
        </a>
      </div>`
      divElement.innerHTML = hotelDetails;
      listViewDiv.appendChild(divElement);
    }
  }
}

renderHotels();



// fetch('https://travel-advisor.p.rapidapi.com/locations/search?query=Delhi', {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-key": "4d124c4d81msh7fa98382e05e4c7p17c58ejsn28d0e88a3b06",
//         "x-rapidapi-host": "travel-advisor.p.rapidapi.com"
//       }
//     }).then(res => res.json()).then(ans => ans)
