
let arrayOfNumbers = [1,2,3,4,5];
let mainDiv = document.getElementById('mainDiv');
// console.log(mainDiv);
let ul = document.createElement('ul')
mainDiv.append(ul);
let sum = 0;
let result = document.createElement('p');
for (let i=0; i < arrayOfNumbers.length; i++){
    let li = document.createElement('li')
    ul.append(li);
    li.textContent +=arrayOfNumbers[i]; 
    sum += arrayOfNumbers[i];

}
result.innerText =`The sum of the array is :${sum}`;
mainDiv.append(result);
