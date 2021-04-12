
let numRows;
let numCols;
let table_body; 
let currentRow;
let sum = 0;

// Create column
$(function() {
  // Create Matrix
  $(".main-content__buttons-Matrix").on('click', function() {
    numRows = $('#rowsInput').val();
    numCols = $('#colsInput').val();
    
    table_body = `<thead class="dynamicMatrix__title">
        <tr>
          <th rwospan=2>Row</th>
          <th colspan=${numCols}>Column</th>
        </tr>
      </thead>`;
    
    for(let i = 0; i < numRows; i++){
      currentRow = `row${i}`;
      table_body+=`<tr><th>${i}</th>`;
      for(let j = 0; j < numCols; j++) {
          table_body +='<td class="dynamicMatrix__cell">';
          table_body +=`<input type="number" id="row${i}col${j}" placeholder="value"/>`;
          table_body +='</td>';
        }
      table_body+='</tr>';
    }
    table_body+='</table>';
    $('#dynamicMatrix').html(
      `${table_body}`
    );   
    
  });
  
  // Check the total value
  $('.main-content__buttons-Total').on( 'click', function () {
    numRows = $('#rowsInput').val();
    numCols = $('#colsInput').val();
    console.log('Works');
    // Rows Sum
    let rowSum = 0;
    for (let i = 0; i < numRows; i++) {
      sum = 0;
      for (let j = 0; j < numCols; j++) {
        let rowvalue = Number( $(`#row${i}col${j}`).val() );
        console.log(rowvalue);
        sum += rowvalue;
      }
      if (sum !== 100 ) { alert(`In Row${i}, ${sum} Not equal 100`); }
      else { alert(`In Row${i}, ${sum} equal 100`); }
    }

    // Col sum
    let colSum = 0;
    for (let k = 0; k < numCols; k++) {
      sum = 0;
      for (let l = 0; l < numRows; l++) {
        let colvalue = Number( $(`#row${l}col${k}`).val() );
        sum += colvalue;
      }
      if (sum !== 100 ) { alert(`In Col${k}, ${sum} Not equal 100`); }
      else { alert(`In Col${k}, ${sum} equal 100`); }
      
    }

  });
  
});




