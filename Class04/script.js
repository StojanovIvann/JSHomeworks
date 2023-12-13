// Homework #1
let storyArray = ["Ivan", "Happy", "playing"];
function tellStory(array){
    let i=0;
    console.log(`This is ${storyArray[i]}, he is ${storyArray[i+1]} because he is ${storyArray[i+2]} all day`);
}
tellStory(storyArray);

console.log(" ");

// Homework #2
let numbersArray = [12, 23, 1, 10,];
function sumNumbers(arrayOfNumbers){
    let sum = 0; 
    for (let i = 0; i < numbersArray. length; i++) { 
        sum += numbersArray[i]; 
    } 
    console. log(`The result is :${sum}`);
}

sumNumbers (numbersArray);

console.log(" ");

// Homework #3
let bigStringArray = ["Hello" , "there" , "students" , "of" , "SEDC" , "!"]
function bigString (array){
    let string = "";
    for (let i=0; i< bigStringArray.length; i++){
        string += bigStringArray[i] + " ";
    }
    console.log(string)
}
bigString(bigStringArray);


console.log(" ");

// Homework #4
function evenNum(){
       for (let i = 0; i<=20; i++)
        if (i % 2 === 0){
            console.log(`${i}  \n  `)
        }
        else{
            console.log(`${i} " " `)
        }
       
}

evenNum();
console.log(" ");

// Homework #5
// Ne znaev kako da ja resham so loop ova mi se vide najlesen nachin 

function sumMinMax() {
    let minMaxArray = [2 ,5, 6 ,11 ,8];
    let min = minMaxArray[0];
    let max = minMaxArray [0];
    for (let i=0; i < minMaxArray.length; i++ ){
        if(minMaxArray[i] > max){
            max=minMaxArray[i];
        }
        else if(minMaxArray[i] < min){
            min = minMaxArray[i];
        }
    }
    let  result = min + max;
    console.log(`MIN:${min} MAX:${max} SUM:${result}`);
}

sumMinMax()
console.log(" ");

// Homework #6

let firstNameArray = ["Bob", "Jill"];
let lastNameArray = ["Gregory", "Wurtz"];
function fullNames(firstName, lastName) {
    let fullNames = [];
    for ( i = 0; i < firstNameArray.length; i++) {
      const fullName = `${i + 1} ${firstNameArray[i]} ${lastNameArray[i]}`;
      fullNames.push(fullName);
    }
  
    return fullNames;
  }
  
  
  let finalResult = fullNames(firstNameArray, lastNameArray);
  console.log(finalResult);