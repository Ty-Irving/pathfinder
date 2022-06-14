import { animate } from '../table/animation';
import { findNodes, clearTable, searchArray, sortQueueAStar} from '../table/tablesetup'

let nodesToAnimate = [];
let queueList = [];

export default function astar()
{
    clearTable();
    let nodeArray = findNodes();
    let startNode = document.getElementsByClassName('start');
    let wordSplit = startNode[0].id.split('-');
    let endNode = document.getElementsByClassName('end');
    let obj;
    obj = searchArray(parseInt(wordSplit[0]), parseInt(wordSplit[1]), nodeArray);
    queueList.push(obj)
    sortQueueAStar(queueList);

    
    
    while(queueList.length > 0)
    {
        queueList = checkNeighbors(queueList[0].x, queueList.y, nodeArray, queueList);
        queueList.shift();
        sortQueueAStar(queueList);
        if(endNode.classList.contains('visited'));
        {
            animate(nodesToAnimate, null);
        }
    }

    if(queueList.length === 0)
    {
        animate(nodesToAnimate, null);
    }



}

function checkNeighbors(x, y, nodeArray , queueList)
{
    let borderX = nodeArray[nodeArray.length - 1].x;
    let borderY = nodeArray[nodeArray.length - 1].y;

    if(x + 1 <= borderX)
    {
        addToQueue(x+1, y, nodeArray, queueList);
        nodesToAnimate.push(document.getElementById(x+1 +'-'+ y));
    }

    if(x - 1 >= 0)
    {
        addToQueue(x-1, y, nodeArray, queueList);
        nodesToAnimate.push(document.getElementById(x-1 +'-'+ y));
    }

    if(y + 1 <= borderY)
    {
        addToQueue(x, y+1, nodeArray, queueList);
        nodesToAnimate.push(document.getElementById(x +'-'+ y+1));
    }

    if(y - 1 >= 0)
    {
        addToQueue(x, y-1, nodeArray, queueList);
        nodesToAnimate.push(document.getElementById(x +'-'+ y-1));
    }

    if(x + 1 <= borderX && y + 1 <= borderY) //check walls
    {
        addToQueue(x+1, y+1, nodeArray, queueList);
        nodesToAnimate.push(document.getElementById(x+1 +'-'+ y+1));
    }

    if(x - 1 >= 0 && y + 1 <= borderY) // check walls
    {
        addToQueue(x-1, y+1, nodeArray, queueList);
        nodesToAnimate.push(document.getElementById(x-1 +'-'+ y+1));
    }

    if(x + 1 <= borderX && y - 1 >= 0) // check walls
    {
        addToQueue(x+1, y-1, nodeArray, queueList);
        nodesToAnimate.push(document.getElementById(x+1 +'-'+ y-1));
    }

    if(x - 1 >= 0 && y - 1 >= 0) // check walls
    {
        addToQueue(x-1, y-1, nodeArray, queueList);
        nodesToAnimate.push(document.getElementById(x-1 +'-'+ y-1));
    }

    return queueList;
}

function addToQueue(x, y, nodeArray, queueList)
{
    let obj = searchArray(x, y, nodeArray);
    obj = findDist(obj);
    let element = document.getElementById(obj.x+ '-' + obj.y)
    obj.previous = searchArray(x,y, nodeArray);
    if(element.classList.contains('wall') !== true)
    {
        element.classList.remove('unvisited');
        element.classList.add('visited');
        nodesToAnimate.push(element);
        queueList.push(obj);
    }
}

//Find Distance from End or Start
function findDist(obj, nodeArray)
{
    let startNode = document.getElementsByClassName('start');
    let endNode = document.getElementsByClassName('end');
    let idStart = startNode[0].id;
    let idEnd = endNode[0].id;

    let wordSplit = idEnd.split('-')
    let end = searchArray(parseInt(wordSplit[0]), parseInt(wordSplit[1]), nodeArray);
    

    wordSplit = idStart.split('-');
    let start = searchArray(parseInt(wordSplit[0]), parseInt(wordSplit[1]), nodeArray);

    obj.gcost = distCalc(start, obj);
    obj.hcost = distCalc(end, obj);
    obj.fcost = obj.gcost + obj.hcost;

    return obj;
}

function distCalc(goal, pos)
{
    let a;
    let b;
    let c;

    if(goal.x < pos.x)
    {
        if(goal.y > pos.y)
        {
            a = (pos.x - goal.x);
            b = (goal.y - pos.y);
            c = Math.sqrt(a^2 + b^2);
            return(c);
        }
        else if(goal.y < pos.y)
        {
            a = (pos.x - goal.x);
            b = (pos.y - goal.y);
            c = Math.sqrt(a^2 + b^2);
            return(c);
        } 
        else 
        {
            return(pos.x - goal.x);
        }
    }
    else if(goal.x > pos.x)
    {
        if(goal.y > pos.y)
        {
            a = (goal.x - pos.x);
            b = (goal.y - pos.y);
            c = Math.sqrt(a^2 + b^2);
            return(c);
        }
        else if(goal.y < pos.y)
        {
            a = (goal.x - pos.x);
            b = (pos.y - goal.y);
            c = Math.sqrt(a^2 + b^2);
            return(c);
        } 
        else 
        {
            return(goal.x - pos.x);
        }
    }
    else 
    {
        if(goal.y > pos.y)
        {
            return(goal.y - pos.y);
        }
        else if(goal.y < pos.y)
        {
            return(pos.y - goal.y);
        } 
    }
}