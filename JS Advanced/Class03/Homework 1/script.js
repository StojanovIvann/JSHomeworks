let inputText = document.getElementById('textInput');
let header = document.getElementById('response');
let button = document.getElementById('btn');
let responseDiv = document.getElementById('response')

let movieArray = ['Thor', 'Spiderman', 'The Conjuring', 'Titanic', 'Vertigo', 'The Godfather', 'Seven Samurai', 'Psycho', 'Home Alone'];
let rentedMoovie = false;
function rentAMovie(array, input) {
    for (let movie of array) {
        if (input.value.toLowerCase() === movie.toLowerCase()) {
           rentedMoovie = true;
        }
    }
    if(rentedMoovie){
       responseDiv.innerHTML = `<h1 style ="color:green"> The movie can be rented </h1> `
    }
    else{
        responseDiv.innerHTML = `<h1 style ="color:red">The movie can't be rented </h1> `
    }
   
}

button.addEventListener('click', function () {
    rentAMovie(movieArray, inputText);
});