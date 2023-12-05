// Write a JavaScript program that calculates the total price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%. Print the result in the console.
let phones=30;
let phonePrice=119.95;
let tax= 5;
let priceTax;
let fullPrice;
priceTax=phonePrice*tax/100;
fullPrice=(phonePrice + priceTax)*phones;
console.log( 'The price of the phone is:', fullPrice);


// Write a JavaScript program that takes minutes and converts them to seconds. Print the result in the console.
const seconds=60;
let minutes=4;
let minutesInSeconds= minutes * seconds;
console.log( '4 minutes in seconds: ' , minutesInSeconds);


// Write a JavaScript program that takes a number and increments the number by +1 and prints the result in the console.
let number=3;
 number++;
console.log( 'number 3 inceased by 1 is:', number);


// Write a JavaScript program that takes the base and height of a triangle and calculates its area. Print the result in the console.
let baseOfTriangle=10;
let heightOfTriangle=12;
let areaOfTriangle= baseOfTriangle*heightOfTriangle/2;
console.log( 'The area of the triangle is:' , areaOfTriangle);


// Write a JavaScript program that takes length and width of a rectangle and finds its perimeter. Print the result in the console.
let lenghtOfRectangle=7;
let heightOfRectangle=8;
const perimeterOfRectangle= lenghtOfRectangle*heightOfRectangle*2;
console.log('The perimetar is:', perimeterOfRectangle);

// Write a JavaScript program that will calculate area of circle. Print the result in the console
let radius=3;
const p=3.14;
const areaOfCircle=radius*radius*p;
console.log('The area of the circle is:', areaOfCircle);
