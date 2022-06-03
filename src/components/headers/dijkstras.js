/**
 * #TODO: 
 *  - Go up down left right
 *  - Record distance from start
 * 
 * 
 */
//Adds all nodes on the table created as objects to an array

function findNodes()
{

}

/**
 * Check start node then from the start node we will check all around it add to prio list based on what we go to first and distance
 * add their new distance to their values and then go to try and visit neighbors set their distance to whatever it is once we are in
 * the else statement we can start going by the queue and just keep checking the first node in the prio list check their neighbors and
 * add them to the prio list resort and continue always check to see if any of the neighbors are the end if they are exit loop and 
 * display the visited nodes
 */

function Dijkstras()
{
	let Array = findNodes();
	let checkFinish = false;
	let queueList = [];
	while(checkFinish === false)
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
}


//Sorts queue, might be easier to do this some other way
//Sorts by distance from the start.
function sortQueue(queueList)
{

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