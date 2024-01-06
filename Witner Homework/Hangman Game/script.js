let alphabet = document.getElementsByClassName('alphabets');
// console.log(alphabet);
let restart = document.getElementById('restart');
let hint = document.getElementById('hint');
let livesDiv = document.getElementById('lives');
let categoryDiv = document.getElementById('categoryHeader');
let finalWord = document.getElementById('finalWord');
let hangBox = document.getElementById('clueBox')
let clue = document.getElementById('displayClue');



let remainigLives = 10;
let guess = ' ';
const category = [
    'Moovies',
    'Football',
    'Music',
    'Fruits',
    'Programing Languages'
];
const words= [
    'SPIDERMAN',
    'RONALDO',
    'BLUZZ',
    'BANANA',
    'JAVA SCRIPT'
]

const clues = [ 
    'Superhero moovie',
    'The GOAT',
    'Type of music',
    'Monkey',
    'This program is made with'
]

function space(){
    finalWord.innerText += " ";
}
function lives(){
   livesDiv.innerHTML=` <h3> You Have ${remainigLives} Lives Remaing  </h3>`
}
lives()
function chosenCategory(){
    let chosenCategory = category[Math.floor(Math.random() * category.length)]
    categoryDiv.innerText =  chosenCategory
}

chosenCategory();
function printLetter(letter) {
    let index;
    let currentWord;

    switch (categoryDiv.innerText) {
        case "Moovies":
            index = 0;
            currentWord = words[index];
            break;
        case "Football":
            index = 1;
            currentWord = words[index];
            break;
        case "Music":
            index = 2;
            currentWord = words[index];
            break;
        case "Fruits":
            index = 3;
            currentWord = words[index];
            break;
        case "Programing Languages":
            index = 4;
            currentWord = words[index];
            break;
        default:
            // Handle other categories or throw an error
            break;
    }

    if (currentWord.includes(letter)) {
        for (let i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === letter) {
                finalWord.innerText = finalWord.innerText.slice(0, i) + letter + finalWord.innerText.slice(i + 1);
            }
        }

        if (finalWord.innerText === currentWord) {
            hangBox.innerHTML = `<h1> You win </h1>`;
        }
    } else {
        console.log('lost');
        livesDiv.innerHTML = `<h3> You Have ${remainigLives--} Lives Remaining </h3>`;
        if (remainigLives === 0) {
            hangBox.innerHTML = `<h1> You Lost </h1>`;
        }
    }
}
    
    function getAClue(){
    if(clue.innerText == ''){
        if(categoryDiv.innerText === "Moovies"){
            clue.innerText += ` ${clues[0]}`
        }
        else if(categoryDiv.innerText === "Football"){
            clue.innerText += ` ${clues[1]}`
        }
        else if(categoryDiv.innerText === "Music"){
            clue.innerText += ` ${clues[2]}`
        }
        else if(categoryDiv.innerText === "Fruits"){
            clue.innerText += ` ${clues[3]}`
        }
        else if(categoryDiv.innerText === "Programing Languages"){
            clue.innerText += `${clues[4]}`
        }
    }
   
}
hint.addEventListener('click', function(){
    getAClue();
})

restart.addEventListener('click',function(){
    hangBox.innerHTML = ' ';
    chosenCategory();
    clue.innerText = '';
    remainigLives = 10;
    finalWord.innerText = ' ';
})