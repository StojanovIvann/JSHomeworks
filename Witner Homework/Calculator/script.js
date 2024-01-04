let inputOne = document.getElementById('inputOne');
let inputTwo = document.getElementById('inputTwo');
let clear = document.getElementById('clearButton');
let equal = document.getElementById('equalButton');
let goBack = document.getElementById('deleteButton')

let numOne = '';
let numTwo = '';
let currentOperator = '';


function clearScreen() {
    inputOne.innerText = '';
    inputTwo.innerText = '';    
     currentOperator = '';
     numOne = ' ';
     numTwo = ' ';

};

clear.addEventListener('click', function(){
    clearScreen();
});

function deleteOneInput (){
    
};

goBack.addEventListener('click', function(){
    deleteOneInput();
});



function printNumber(number) {
    if (!currentOperator) {
        numOne += number;
        inputOne.innerText = numOne;
        console.log(inputOne.innerText);
    } 
    else {
        numTwo += number;
        inputTwo.innerText = numTwo;
    }
}



function calculateResult(firstNum, secondNum) {

    let result = 0;
     firstNum = parseFloat(numOne);
     secondNum = parseFloat(numTwo);

     if((firstNum > 99999999) ||(secondNum > 99999999)){
        result = 'Error'
     }
    else if (currentOperator == '+') {
        result = firstNum + secondNum;
        console.log(result);
    } 
    else if (currentOperator == '-') {
        result = firstNum - secondNum;
    } 
    else if (currentOperator == 'x') {
        result = firstNum * secondNum;
    } 
    else if (currentOperator == '/') {
        if(secondNum == 0){
            // console.log('error');
            result = 'Error';
        }
        else{
            result = firstNum / secondNum;
        }
     
    } 
    else {
        result = 'Error'
    }

    return result
}



function operation(operator) {
    if ((operator === '=') && (numOne && numTwo && currentOperator)) {
            let result = calculateResult(numOne, numTwo);
            inputTwo.innerText = result
            inputOne.innerText = '';
            numOne = result;
            numTwo = '';
            currentOperator = '';
    }

    else {
        if (numOne && !currentOperator) {
            currentOperator = operator;
            inputOne.innerText += operator;
        }
    }
}
equal.addEventListener('click', function(){
    operation('=');
});