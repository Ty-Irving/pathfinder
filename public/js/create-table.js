function createTable()
{
    const table = document.getElementById('pathfinder-table')
    for (let row = 0; row < 25; row++) 
    {
        let row_name = "row-" + row;
        let new_row = document.createElement("tr");
        new_row.setAttribute("id", row_name);
        table.appendChild(new_row);
        for (let col = 0; col < 40; col++) 
        {
            let col_name = row + "-" + col;
            let new_col = document.createElement("td");
            new_col.setAttribute("id", col_name);
            new_row.appendChild(new_col)
            
        }
        
        console.log("yo");
    }
}
