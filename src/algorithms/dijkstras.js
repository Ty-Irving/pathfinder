import { animate } from '../table/animation';
import { findNodes, clearTable, searchArray, sortQueue} from '../table/tablesetup'
let nodesToAnimate = [];
export function dijkstras()
{
    clearTable();
	let nodeArray = findNodes();
    let queueList = [];
    let startNode = document.getElementsByClassName('start');
    let endNode = document.getElementsByClassName('end')
    let borderX = nodeArray[nodeArray.length - 1].x;
    let borderY = nodeArray[nodeArray.length - 1].y;
    let element;
    let x, y;
    sortQueue(nodeArray);
	let checkFinish = false;

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
    queueList.push(element)

    while(checkFinish === false)
    {
        
        if(queueList.length === 0)
        {
            animate(nodesToAnimate, null);
            return;
        }
        if(endNode[0].classList.contains('visited') === true)
        {
            let path = shortestPath(nodeArray, x, y);
            animate(nodesToAnimate, path);
            return;
        }
        sortQueue(queueList);
        x = queueList[0].x;
        y = queueList[0].y;
        //check to see if its visited

        if(x + 1 <= borderX)
        {
            checkNode((x+1), y, nodeArray, queueList, x, y);
        }

        if(x - 1 >= 0)
        {
            checkNode((x-1), y, nodeArray, queueList, x, y);
        }
        
        if(y + 1 <= borderY)
        {
            checkNode(x, (y+1), nodeArray, queueList, x, y);
        }

        if(y - 1 >= 0)
        {
            checkNode(x, (y-1), nodeArray, queueList, x, y);
            
        }
        queueList.shift();
    }
            
}

function checkNode(x,y, nodeArray, queueList, prevx,prevy)
{
    let obj, element;
    element = document.getElementById(x + '-' + (y));
    if(element.classList.contains('visited') === false && element.classList.contains('wall') === false)
    {
        element.classList.remove('unvisited');
        element.classList.add('visited');
        nodesToAnimate.push(element);
        obj = searchArray(x, y, nodeArray);
        obj.previous = searchArray(prevx,prevy,nodeArray);
        obj.distance = obj.previous.distance + 1;
        queueList.push(obj);

    }
    return queueList;
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






