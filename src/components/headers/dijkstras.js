export function dijkstras()
{
	let Array = findNodes();
    sortQueue(Array);
    
	//let checkFinish = false;
	console.log(Array);
	/*while(checkFinish === false)
	{
		//No outer Nodes have been checked
		if(document.getElementByClass("visited") === null)
		{	
			
		}
		
		//Atleast 1 outnode from start has been checked
		else
		{	
			
		}
	}	
    */
}


//Sorts queue, might be easier to do this some other way
//Sorts by distance from the start.

function sortQueue(queueList)
{
    queueList.sort((a, b) => {
        return a.distance - b.distance;
    });
}


function Node(x, y)
{
    this.x = x;
    this.y = y;
    this.start = false;
    this.end = false;
    this.distance = Infinity;
    this.wall = false;
    this.previous = null;
}


//Adds all nodes on the table created as objects to an array
function findNodes()
{
    let element = 0;
    let x = 0;
    let y = 0;
    let id;
    let node;
    let gridNodes = [];
    while(element != null)
    {
        id = x + '-' + y;
        element = document.getElementById(id);
        if(element === null)
        {
            x += 1;
            y = 0;
            id = x + '-' + y
            element = document.getElementById(id);
        }


        if(element != null)
        {
            node = new Node(x,y);
            if(x === 5)
            {
                node.distance = 5;
            }
            gridNodes.push(node)
        }
        y += 1;
    }
    return gridNodes;
}




/*
export function search()
{
    //let table = document.getElementById("pathfinder-table");
    //let gridMatrix = [];

}




/*

export function search()
{
    let node = document.getElementsByClassName("start");
    let location = node[0].id;
    console.log(node);
    newsearch(location);
}

async function newsearch(location)
{
    let endNode = document.getElementsByClassName("end");
    const Array = location.split("-");
    let neighbor;
    let element;

    //check to see if we get too high
    if(Array[1] <= 29)
    {
        neighbor = Array[0] + "-" + (parseInt(Array[1]) + 1);
        element = document.getElementById(neighbor);
        if(element === endNode)
        {
            return
        }
        if(element.className === 'unvisited')
        {
            element.classList.remove('unvisited');
            element.classList.add('visited');
           
                newsearch(neighbor);
         
            
        }
    }
    

    //check to see if we get too low
    if(Array[1] >= 1)
    {
        neighbor = Array[0] + "-" + (parseInt(Array[1]) - 1);
        element = document.getElementById(neighbor);
        if(element === endNode)
        {
            return
        }
        if(element.className === 'unvisited')
        {
            element.classList.remove('unvisited');
            element.classList.add('visited');
            
                newsearch(neighbor);
                console.log(neighbor);
          
        }
        console.log("here a4")
       
    }

    //check to see if we get too high
    if(Array[0] <= 14)
    {
        neighbor = (parseInt(Array[0]) + 1) + "-" + Array[1];
        element = document.getElementById(neighbor);
        if(element === endNode)
        {
            return
        }
        if(element.className === 'unvisited')
        {
            element.classList.remove('unvisited');
            element.classList.add('visited');
            
                newsearch(neighbor);
        
        }
    }


    //check to see if we get too low
    if(Array[0] >= 1)
    {
        neighbor = (parseInt(Array[0]) - 1) + "-" + Array[1];
        element = document.getElementById(neighbor);
        if(element === endNode)
        {
            return
        }
        if(element.className === 'unvisited')
        {
            element.classList.remove('unvisited');
            element.classList.add('visited');
            
                newsearch(neighbor);
           
        }
        
    }

}
*/