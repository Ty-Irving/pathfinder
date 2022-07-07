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
        let cellsHeight = Math.floor((clientHeight - 100)/ 25);
        
        const table = document.getElementById('pathfinder-table');
        for (let row = 0; row < cellsHeight; row++)
        {
            let row_name = "row-" + row;
            let new_row = document.createElement('tr');
            new_row.setAttribute("id", row_name);
            new_row.setAttribute('draggable', true);
            new_row.setAttribute('class', 'table-row')
            table.appendChild(new_row);
            
            for (let col = 0; col < cellsWidth; col++) 
            {
                let col_name = row + "-" + col;
                let new_col = document.createElement("td");
                new_col.setAttribute('draggable', true);
                new_col.setAttribute("id", col_name);
                new_col.setAttribute("class", "unvisited")
                new_row.appendChild(new_col)
                
                
            }
        }
        let startX = Math.floor(cellsWidth/4);
        let cordY = Math.floor(cellsHeight/2.35);
        let endX = Math.floor(cellsWidth *.75);
        let cordStart = cordY + '-' + startX;
        let cordEnd = cordY + '-' + endX;
        
        document.getElementById(cordStart).classList.remove("unvisited")
        document.getElementById(cordEnd).classList.remove("unvisited")
        document.getElementById(cordStart).setAttribute('draggable', 'true')
        document.getElementById(cordEnd).setAttribute('draggable', 'true')
        document.getElementById(cordStart).classList.add("start")
        document.getElementById(cordEnd).classList.add("end")
     
    }
    render(){
        return (
            <table id = "pathfinder-table" className="table"></table>
          )
    }
  
}
