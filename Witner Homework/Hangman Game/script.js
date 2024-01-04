let alphabetDiv = document.getElementById('alphabetDiv');
let categoryDiv = document.getElementById('categoryDiv');
let livesDiv = document.getElementById('livesDiv');
let wordDiv = document.getElementById('wordDiv');

let remainingLives = 10;

let alphabetArray =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

let category = ['Moovies', 'LaLiga', 'Fruits', 'Cloating' ];
let clue = ['Couple demon hunting', 'Messi played at', 'Monkeys loves it', 'When you are cold you put on?'];
let word = ['The Conjuring', 'Barcelona', 'Banana', 'Jacket']


function displayAlphabet(){
    for(let i = 0; i< alphabetArray.length; i++){
        alphabetDiv.innerHTML += `<button  class ="alphabetButton" value = '${alphabetArray[i]}' id= 'clickButon '  > ${alphabetArray[i]} </button>`
        console.log(alphabetArray[i])
    }
}
displayAlphabet();

function lives (){
    livesDiv.innerHTML += `<h3 class = "lives"> You have ${remainingLives} lives</h3>`
}
lives()


function getWord(){
    let final1 = word[0];
    let final2 = word[1];
    let final3 = word[3];
    if(final1){
      for(let i = 0; i<final1.length; i++ ){
        console.log(final1[i]);
        wordDiv.innerHTML = `<h3>_ _ _ - _ _ _ _ _ _ _ _ _</h3>`
      }
    }


    else if(final2){
        for(let i = 0; i<final2.length; i++ ){
            console.log(final2[i]);
    }
   }


   else if(final3){
    for(let i = 0; i<final3.length; i++ ){
        console.log(final3[i]); 
}
   }
 
}

getWord()

