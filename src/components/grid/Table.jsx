import "./table.scss"
import { Component } from 'react';


export default class Table extends Component {

    componentDidMount()
    {
        const table = document.getElementById('pathfinder-table');
        for (let row = 0; row < 16; row++)
        {
            let row_name = "row-" + row;
            let new_row = document.createElement('tr');
            new_row.setAttribute("id", row_name)
           
            table.appendChild(new_row);
            
            for (let col = 0; col < 31; col++) 
            {
                let col_name = row + "-" + col;
                let new_col = document.createElement("td");
                new_col.setAttribute("id", col_name);
                new_col.setAttribute("class", "unvisited")
                new_row.appendChild(new_col)

                
            }
        }
        document.getElementById('8-5').bgColor = 'green';
        document.getElementById('8-23').bgColor = 'red';
        document.getElementById('8-5').classList.remove("unvisited")
        document.getElementById('8-23').classList.remove("unvisited")
        document.getElementById('8-5').classList.add("start")
        document.getElementById('8-23').classList.add("end")

     
    }
    render(){
        return (
            <table id = "pathfinder-table"></table>
          )
    }
  
}
