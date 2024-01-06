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

let word = ['The Conjuring', 'Barcelona', 'Banana', 'Jacket'];

let answer = ' ';

let guesses = [];


function generateWord (wordArray){
    return [Math.floor(Math.random() * wordArray.length)]
}
generateWord(word);