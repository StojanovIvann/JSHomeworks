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
    'Electronic dance music!',
    'The monkey loves is!',
    'Snake',
    'When you wake up, you drink?'
]
function lives(){
   livesDiv.innerHTML=` <h2> You Have ${remainigLives} Lives</h2>`
}

lives()

// Get a random category
function chosenCategory(){
    let chosenCategory = category[Math.floor(Math.random() * category.length)]
    //Bidejki Math.random() * category.length ni vraka random decimalen broj od 0 do 1,  go upotrebiv Math.floor() za da go zaokruzi rezultatot od Math.random() * category.length vo cel broj 
    // Na primer Math.random ako ni vrati 0.123 * dolzinata na nizata, Math.floor() ke go zaokruzi rezultatot  vo cel broj i ke ni vrati random element od nizata koj e najblisku do rezlutatot od Math.floor(Math.random() * category.length)
    categoryDiv.innerText =  chosenCategory
}

chosenCategory();

// Get the word  from the appropriate category

function choseWord() {
    let i = 0;
    // i++;
    if (categoryDiv.innerText === "Moovies") {
        finalWord.innerText = '_ _ _ _ _ _ _ _ _';
        i = 0;
        currentWord = words[i];
    } 
    else if (categoryDiv.innerText === "Football") {
        finalWord.innerText = '_ _ _ _ _ _ _ _ _'
        i = 1;
        currentWord = words[i];
    } 
    else if (categoryDiv.innerText === "Music") {
        finalWord.innerText = '_ _ _ _ _ _'
        i = 2;
        currentWord = words[i];
    } 
    else if (categoryDiv.innerText === "Fruits") {
        finalWord.innerText = '_ _ _ _ _ _'
        i = 3;
        currentWord = words[i];
    } 
    else if (categoryDiv.innerText === "Programing Languages") {
        finalWord.innerText = '_ _ _ _ _ _'
        i = 4;
        currentWord = words[i];
    } 
    else if(categoryDiv.innerText ===  "Drinks"){
        finalWord.innerText =`_ _ _ _ _ `
        i = 5
        currentWord = words[i];

    }

}
choseWord()
// Prin the letter on the screen
 function printLetter(letter){
    if (currentWord.includes(letter)) {
        for (let i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === letter) {
                finalWord.innerText= `${finalWord.innerText.slice(0, i * 2)}${letter} ${finalWord.innerText.slice((i * 2) + 2)}`;
                //  slice funkcijata mi raboti taka sto pocnuva od 0to mesto i odi 2 prazni mesta napred,  odnosno edno prazno mesto i crtickata 
                // ja dodava bukvata na soodvetnata crticka
                // se mnozi so 2 bidejki imame  "_ _ _" odnosno megu sekoja crta imame edno prazno mesto, zatoa praznoto mesto + crtickata se 2 mesta
                // i potoa so ((i*2) + 2 ) se prefrluvame na sledniot znak, gi izvrtuva prvite 2 prazni mesta i plus dodava uste 2, odnosno gi ispolnuva  praznite mesta taka se dodeka  ne se prebrisat site "_"  od funkcijata gameStatus();
                
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
    if(clue.innerText == ''){
        if(categoryDiv.innerText === "Moovies"){
            clue.innerText += ` ${clues[0]}`
            console.log(clue[0]);
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
    remainigLives = 10;
    finalWord.innerText = ' ';
    printLetter();
    choseWord();
    gameStatus();
    hangBox.innerHTML = ' ';
}
restart.addEventListener('click',function(){
   restartGame()
})