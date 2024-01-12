
let recepieName = prompt('What is the name of the recepie?');
let recepieIngidience= prompt('How many ingridiences we are going to use? (enter a number)');
let parsedIngridience = parseInt(recepieIngidience);

const div = document.querySelector('div');
const h1 = document.createElement('h1');

h1.innerText = recepieName;
div.append(h1);

const ul = document.createElement('ul');
div.append(ul);

        let numOfINg =0;
    for (let i=0; i < parsedIngridience; i++ ){
        numOfINg += parsedIngridience[i]
        let nameOfIngridient = prompt("Ingridient?");
        const li = document.createElement('li');
        li.innerText = nameOfIngridient;            
        ul.append(li);
}
