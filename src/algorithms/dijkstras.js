import { animate } from '../table/animation';
import { findNodes, clearTable, searchArray, sortQueue} from '../table/tablesetup'

export default function dijkstras()
{
    clearTable();
	let nodeArray = findNodes();
    let queueList = [];
    let nodesToAnimate = [];
    let startNode = document.getElementsByClassName('start');
    let endNode = document.getElementsByClassName('end')
    let borderX = nodeArray[nodeArray.length - 1].x;
    let borderY = nodeArray[nodeArray.length - 1].y;
    let element;
    let obj;
    let x, y;
    sortQueue(nodeArray);
	let checkFinish = false;

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
        
        if(x + 1 <= borderX)
        {
            obj = searchArray(x + 1, y, nodeArray);
            obj.distance = 1;
            element = document.getElementById(obj.x+ '-' + obj.y)
            obj.previous = searchArray(x,y, nodeArray);
            if(element.classList.contains('wall') !== true)
            {
                element.classList.remove('unvisited');
                element.classList.add('visited');
                nodesToAnimate.push(element);
                queueList.push(obj);
            }
        }

        if(x - 1 >= 0)
        {
            obj = searchArray(x-1, y, nodeArray);
            obj.distance = 1;
            obj.previous = searchArray(x,y, nodeArray);
            element = document.getElementById(obj.x + '-' + obj.y)
            if(element.classList.contains('wall') !== true)
            {
                element.classList.remove('unvisited');
                element.classList.add('visited');
                nodesToAnimate.push(element);
                queueList.push(obj);
            }
            
        }

        if(y - 1 >= 0)
        {
            obj = searchArray(x, y - 1, nodeArray);
            obj.distance = 1;
            element = document.getElementById(obj.x + '-' + obj.y);
            obj.previous = searchArray(x,y, nodeArray);
            if(element.classList.contains('wall') !== true)
            {
                element.classList.remove('unvisited');
                element.classList.add('visited');
                nodesToAnimate.push(element);
                queueList.push(obj);
            }
        }

        if(y + 1 <= borderY)
        {
            obj = searchArray(x, y + 1, nodeArray);
            obj.distance = 1;
            element = document.getElementById(obj.x + '-' + obj.y)
            obj.previous = searchArray(x,y, nodeArray);
            if(element.classList.contains('wall') !== true)
            {
                element.classList.remove('unvisited');
                element.classList.add('visited');
                nodesToAnimate.push(element);
                queueList.push(obj);
            }
        }     
    }

    while(checkFinish === false)
    {
        if(queueList.length === 0)
        {
            animate(nodesToAnimate, null);
            return;
        }
        sortQueue(queueList);
        x = queueList[0].x;
        y = queueList[0].y;
        //check to see if its visited

        if(x + 1 <= borderX)
        {
            element = document.getElementById((x+1) + '-' + y)
            if(element.classList.contains('visited') === false && element.classList.contains('wall') === false)
            {
                if(element.classList.contains('end') === true)
                { 
                    let path = shortestPath(nodeArray, x, y);
                    animate(nodesToAnimate, path);
                    return;
                }
                element.classList.remove('unvisited');
                element.classList.add('visited');
                nodesToAnimate.push(element);
                obj = searchArray(x+1, y, nodeArray);
                obj.previous = searchArray(x,y,nodeArray);
                obj.distance = obj.previous.distance + 1;
                queueList.push(obj);
            }
        }

        if(x - 1 >= 0)
        {
            element = document.getElementById((x-1) + '-' + y)
            if(element.classList.contains('visited') === false && element.classList.contains('wall') === false)
            {
                if(element.classList.contains('end') === true)
                {
                    let path = shortestPath(nodeArray, x, y);
                    animate(nodesToAnimate, path);
                    return;
                }
                
                element.classList.remove('unvisited');
                element.classList.add('visited');
                nodesToAnimate.push(element);
                obj = searchArray(x-1, y, nodeArray);
                obj.previous = searchArray(x,y,nodeArray);
                obj.distance = obj.previous.distance + 1;
                queueList.push(obj);
            }
        }
        
        if(y + 1 <= borderY)
        {
            element = document.getElementById(x + '-' + (y+1));
            if(element.classList.contains('visited') === false && element.classList.contains('wall') === false)
            {
                if(element.classList.contains('end') === true)
                {
                    let path = shortestPath(nodeArray, x, y);
                    animate(nodesToAnimate, path);
                    return;
                }
                element.classList.remove('unvisited');
                element.classList.add('visited');
                nodesToAnimate.push(element);
                obj = searchArray(x, y+1, nodeArray);
                obj.previous = searchArray(x,y,nodeArray);
                obj.distance = obj.previous.distance + 1;
                queueList.push(obj);
            }
        }

        if(y - 1 >= 0)
        {
            element = document.getElementById(x + '-' + (y-1));
            if(element.classList.contains('visited') === false && element.classList.contains('wall') === false)
            {
                if(element.classList.contains('end') === true)
                {
                    let path = shortestPath(nodeArray, x, y);
                    animate(nodesToAnimate, path);
                    return;
                }
                element.classList.remove('unvisited');
                element.classList.add('visited');
                nodesToAnimate.push(element);
                obj = searchArray(x, y - 1, nodeArray);
                obj.previous = searchArray(x,y,nodeArray);
                obj.distance = obj.previous.distance + 1;
                queueList.push(obj);

            }
        }
        queueList.shift();
    }
            
}

function shortestPath(nodeArray, x, y)
{
    let obj = searchArray(x, y, nodeArray);
    let shortestPath = [];
    let element = document.getElementById(x + '-' + y);
    let limit = obj.distance;
    shortestPath.push(element);
    obj = obj.previous;
    for(let i = 0; i < limit - 1; i++)
    {
        x = obj.x;
        y = obj.y; 
        element = document.getElementById(x + '-' + y);
        obj = obj.previous;
        shortestPath.push(element);
    }
    return shortestPath;
}






