import { animate } from '../table/animation';
import { findNodes, clearTable, searchArray, sortQueue} from '../table/tablesetup'

export default function astar()
{
    clearTable();
    let nodeArray = findNodes();
    let queueList = [];
    let nodesToAnimate = [];
    let startNode = document.getElementsByClassName('start');
    let endNode = document.getElementsByClassName('end');
    let borderX = nodeArray[nodeArray.length - 1].x;
    let borderY = nodeArray[nodeArray.length - 1].y;
    let element;
    let obj;
    let x, y;
    obj = searchArray(startNode, nodeArray);
    queueList.push(obj)
    sortQueue(queueList);

    

    while(queueList.length > 0)
    {
        
    }



}

function checkNeighbors(queueList, nodeArray)
{
    if(x + 1 <= borderX)
    {
        addToQueue(x+1, y, nodeArray);
    }

    if(x - 1 >= 0)
    {
        addToQueue(x-1, y, nodeArray);
    }

    if(y + 1 <= borderY)
    {
        addToQueue(x, y+1, nodeArray);
    }

    if(y - 1 >= 0)
    {
        addToQueue(x, y-1, nodeArray);
    }

    if(x + 1 <= borderX && y + 1 <= borderY) //check walls
    {
        addToQueue(x+1, y+1, nodeArray);
    }

    if(x - 1 >= 0 && y + 1 <= borderY) // check walls
    {
        addToQueue(x-1, y+1, nodeArray);
    }

    if(x + 1 <= borderX && y - 1 >= 0) // check walls
    {
        addToQueue(x+1, y-1, nodeArray);
    }

    if(x - 1 >= 0 && y - 1 >= 0) // check walls
    {
        addToQueue(x-1, y-1, nodeArray);
    }

    return queueList;
}

function addToQueue(x, y, nodeArray)
{
    obj = searchArray(x, y, nodeArray);
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

//Find Distance from End or Start
function findDist(x,y, nodeArray)
{
    let startNode = document.getElementsByClassName('start');
    let endNode = document.getElementsByClassName('end');
    let idStart = startNode[0].id;
    let idEnd = endNode[0].id;

    let wordSplit = idEnd.split('-')
    let end = searchArray(parseInt(wordSplit[0]), parseInt(wordSplit[1]), nodeArray);
    

    wordSplit = idStart.split('-');
    let start = searchArray(parseInt(wordSplit[0]), parseInt(wordSplit[1]), nodeArray);

    let obj = searchArray(x,y, nodeArray);

    obj.gcost = distCalc(start, obj);
    obj.hcost = distCalc(end, obj);
    obj.fcost = obj.gcost + obj.hcost;
}

function distCalc(goal, pos);
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