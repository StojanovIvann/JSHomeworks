// Decription: Using prompt() display a dialog box that prompts the visitor for input. Will return null on 'Cancel' or the value provided on 'Ok'
// Action: Ask the user how much money he has, and depending on the value, suggest to him what he should do
const userMoney= prompt ("How much money do you have???");
if((userMoney > 0) && (userMoney < 5)){
    console.log('If you have', userMoney , "dollars you should stay home");
}
else if((userMoney < 30) && (userMoney > 5)){
    console.log('If you have', userMoney ,"dollars you shoud go to the moovies!");
}
else if(userMoney > 30){
    console.log('If you have', userMoney ,"dollars you shoud go out and party!!!");
}

// Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in

// Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:

// 0 - Rat
// 1 - Ox
// 2 - Tiger
// 3 - Rabbit
// 4 - Dragon
// 5 - Snake
// 6 - Horse
// 7 - Goat
// 8 - Monkey
// 9 - Rooster
// 10 - Dog
// 11 - Pig
const  year= parseInt(prompt("Enter your year"))
const chineseZodiac = (year - 4) % 12;
    if (chineseZodiac == 0) {
        console.log("Rat");
    } else if (chineseZodiac == 1) {
       console.log("Ox");
    } else if (chineseZodiac == 2) {
        console.log("Tiger");
    } else if (chineseZodiac == 3) {
        console.log("Rabbit");
    } else if (chineseZodiac == 4) {
        console.log("Dragon");
    } else if (chineseZodiac == 5) {
        console.log("Snake");
    } else if (chineseZodiac == 6) {
        console.log("Horse");
    } else if (chineseZodiac== 7) {
        console.log("Goat");
    } else if (chineseZodiac == 8) {
        console.log("Monkey");
    } else if (chineseZodiacIndex == 9) {
        console.log("Rooster");
    } else if (chineseZodiacIndex == 10) {
        console.log("Dog");
    } else if (chineseZodiacIndex == 11) {
        console.log("Pig");
    } else {
        chineseZodiac = "You entered ivalid year"; 
    }



// Write a program to find maximum between two numbers.
const num1 = parseInt(prompt ("Enter your first number"));
const  num2 = parseInt(prompt ("Enter your second number"));
if (num1 > num2){
    console.log(num1);
}
else {
    console.log(num2);  
}


//Write a program to find maximum between three numbers.
const numberOne = parseInt(prompt ("Enter your first number"));
const numberTwo = parseInt(prompt ("Enter your second number"));
const numberThree = parseInt (prompt ("Enter your third number"));
if ((numberOne > numberTwo) && (numberOne >numberThree)){
        console.log(numberOne);
}
else if((numberOne < numberTwo) && (numberTwo > numberThree)){
    console.log(numberTwo);
}
else if((numberOne < numberTwo) && (numberTwo <numberThree)  ){
  console.log(numberThree);
}



// Write a program to check whether a number is negative, positive or zero"
const number1= parseInt(prompt ("Enter zero, positive or negative number "));
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
    console.log("You didn't enter a number");
}


//Write a program that will accept user input between 1-7 (week number) and print week day.
const dayOfWeek= parseInt(prompt ("Enter a day of a week with number!"));
if ((dayOfWeek > 7) || (isNaN (dayOfWeek))){
    console.log("You didn't enter the correct number of you entered a text.");
}
if(dayOfWeek == 1){
    console.log("Monday");
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
 

//Write a program that will check if user typed an input that is a number or not
const numberOrText= prompt ("Enter number or something else!");
if ( isNaN (numberOrText)){
    console.log( "You entered a:", typeof (numberOrText));
}
else {
    console.log("You entered a:", typeof(numberOrText));
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

const physics = parseInt(prompt("Enter your Physics score (0-100)"));
const chemistry =  parseInt(prompt("Enter your Chemistry score  (0-100)"));;
const biology = parseInt(prompt("Enter your Buology score  (0-100)"));;
const mathematics = parseInt(prompt("Enter your Mathematics score  (0-100)"));;
const computer = parseInt(prompt("Enter your Computers score  (0-100)"));;
const  fullScore= (physics + chemistry + biology + mathematics + computer) ;
const avgScore = fullScore/5;
console.log("Your final grade is:");
  if(avgScore >= 90){
    console.log("Grade A")
}
else if(avgScore >= 80){
    console.log("Grade B")
}
else if(avgScore >= 70){
    console.log("Grade C")
}
else if(avgScore >= 60){
    console.log("Grade D")
}
else if(avgScore >= 40){
    console.log("Grade E")
}
else if(avgScore < 40){ 
    console.log("Grade F")
}
