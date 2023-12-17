let btn = document.getElementById('btn')

btn.addEventListener('click', function createTable(){
  
    let rows = parseInt(document.getElementById('rows').value);
    let columns = parseInt(document.getElementById('columns').value);
    let table = '<table class="table" border="1px">';

    if ((rows !== NaN) && (columns !==NaN)){
    
    for (let i = 0; i < rows; i++) {
      table += '<tr>  </tr>';

      for (let a = 0; a < columns; a++) {
        table += '<td style = "padding:30px" > </td>';
      }
    } 
    table += '</table>';
    let main =  document.getElementById('tableContainer');
    main.innerHTML = table

}
});