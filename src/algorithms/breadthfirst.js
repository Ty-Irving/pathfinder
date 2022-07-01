import { findNodes, clearTable, searchArray, sortQueue} from '../table/tablesetup'
import { animate } from '../table/animation';

let nodesToAnimate = [];
export default function depthfirst()
{
    clearTable();
    let queueList = [];
    let nodeArray = findNodes();
    let endNode = document.getElementsByClassName('end');
    let startNode = document.getElementsByClassName('start');
    let wordSplit = startNode[0].id.split('-');
    let obj;
    obj = searchArray(parseInt(wordSplit[0]), parseInt(wordSplit[1]), nodeArray);
    obj.distance = 0;
    queueList.push(obj)
    startNode[0].classList.add('visited');
    
    while(queueList.length > 0)
    {
        queueList = checkNeighbors(queueList[0].x, queueList[0].y, nodeArray, queueList);
        if(endNode[0].classList.contains('visited') === true)
        {
            let path = shortestPath(nodeArray, queueList[0].x, queueList[0].y);
            animate(nodesToAnimate, path);
            return;
        }
        queueList.shift();
        sortQueue(queueList)
    }
}

function checkNeighbors(x, y, nodeArray , queueList)
{
    let borderX = nodeArray[nodeArray.length - 1].x;
    let borderY = nodeArray[nodeArray.length - 1].y;
    let endNode = document.getElementsByClassName('end');


    if(y + 1 <= borderY)
    {
        queueList = checkNode(x, (y+1), queueList, nodeArray, x, y)
        if(endNode[0].classList.contains('visited')){
            return queueList;
        }
    }

    if(x + 1 <= borderX && y + 1 <= borderY) //check walls
    {
        queueList = checkNode((x+1), (y+1), queueList, nodeArray, x, y)
        if(endNode[0].classList.contains('visited')){
            return queueList;
        }
    }
    
    if(x - 1 >= 0)
    {
        queueList = checkNode((x-1), y, queueList, nodeArray, x, y)
        if(endNode[0].classList.contains('visited')){
            return queueList;
        }
    }

    if(x - 1 >= 0 && y + 1 <= borderY) // check walls
    {
        queueList = checkNode((x-1), (y+1), queueList, nodeArray, x, y)
        if(endNode[0].classList.contains('visited')){
            return queueList;
        }
    }

    if(x + 1 <= borderX)
    {
        queueList = checkNode((x+1), y, queueList, nodeArray, x, y);
        if(endNode[0].classList.contains('visited')){
            return queueList;
        }
    }

    if(x + 1 <= borderX && y - 1 >= 0) // check walls
    {

        queueList = checkNode((x+1), (y-1), queueList, nodeArray, x, y)
        if(endNode[0].classList.contains('visited')){
            return queueList;
        }
    }

    if(y - 1 >= 0)
    {

        queueList = checkNode(x, (y-1), queueList, nodeArray, x, y)
        if(endNode[0].classList.contains('visited')){
            return queueList;
        }
    }

    if(x - 1 >= 0 && y - 1 >= 0) // check walls
    {

        queueList = checkNode((x-1), (y-1), queueList, nodeArray, x, y)
        if(endNode[0].classList.contains('visited')){
            return queueList;
        }
    }

    return queueList;
}

function shortestPath(nodeArray, x, y)
{
    let obj = searchArray(x, y, nodeArray);
    let shortestPath = [];
    let element = document.getElementById(x + '-' + y);
    shortestPath.push(element);
    obj = obj.previous;
    while (element.classList.contains('start')!== true)
    {
        x = obj.x;
        y = obj.y; 
        element = document.getElementById(x + '-' + y);
        obj = obj.previous;
        if(element.classList.contains('start') === false)
        {
            shortestPath.push(element);
        }
        
    }
    return shortestPath;
}


function checkNode(x,y,queueList,nodeArray, prevx, prevy)
{
    let obj, element;
    if(document.getElementById(x + "-" + y).classList.contains('visited') === false && document.getElementById(x + "-" + y).classList.contains('wall') === false)
    {
        obj = searchArray(x, y, nodeArray);
        obj.previous = searchArray(prevx,prevy, nodeArray);
        obj.distance = obj.previous.distance + 1;
        queueList.push(obj);
        element = document.getElementById(x +'-'+ y);
        element.classList.add('visited');
        element.classList.remove('unvisited');
        nodesToAnimate.push(element);
    }
    return queueList
}

