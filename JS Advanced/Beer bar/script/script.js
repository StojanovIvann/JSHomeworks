// Constants for DOM elements
const beersDiv = document.getElementById("beersDiv");
const searchBar = document.getElementById("searchBox");
const sortDropdown = document.getElementById("sortDropdown");
const paginationDropdown = document.getElementById("paginationDropdown");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const apiLink = "https://api.punkapi.com/v2/beers";
const searchBtn = document.getElementById("searchButton");
const randomBeer = document.getElementById("randomBeer");


 let currentPage = 1;
 let itemsPerPage = 0;
// Function to render beers on screen
const renderBeers = (data) => {
 
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);

  beersDiv.innerHTML = data
    .slice(startIndex, endIndex)
    .map((beer) => `
      <div class="oneBeer">
        <img class="beerImg" src="${beer.image_url}" alt="${beer.name}"> 
        <h3 class="beerName">${beer.name}</h3>
        <div class="beerUnderLine"></div>
        <div class="beerTaglDiv">  
          <p class="description">${beer.tagline}</p>
        </div>
        <button class="detailsButton">More Details</button>
      </div>`
    )
};

// Function for beer details
const details = (data, index) => {
  const beer = data[index];

  const sortingDiv = document.getElementById('sortingDiv');
  sortingDiv.innerHTML = '';

  const nextAndPrev = document.getElementById('nextButtons');
  nextAndPrev.innerHTML = '';

  beersDiv.innerHTML = `
    <div class="detailsContainer">
      <div class="imgDiv">
        <img src="${beer.image_url}" alt="${beer.name}" class="detailsImage"/>
      </div>
      <div class="infoDiv">
        <div class="nameOfTheBeer">
          <h1 class="nameHeader">${beer.name}</h1>
          <h3>"${beer.tagline}"</h3>
        </div>
        <div class="descriptionOfTheBeer">${beer.description}</div>
        <div class="info">
          <h3>Brewed : ${beer.first_brewed}</h3>
          <h3>Alcohol : ${beer.abv} %</h3>
          <h3>Bitterness : ${beer.ph}</h3>
        </div>
        <h1 >&nbsp; Food Pairing</h1>
        <div class="foodPairingDiv"></div>
        <div class='food'></div>
      </div>
    </div>
  `;
  const foodDiv = document.querySelector('.food');
};

// Searching beers
const searchBeer = (data) => {
  const searchedBeer = searchBar.value.toLowerCase();
  const filteredData = data.filter((beer) =>
    beer.name.toLowerCase().includes(searchedBeer)
  );
  renderBeers(filteredData);
};

// Fetching beers data
const beersApp = (api) => {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      itemsPerPage = data.length;
      renderBeers(data);

      // Event listeners
      // Search Button
      searchBtn.addEventListener("click", () => {
        searchBeer(data);
      });

        // Sorting the beers
      sortDropdown.addEventListener("change", () => {
        const selected = sortDropdown.value;
        const sortData = [...data];

        if (selected === "name") {
          sortData.sort((a, b) => a.name.localeCompare(b.name));
        } 
        else if (selected === "alc") {
          sortData.sort((a, b) => a.abv - b.abv);
        } 
        else if (selected === "bitternes") {
          sortData.sort((a, b) => a.ph - b.ph);
        } 
        else if (selected === "first") {
          sortData.sort((a, b) => new Date(parseFloat(a.first_brewed)) - new Date(parseFloat(b.first_brewed)))
        }

        renderBeers(sortData);
      });

      // Details button event listener
      const detailsButtons = document.querySelectorAll(".detailsButton");
      detailsButtons.forEach((button, i) => {
        button.addEventListener("click", () => {
          details(data, i);
        });
      });

      // Pagination
      paginationDropdown.addEventListener("change", () => {
        itemsPerPage = parseInt(paginationDropdown.value);
        currentPage = 1;
        renderBeers(data);
      });

      nextButton.addEventListener("click", () => {
        if (currentPage * itemsPerPage < data.length) {
          currentPage++;
          renderBeers(data);
        }
      });

      prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          renderBeers(data);
        }
      });

      randomBeer.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        details(data, randomIndex);
      });
    })
    .catch((error) => console.error("Error:", error));
};

// Initialize the application
beersApp(apiLink);
