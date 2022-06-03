export function dijkstras()
{
	let nodeArray = findNodes();
    let queueList = [];
    let startNode = document.getElementsByClassName('start');
    let endNode = document.getElementsByClassName('end')
    let borderX = nodeArray[nodeArray.length - 1].x;
    let borderY = nodeArray[nodeArray.length - 1].y;
    let element;
    let obj;
    let x = 5, y = 5;
    sortQueue(nodeArray);
    
	let checkFinish = false;
	console.log(nodeArray);

	//
		//No outer Nodes have been checked
       
		if(document.getElementsByClassName("visited").length === 0)
		{	
			let idStart = startNode[0].id;
            let idEnd = endNode[0].id;
        
            let wordSplit = idEnd.split('-')
            element = searchArray(parseInt(wordSplit[0]), parseInt(wordSplit[1]), nodeArray);
            element.end = true;

            wordSplit = idStart.split('-');
            element = searchArray(parseInt(wordSplit[0]), parseInt(wordSplit[1]), nodeArray);
            element.distance = 0;
            element.start = true;

            x = element.x;
            y = element.y;
            
            if(x - 1 >= 0)
            {
                obj = searchArray(x-1, y, nodeArray);
                obj.distance = 1;
                obj.previous = searchArray(x,y, nodeArray);
                element = document.getElementById(obj.x + '-' + obj.y)
                element.classList.remove('unvisited');
                element.classList.add('visited');
                queueList.push(obj);
                
            }

            if(y - 1 >= 0)
            {
                obj = searchArray(x, y - 1, nodeArray);
                obj.distance = 1;
                element = document.getElementById(obj.x + '-' + obj.y);
                obj.previous = searchArray(x,y, nodeArray);
                element.classList.remove('unvisited');
                element.classList.add('visited');
                queueList.push(obj);
            }

            if(x + 1 <= borderX)
            {
                obj = searchArray(x + 1, y, nodeArray);
                obj.distance = 1;
                element = document.getElementById(obj.x+ '-' + obj.y)
                obj.previous = searchArray(x,y, nodeArray);
                element.classList.remove('unvisited');
                element.classList.add('visited');
                queueList.push(obj);
            }

            if(y + 1 <= borderY)
            {
                obj = searchArray(x, y + 1, nodeArray);
                obj.distance = 1;
                element = document.getElementById(obj.x + '-' + obj.y)
                obj.previous = searchArray(x,y, nodeArray);
                element.classList.remove('unvisited');
                element.classList.add('visited');
                queueList.push(obj);
            }     
		}
		while(checkFinish === false)
        {
            sortQueue(queueList);
            console.log(queueList);
            x = queueList[0].x;
            y = queueList[0].y;
            //check to see if its visited

            if(x + 1 <= borderX)
            {
                element = document.getElementById((x+1) + '-' + y)
                if(element.classList.contains('visited') === false)
                {
                    if(element.classList.contains('end') === true)
                    {
                        return;
                    }
                    element.classList.remove('unvisited');
                    element.classList.add('visited');
                    obj = searchArray(x+1, y, nodeArray);
                    obj.previous = searchArray(x,y,nodeArray);
                    obj.distance = obj.previous.distance + 1;
                    queueList.push(obj);
                }
            }

            if(x - 1 >= 0)
            {
                element = document.getElementById((x-1) + '-' + y)
                if(element.classList.contains('visited') === false)
                {
                    if(element.classList.contains('end') === true)
                    {
                        return;
                    }
                    element.classList.remove('unvisited');
                    element.classList.add('visited');
                    obj = searchArray(x-1, y, nodeArray);
                    obj.previous = searchArray(x,y,nodeArray);
                    obj.distance = obj.previous.distance + 1;
                    queueList.push(obj);
                }
            }
            
            if(y + 1 <= borderY)
            {
                element = document.getElementById(x + '-' + (y+1));
                if(element.classList.contains('visited') === false)
                {
                    if(element.classList.contains('end') === true)
                    {
                        return;
                    }
                    element.classList.remove('unvisited');
                    element.classList.add('visited');
                    obj = searchArray(x, y+1, nodeArray);
                    obj.previous = searchArray(x,y,nodeArray);
                    obj.distance = obj.previous.distance + 1;
                    queueList.push(obj);
                }
            }

            if(y - 1 >= 0)
            {
                element = document.getElementById(x + '-' + (y-1));
                if(element.classList.contains('visited') === false)
                {
                    if(element.classList.contains('end') === true)
                    {
                        return;
                    }
                    element.classList.remove('unvisited');
                    element.classList.add('visited');
                    obj = searchArray(x, y - 1, nodeArray);
                    obj.previous = searchArray(x,y,nodeArray);
                    obj.distance = obj.previous.distance + 1;
                    queueList.push(obj);

                }
            }
            console.log(queueList[0]);
            queueList.shift();
        }
            
	
}

function searchArray(a, b, arrayList)
{
    let obj = arrayList.find(o => o.x === a && o.y === b)
    return obj;
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