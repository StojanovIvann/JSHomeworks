// Decription: Using prompt() display a dialog box that prompts the visitor for input. Will return null on 'Cancel' or the value provided on 'Ok'
// Action: Ask the user how much money he has, and depending on the value, suggest to him what he should do
const userMoney= prompt ("How much money do you have???");
if((userMoney > 0) && (userMoney < 5)){
    console.log('If you have', userMoney , "dollars you should stay home")
}
else if((userMoney < 20) && (userMoney > 5)){
    console.log('If you have', userMoney ,"dollars you shoud go to the moovies!")
}
else if(userMoney > 20){
    console.log('If you have', userMoney ,"dollars you shoud go out and party!!!")
}

// Write a program to find maximum between two numbers.
const num1 = prompt ("Enter your first number");
const  num2 = prompt ("Enter your second number");
if (num1 > num2){
    console.log(num1);
}
else if(num1 < num2){
    console.log(num2);
}


//Write a program to find maximum between three numbers.
const numberOne = prompt ("Enter your first number");
const numberTwo = prompt ("Enter your second number");
const numberThree = prompt ("Enter your third number");
if ((numberOne > numberTwo) && (numberOne > numberThree)){
        console.log(numberOne);
}
else if((numberOne < numberTwo) && (numberTwo > numberThree)){
    console.log(numberTwo);
}
else if((numberOne < numberTwo) && (numberTwo < numberThree)  ){
  console.log(numberThree);
}



// Write a program to check whether a number is negative, positive or zero"
const number1= prompt ("Enter zero, positive or negative number ");
if (number1 == 0){
    console.log("The number you entered is zero");
}
else if(number1 < 0){
    console.log(" The number you entered is negative");
}
else if (number1 > 0){
    console.log("The number you entered is positive");
}
else{
    console.log("You didn't enter a number")
}


//Write a program that will accept user input between 1-7 (week number) and print week day.

const dayOfWeek= prompt ("Enter a day of a week with number!");
if(dayOfWeek == 1){
    console.log("Monday")
}
else if(dayOfWeek == 2){
    console.log("Tuseday");
}
else if (dayOfWeek == 3){
    console.log("Wednesday");
}
else if (dayOfWeek == 4){
    console.log("Thursday");
}
else if(dayOfWeek ==5){
    console.log("Friday");
}
else if(dayOfWeek == 6){
    console.log("Saturday");
}
else if(dayOfWeek == 7){
    console.log("Sunday");
}
else {
    console.log("ERROR");
}

//Write a program that will check if user typed an input that is a number or not
const numberOrText= prompt ("Enter number or something else!");
if (numberOrText == NaN){
    console.log("You didn't enter a number");
}
else{
    console.log("You entered the number:",  numberOrText);
}

// Write a program to input marks of five subjects 
// Physics, Chemistry, Biology, Mathematics and Computer.
//  Calculate percentage and grade according to following: 
//  Percentage >= 90% : Grade A 
//  Percentage >= 80% : Grade B
//  Percentage >= 70% : Grade C
//  Percentage >= 60% : Grade D
//  Percentage >= 40% : Grade E
//  Percentage < 40% : Grade F

const testScore= prompt ("Enter your % of the score  from the test!");
if (testScore == NaN){
    console.log("Error")
}
 else if(testScore >= 90){
    console.log("Grade A")
}
else if(testScore >= 80){
    console.log("Grade B")
}
else if(testScore >= 70){
    console.log("Grade C")
}
else if(testScore >= 60){
    console.log("Grade D")
}
else if(testScore >= 40){
    console.log("Grade E")
}
else if(testScore < 40){ 
    console.log("Grade F")
}