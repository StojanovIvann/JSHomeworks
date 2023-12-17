let btn = document.getElementById('btn')

btn.addEventListener('click', function createTable(){
  
    let rows = parseInt(document.getElementById('rows').value);
    let columns = parseInt(document.getElementById('columns').value);
    let table = '<table class="table" border="1px">';
    let text = " ";

    if ((rows !== NaN) && (columns !==NaN)){
    
    for (let i = 0; i < rows; i++) {
      table += `<tr></tr>`;
  

      for (let j = 0; j < columns; j++) {
        table += `<td style = "padding:30px" > Row ${i + 1} , Column ${j + 1} </td>`;
        
      }
      
    } 
    table += '</table>';
    let main =  document.getElementById('tableContainer');
    main.innerHTML = table

}
});