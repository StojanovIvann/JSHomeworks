// Exercise 1
console.log("EXERCISE 1")
function digitsInNumber (num){
   let digits = 0 ;
   let digitsForNegative = -1;
//    toString() turns the number into string
    for(let i = 0; i < num.toString().length; i++){
        // let number  = num.toString()[i]
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
    let result;
    if(num % 2 === 0){
        result = `Even`
    }
    else{
        result = `Odd`
    }
    return result;
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

console.log(squareFunction(22));



console.log(' ');
console.log('EXERCISE 4');

// (function calculateFactoriel(num){
//     if(num ===1 ){
//         return 1;
//     }
//     else{
//         let result  = num * calculateFactoriel(num - 1);
//         console.log(result)
//     }
    

    
// })(4);

// console.log( calculateFactoriel (10));

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
    if(typeof(element)==='number' && element !== Infinity){
        if(element > 0){
            positiveNumberArray.push(element)
            // console.log(element)
        }
    }

    else if (typeof(element) !== 'string' && element !==undefined && element !== null){
        for(j = 0; j < Object.values(element).length; j++){
            // console.log(element[j])
            let typeOfElement = element[j];
            if(typeof(typeOfElement) === 'number'){
                if(element[j] > 0){
                positiveNumberArray.push(element[j])
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
