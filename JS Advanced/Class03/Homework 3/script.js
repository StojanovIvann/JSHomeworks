let button = document.getElementById('btn');
let tableDiv = document.getElementById('tableDiv');
let starWarsApi = 'https://swapi.dev/api/people/1/';
let dataArray = [];
fetch(starWarsApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(myJson);
      dataArray.push(myJson)

    });


console.log(dataArray);
function createTable(){
    let table
    let header 
        table = `<table border = "2px">
        <tr>
            <th> Height </th>
            <th> Weight </th>
            <th> Eye Color </th>
            <th> Hair Color </th>
        <tr>
       `
        for(let i = 0; i<dataArray.length; i++){
            if(dataArray[i].name){
                header = `<h1> ${dataArray[i].name} </h1>`
            }
           else{
            header = ' ';
           }
           table +=`<tr>`
           table +=`<td> ${dataArray[i].height} </td>`
           table += `<td> ${dataArray[i].mass} </td>`
           table += `<td> ${dataArray[i].eye_color} </td>`
           table += `<td> ${dataArray[i].hair_color} </td>`
           table += `</tr>`
           
        }
       table += `</table>`
        
        tableDiv.innerHTML += header;
        tableDiv.innerHTML += table;
        createdTable = true;
    }


button.addEventListener('click', function(){
    createTable()
})
