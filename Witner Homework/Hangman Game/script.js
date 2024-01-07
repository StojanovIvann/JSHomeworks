let alphabet = document.getElementsByClassName('alphabets');
// console.log(alphabet);
let restart = document.getElementById('restart');
let hint = document.getElementById('hint');
let livesDiv = document.getElementById('lives');
let categoryDiv = document.getElementById('categoryHeader');
let finalWord = document.getElementById('finalWord');
let hangBox = document.getElementById('clueBox')
let clue = document.getElementById('displayClue');
let gameOver = document.getElementById('gameOver');
gameOver.id='hidden';
gameOver.innerHTML = ' ';



let remainigLives = 10;
let currentWord;
const category = [
    'Moovies',
    'Football',
    'Music',
    'Fruits',
    'Programing Languages',
    "Drinks"
];
const words= [
    'SPIDERMAN',
    'BARCELONA',
    'TECHNO',
    'BANANA',
    'PYTHON',
    'COFFE'
]

const clues = [ 
    'Superhero moovie',
    'Winner of the LaLiga',
    'Type of music',
    'Monkey',
    'Snake',
    'When you wake up, you drink?'
]
function lives(){
   livesDiv.innerHTML=` <h3> You Have ${remainigLives} Lives Remaining  </h3>`
}

lives()

function chosenCategory(){
    let chosenCategory = category[Math.floor(Math.random() * category.length)]
    categoryDiv.innerText =  chosenCategory
}

chosenCategory();


function choseWord() {
    let index;
    if (categoryDiv.innerText === "Moovies") {
        finalWord.innerText = '_ _ _ _ _ _ _ _ _';
        index = 0;
        currentWord = words[index];
    } 
    else if (categoryDiv.innerText === "Football") {
        finalWord.innerText = '_ _ _ _ _ _ _ _ _'
        index = 1;
        currentWord = words[index];
    } 
    else if (categoryDiv.innerText === "Music") {
        finalWord.innerText = '_ _ _ _ _ _'
        index = 2;
        currentWord = words[index];
    } 
    else if (categoryDiv.innerText === "Fruits") {
        finalWord.innerText = '_ _ _ _ _ _'
        index = 3;
        currentWord = words[index];
    } 
    else if (categoryDiv.innerText === "Programing Languages") {
        finalWord.innerText = '_ _ _ _ _ _'
        index = 4;
        currentWord = words[index];
    } 
    else if(categoryDiv.innerText ===  "Drinks"){
        finalWord.innerText =`_ _ _ _ _ `
        index = 5
        currentWord = words[index];

    }

}
choseWord()
 function printLetter(letter){
    if (currentWord.includes(letter)) {
        for (let i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === letter) {
                finalWord.innerText= `${finalWord.innerText.slice(0, i * 2)}${letter} ${finalWord.innerText.slice((i * 2) + 2)}`;
                remainigLives = 10;
                }
            }
        }
        gameStatus()  
    }


function gameStatus(){
     livesDiv.innerHTML = `<h3> You Have ${remainigLives--} Lives Remaining </h3>`;
        if (remainigLives === -1 || remainigLives < 0) {
            remainigLives = 0;
            hangBox.innerHTML = `<h1> You Lost </h1>`;
            gameOver.id ='gameOver';
            gameOver.innerHTML+= `<h1>You Lost</h1>`
            gameOver.innerHTML += ` <img src="../hangmancrop.jpg" alt=""> `
            gameOver.innerHTML += ` <button class = "gameOverButton" onclick="restartGame()">Play Again </button>`
        }
        for(let i = 0; i < words.length; i++){
            if(!finalWord.innerText.includes('_')){
                hangBox.innerHTML = `<h1>You Won </h1>`
            }
        }
    }
    
gameStatus();
    
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
        else{
            clue.innerText += `${clues[5]}`
        }
    }
   
}
hint.addEventListener('click', function(){
    getAClue();
})
function restartGame(){
    gameOver.id='hidden';
    gameOver.innerHTML = ' ';
    chosenCategory();
    clue.innerText = '';
    remainigLives = 11;
    finalWord.innerText = ' ';
    printLetter();
    choseWord();
    gameStatus();
    hangBox.innerHTML = ' ';
}
restart.addEventListener('click',function(){
   restartGame()
})