import "./table.scss"
import React, { Component } from 'react';

export default class Table extends Component {
    
    componentDidMount()
    {
    
        if(document.getElementById("0-0") != null)
        {
            return
        }

        let clientWidth = document.documentElement.clientWidth;
        let clientHeight = document.documentElement.clientHeight;

        let cellsWidth = Math.floor((clientWidth)/25);
        let cellsHeight = Math.floor((clientHeight - 275)/ 25);
        console.log(cellsWidth, cellsHeight);
        const table = document.getElementById('pathfinder-table');
        for (let row = 0; row < cellsHeight; row++)
        {
            let row_name = "row-" + row;
            let new_row = document.createElement('tr');
            new_row.setAttribute("id", row_name)
           
            table.appendChild(new_row);
            
            for (let col = 0; col < cellsWidth; col++) 
            {
                let col_name = row + "-" + col;
                let new_col = document.createElement("td");
                new_col.setAttribute("id", col_name);
                new_col.setAttribute("class", "unvisited")
                new_row.appendChild(new_col)
                
                
            }
        }
        document.getElementById('10-4').classList.remove("unvisited")
        document.getElementById('6-31').classList.remove("unvisited")
        document.getElementById('10-4').setAttribute('draggable', 'true')
        document.getElementById('6-31').setAttribute('draggable', 'true')
        document.getElementById('10-4').classList.add("start")
        document.getElementById('6-31').classList.add("end")
     
    }
    render(){
        return (
            <table id = "pathfinder-table"></table>
          )
    }
  
}
