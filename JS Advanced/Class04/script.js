// Exercise 1
console.log("EXERCISE 1")
function digitsInNumber (num){
   let digits = 0 ;
   let digitsForNegative = -1;
//    toString() turns the number into string
    numInString = num.toString();
    for(let i = 0; i < numInString.length; i++){
        if ( num > 0){
            digits ++
        }   
        else if(num < 0){
            digitsForNegative++
            digits = digitsForNegative
        }
    }
    return digits
}
    


function evenOrOdd(num){
    if(num % 2 === 0){
        return `Even`
    }
    else{
      return `Odd`
    }
}
function positiveOrNegative(num){
    if(num < 0){
        return `Negative`;
    }
    else{
        return `Positive`;
    }
}



function exerciseOne (number){
    return `The number ${number} has ${digitsInNumber(number)} digits, it is ${evenOrOdd(number)} and  ${positiveOrNegative(number)}`;
}

let exerciseOneResult = exerciseOne(-2.333);
console.log(exerciseOneResult);

console.log(' ');



// Exercise 2
let submitBtn = document.getElementById('colorSubmit');

    let textDiv = document.getElementById('textDiv');
    let changeColor = (text, color='black', fontSize ) =>{
        if(textDiv.innerHTML == ' '){
            textDiv.innerHTML =`<h3 style = "color:${color}; font-size:${fontSize}"> ${text} </h3> `

        }
        else{
            textDiv.innerHTML = `<h3 style = "color:${color}; font-size:${fontSize}"> ${text} </h3>`;  
        }
    
};


submitBtn.addEventListener('click', function(){
    let textInput = document.getElementById('text').value;
    let  colorInput = document.getElementById('colorInput').value;
    let fontSizeInput = document.getElementById('fontSize').value;
    changeColor(textInput, colorInput, fontSizeInput);
})



console.log('EXERCISE 3')
// Exercise 3

let squareFunction = function(num){
    let square = num * num;
    return square;
}

console.log(squareFunction(6));



console.log(' ');
console.log('EXERCISE 4');

 let factoriel  = (function calculateFactorial(num) {
  let result = 1;
  if (num === 0) {
    return result;
  } else {
    result = num * calculateFactorial(num - 1);
    return result;
  }
})(5);
console.log(factoriel);

console.log(' ')
console.log('Exercise 5')
let reverseString = (string) =>{
    let reversedString = ' ';
    // i = string.length - 1 , Starts from the last character of string;
    for(let i = string.length - 1; i>=0; i-- ){
        reversedString = string[i].toLowerCase()
        console.log(reversedString)
    }

};
 reverseString('Ivan Stojanov');


//  I put quotation marks on it, because it gave me an eror because it has a special character '$' at Hello ${name} 
 let arrayOfElements = [-10, 5, 7894, NaN, 'Hello world', Infinity, false, [Object, Object], 25, name => Hello` ${name}`, -Infinity, ['hi', 28, -93, true], { name: 'Bob', age: 23, }, undefined, 14, null, 159, 0, -11];



let fileterArray = (array) =>{
    let positiveNumberArray = [];

   for( let i =0; i < array.length; i++){
    // console.log(array[i])
    let element = array[i];
    if(typeof(element)==='number' && element !== Infinity && element > 0){
        if(element > 0){
            positiveNumberArray.push(element)
            // console.log(element)
        }
    }
    else if(typeof(element) === 'object' ){
     for(let number in element){
         if(typeof(element[number]) === 'number'){
             if(element[number] > 0 ){
                 positiveNumberArray.push(element[number])
    }

    else if (typeof(element) !== 'string' && element !==undefined && element !== null){
        for(j = 0; j < Object.values(element).length; j++){
            // console.log(element[j])
            let typeOfElement = element[j];
            //  && !typeOfElement because it pushes some elements two times
            if(typeof(typeOfElement) === 'number' && !typeOfElement){
                if(element[j] > 0){
                positiveNumberArray.push(element[j])
                }
                        }
                    }
                }
            }
        } 
    }
   
   }
   let result = 1;
   for( let y = 0; y < positiveNumberArray.length; y++){
    result = result * positiveNumberArray[y]

   }
   console.log(positiveNumberArray);

   console.log( `All positive number array multiplied : ${result}`)
}


fileterArray(arrayOfElements);


let countVowels = (word) =>{
    let result = 0;
    let array = ['a','e','i','o','u']
    for(let i =0; i < array.length; i++){
        if(word.includes(array[i].toLowerCase())){
            result ++
        }
            }
     console.log(`${word} has ${result} vowels`);

        }


countVowels('nikola')