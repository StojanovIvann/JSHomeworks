
let arrayOfNumbers = [1,2,3,4,5];
let mainDiv = document.getElementById('mainDiv');
// console.log(mainDiv);
let ul = document.createElement('ul')
mainDiv.append(ul);
for (let i=0; i < arrayOfNumbers.length; i++){
    let li = document.createElement('li')
    ul.append(li);
    li.textContent +=arrayOfNumbers[i]; 
}