// Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:
// object
// boolean
// number
// string
// undefined

function checkInputType (input){
   let inputType = typeof input;
   console.log(`The type of the input is :${inputType}`)
   return inputType;

}
let inputTypeObject = checkInputType ({});
let inputTypeUndefined = checkInputType();
let inputTypeString = checkInputType("");
let inputTypeNum = checkInputType(4);
let inputTypeBoolean = checkInputType(false);


// Write a JavaScript function that will return:
// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
function conversationYears ( humanYears){
  let convertInDogs = humanYears* 7;
  return convertInDogs
}

let parsedHumanYears=parseInt(prompt("How old are you"))
let convertInDogs = conversationYears (parsedHumanYears)
console.log(`${parsedHumanYears} years in dog years is: ${convertInDogs} years`)


// The ATM should give cash
// Should return "Not enough money" if you request more money
// Should return the ammount withdrawn and money left on the account if you have enough
// Note: Hardcode your account money in the program
// Bonus: Make it work with prompt()!
let cashOut=prompt("How much money do you want to cash out");
let parsedCashOut=(parseFloat/(cashOut));
let balanceStatus = 230;
let withdrawn =balanceStatus - parsedCashOut;
function atm (withdrawn){
   if (cashOut > balanceStatus){
      console.log(`You dont have enaugh money on your account`)
   }
    else if (cashOut <= balanceStatus){
       withdrawn= balanceStatus - cashOut;
      console.log("You've been cashed out. Please take your card");
      console.log(`You' have ${withdrawn} left on your account`);
   }
   return withdrawn;
}
let withdrawnMoney = atm(withdrawn)

