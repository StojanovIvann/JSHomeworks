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
let chosenWord;
const category = [
    'Moovies',
    'Football',
    'Brands',
    'Fruits',
    "Drinks"
];
    let words= [];
function lives(){
   livesDiv.innerHTML=` <h2> You Have ${remainigLives} Lives</h2>`
}

lives()

// Get a random category
function getACategory(){
    let chosenCategory = category[Math.round(Math.random() * category.length)]
    categoryDiv.innerText =  chosenCategory
}

getACategory();

// Get the word  from the appropriate category

function getAWord() {
    let chosenCategory = categoryDiv.innerText;

    if (chosenCategory === 'Moovies') {
        words = ['SUPERMAN', 'BATMAN', 'THOR'];
    } 
    else if (chosenCategory === 'Football') {
        words = ['RONALDO', 'MESSI', 'BELLINGHAM'];
    } 
    else if (chosenCategory === 'Brands') {
        words = ['NIKE', 'REEBOK', 'KAPPA'];
    } 
    else if (chosenCategory === 'Fruits') {
        words = ['PAPAYA', 'MANGO', 'PINEAPPLE'];
    } 
    else if (chosenCategory === 'Drinks') {
        words = ['COFFEE', 'WATER', 'JUICE'];
    }
    let randomWord = Math.floor(Math.random() * words.length);
    chosenWord = words[randomWord];
   for (let i = 0; i < chosenWord.length; i++) {
       if (chosenWord[i]) {
           finalWord.innerText += ' _';
       } 
       else{
        finalWord +=' ';
       }
   }
}
getAWord()
// Prin the letter on the screen
 function printLetter(letter){
    if (chosenWord.includes(letter)) {
        for (let i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === letter) {
                finalWord.innerText= `${finalWord.innerText.slice(0, i * 2)}${letter} ${finalWord.innerText.slice((i * 2) + 2)}`;
                //  slice funkcijata mi raboti taka sto pocnuva od 0to mesto i odi 2 prazni mesta napred,  odnosno edno prazno mesto i crtickata 
                // ja dodava bukvata na soodvetnata crticka
                // se mnozi so 2 bidejki imame  "_ _ " odnosno megu sekoja crta imame edno prazno mesto, zatoa praznoto mesto + crtickata se 2 mesta
                // i potoa so ((i*2) + 2 ) se prefrluvame na sledniot znak, gi izvrtuva prvite 2  mesta i plus dodava uste 2 mesta,
                }
            }
        }
        else{
            livesDiv.innerHTML = `<h2> You Have ${remainigLives--} Lives</h2>`;
        }
        // Ja povikuvame ovde funkcijata za pri klikanje na kopcinjata da ni dade dali sme pobedile ili ne.
        gameStatus()
    }


function gameStatus(){
// Ovde imav bug. Mi davase - Lives  zatoe imam remainingLives =0 i vo if imam ako e - 1
        if (remainigLives === -1 || remainigLives < 0) {
            remainigLives = 0;
            hangBox.innerHTML = `<h1> You Lost </h1>`;
            gameOver.id ='gameOver';
            gameOver.innerHTML+= `<h1>You Lost</h1>`
            gameOver.innerHTML += ` <img src="download.jpg" alt=""> `
            gameOver.innerHTML += ` <button class = "gameOverButton" onclick="restartGame()">Play Again </button>`
        }
        
            else if(!finalWord.innerText.includes('_')){
                hangBox.innerHTML = `<h1>YOU WON!!!! </h1>`
            }

    }
    
gameStatus();
    // Get a clueget a word from the appropriate category
 function getAClue(){
    if(clue.innerText =" "){
        let chosenCategory = categoryDiv.innerText;
        if (chosenCategory === 'Moovies') {
            clue.innerText += `Superhero Moovie`;
        } 
        else if (chosenCategory === 'Football') {
            clue.innerText += `Most popular footballers that played in the LaLiga`;
        } 
        else if (chosenCategory === 'Brands') {
            clue.innerText +=   `Spots cloathing brand'`;
        } 
        else if (chosenCategory === 'Fruits') {
            clue.innerText += 'Tropical fruit';
        } 
        else if (chosenCategory === 'Drinks') {
            clue.innerText += 'Non alcoholic drinks, you drink it every day';
        }
    }
    else{
        clue.innerText += ' ';
    }
   
    }
   
hint.addEventListener('click', function(){
    getAClue();
})
function restartGame(){
    gameOver.id='hidden';
    gameOver.innerHTML = ' ';
    getACategory();
    clue.innerText = '';
    remainigLives = 10;
    finalWord.innerText = ' ';
    printLetter();
    getAWord();
    gameStatus();
    hangBox.innerHTML = ' ';
}
restart.addEventListener('click',function(){
   restartGame()
})