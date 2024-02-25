let randomBeer = document.getElementById("randomBeer");
const apiLink = "https://api.punkapi.com/v2/beers";
let details = (data, index) => {
  let beersDiv = document.getElementById('greeting')
  let foodPairing = data.map((food) => food.food_pairing).slice();
  beersDiv.innerHTML = ' ';
  beersDiv.innerHTML =`
  <div class="topNav">
  <ul class="navBar">
      <li id="beerBar"> <a href="index.html" class="beerItems" >Beer Bar</a></li>
      <li id="beers"><a href="beers.html" class="beerItems">Beers</a></li>
      <li class="beerItems" id="randomBeer"> Random Beer</li>
  </ul>
</div>
  <div class = 'marginTopDetails'>
      <div class="detailsContainer">
        <div class="imgDiv">
          <img src="${data[index].image_url}" alt="${data[index].name}" class="detailsImage"/>
        </div>
        <div class="infoDiv">
          <div class="nameOfTheBeer">
            <h1 class ="nameHeader"> ${data[index].name}</h1>
            <h3>"${data[index].tagline}"</h3>
          </div>
          <div class="descriptionOfTheBeer">${data[index].description}</div>
          <div class="info">
            <h3>Brewed : ${data[index].first_brewed}</h3>
            <h3>Alcohol : ${data[index].abv} %</h3>
            <h3>Bitterness : ${data[index].ph}</h3>
          </div>
          <h1 >&nbsp; Food Pairing</h1>
          <div class="foodPairingDiv"> 
          </div>
          <div class='food'>
          </div>
        </div>
      </div>
    </body>
  </html>
  </div>
  `;
  let foodDiv = document.querySelectorAll('.food');
};
// fetch  beers data
let beersApp = (api) => {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // random beer
      randomBeer.addEventListener("click", () => {
        for (let i in data) {
          let randomIndex = Math.floor(Math.random() * data.length);
          details(data, randomIndex);
        }
      });
    })
    .catch((error) => console.error("Error :", error));
};

beersApp(apiLink);
