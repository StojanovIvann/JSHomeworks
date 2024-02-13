let beersDiv = document.getElementById("beersDiv");
// let details = document.getElementById("details");
let sortingDiv = document.getElementById("sortingDiv");
let randomBeer = document.getElementById("randomBeer");
let mainDetailsDiv = document.getElementById('mainDetails')
let apiLink = "https://api.punkapi.com/v2/beers";
mainDetailsDiv.innerHTML= ' ';
let beersApp = (api) => {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); 
      return data;
    })
    .then((data) => {

      for (let i in data) {
        let printBeers = () => {
          beersDiv.innerHTML += `
                        <div class="oneBeer">
                            <img class="beerImg" src="${data[i].image_url}"> 
                            <h3 class="beerName">${data[i].name}</h3>
                            <p class="description">${data[i].tagline}</p>
                            <button class="detailsButton"><a  onclick="window.scrollTo (0,0)"> More Details</a></button>
                        </div>`;
        };
        printBeers();
      }

    
      let buttons = document.querySelectorAll(".detailsButton");
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].addEventListener("click", () => {
          sortingDiv.innerHTML = "";
          
         mainDetailsDiv.innerHTML = `
                        <div id="details">
                          <button id='buttonX'>X</button>
                            <img class="detailsPics" src="${data[j].image_url}" alt="${data[j].name} image">
                            <div id="infoBeer">
                                <div id="nameBeer">
                                    <h2>${data[j].name}</h2>
                                    <h5>"${data[j].tagline}"</h5>
                                </div>
                                <div id="story">
                                    <p id="stroyBeer">${data[j].description}</p>
                                </div>
                                <div id="statsBeer">
                                    <h4 id="brewed">Brewed: ${data[j].first_brewed}</h4>
                                    <h4 id="alc">Alcohol: ${data[j].abv}</h4>
                                    <h4 id="bit">Bitterness: ${data[j].ph}</h4>
                                </div>
                                <div id="food">
                                    <h2>Food pairing</h2>
                                    <div id="allFoods">${data[j].food_pairing}</div>
                                </div>
                            </div>
                        </div>`;
                          let buttonX = document.getElementById("buttonX");
                          buttonX.addEventListener("click", () => {
                            mainDetailsDiv.innerHTML = " ";
                          });
        });
      
      }
     return data;
    })

    
    .catch((error) => console.error("Error fetching beers:", error));
};


beersApp(apiLink);
