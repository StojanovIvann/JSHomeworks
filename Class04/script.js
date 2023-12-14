
// Homework #1

function tellStory(array){
    let i=0;
    console.log(`This is ${array[i]}, ${array[i]} is a nice person but today he is ${array[i+1]} because he is ${array[i+2]} all day.`);
}

let storyArray = ["Ivan", "sad", "doing his hoework"];
let story =tellStory(storyArray);
console.log(" ");


// Homework #2

function sumNumbers(arrayOfNumbers){
    let sum = 0; 
    for (let i = 0; i < arrayOfNumbers.length; i++) { 
        sum += arrayOfNumbers[i]; 
    } 
    return sum;
}
let numbersArray = [12, 23, 1, 10,];
let sum = sumNumbers (numbersArray);
console.log(sum);
console.log(" ");

// Homework #3

function bigString (stringArray){
    
    let string = "";
    for (let i=0; i< stringArray.length; i++){
        string += stringArray[i] + " ";
    }
    console.log(string)
}
let bigStringArray = ["Hello" , "there" , "students" , "of" , "SEDC" , "!"];
bigString(bigStringArray);


console.log(" ");

// Homework #4
function evenNum(){
       for (let i = 1; i < 21; i++){
        if (i % 2 === 0){
            console.log(`${i-1} ${i}`);
        }      
    }
}

evenNum();
console.log(" ");

// Homework #5

function sumMinMax(array) {
    
    max = minMaxArray[0];
    min = minMaxArray [0];
   for (let i=0; i < array.length; i++){
    if (array[i] > max){
        max = array[i];
    }
    else if (array[i] < min){
        min=array[i]
    }
      sum = min+max;
   }
   return (`MIN: ${min} MAX:${max} SUM:${sum}`);
}
let minMaxArray = [2 ,5, 6 ,11 ,8];
let sumNumber =sumMinMax(minMaxArray);
console.log(sumNumber);

// Homework #6



function fullNames(firstName, lastName) {
    let fullNames = [];
    for ( i = 0; i < firstName.length; i++) {
      const fullName = `${i + 1} ${firstName[i]} ${lastName[i]}`;
      fullNames.push(fullName);
    }
  
    return fullNames;
  }
  
  let firstNameArray = ["Bob", "Jill"];
  let lastNameArray = ["Gregory", "Wurtz"];
  
  let finalResult = fullNames(firstNameArray, lastNameArray);
  console.log(finalResult);