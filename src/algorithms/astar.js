import { animate } from '../table/animation';
import { findNodes, clearTable, searchArray, sortQueueAStar} from '../table/tablesetup'

let nodesToAnimate = [];

export default function astar()
{
    clearTable();
    let queueList = [];
    let nodeArray = findNodes();
    let startNode = document.getElementsByClassName('start');
    let wordSplit = startNode[0].id.split('-');
    let endNode = document.getElementsByClassName('end');
    let obj;
    obj = searchArray(parseInt(wordSplit[0]), parseInt(wordSplit[1]), nodeArray);
    sortQueueAStar(queueList);
    queueList.push(obj)

    
    while(queueList.length > 0)
    {
        queueList = checkNeighbors(queueList[0].x, queueList[0].y, nodeArray, queueList);
        console.log("shifted ", queueList[0]);
        if(endNode[0].classList.contains('visited') === true)
        {
            let path = shortestPath(nodeArray, queueList[0].x, queueList[0].y);
            console.log(path)
            animate(nodesToAnimate, path);
            return;
        }
        sortQueueAStar(queueList);
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
       
        if(document.getElementById((x+1) + "-"+y).classList.contains('visited') === false && document.getElementById((x+1) + "-"+y).classList.contains('wall')=== false)
        {
            queueList = addToQueue((x+1), y, nodeArray, queueList, searchArray(x, y, nodeArray));
            nodesToAnimate.push(document.getElementById((x+1) +'-'+ y));     
        }
       
    }

    if(x - 1 >= 0)
    {
        if(document.getElementById((x-1) + "-" + y).classList.contains('visited')=== false && document.getElementById((x-1) + "-"+y).classList.contains('wall')=== false)
        {
            queueList = addToQueue((x-1), y, nodeArray, queueList, searchArray(x, y, nodeArray));
            nodesToAnimate.push(document.getElementById((x-1) +'-'+ y));
        }
    }

    if(y + 1 <= borderY)
    {

        if(document.getElementById(x + "-" + (y+1)).classList.contains('visited') === false && document.getElementById(x + "-" + (y+1)).classList.contains('wall') === false)
        {
            queueList = addToQueue(x, (y + 1), nodeArray, queueList, searchArray(x, y, nodeArray));
            nodesToAnimate.push(document.getElementById(x +'-'+ (y+1)));
        }
    }

    if(y - 1 >= 0)
    {
        if(document.getElementById(x + "-"+ (y-1)).classList.contains('visited')=== false && document.getElementById(x + "-"+ (y-1)).classList.contains('wall')=== false)
        {
            queueList = addToQueue(x, (y-1), nodeArray, queueList, searchArray(x, y, nodeArray));
            nodesToAnimate.push(document.getElementById(x +'-'+ (y-1)));
        }
    }

    if(x + 1 <= borderX && y + 1 <= borderY) //check walls
    {
        if(document.getElementById((x+1) + "-" + (y+1)).classList.contains('visited') === false && document.getElementById((x+1) + "-" + (y+1)).classList.contains('wall') === false)
        {
            if(document.getElementById((x+1) + "-" + (y)).classList.contains('wall') === false)
            {
                queueList = addToQueue((x+1), (y+1), nodeArray, queueList,searchArray((x+1), y, nodeArray));
                nodesToAnimate.push(document.getElementById((x+1) +'-'+ (y+1)));
            }
            else if (document.getElementById((x) + "-" + (y+1)).classList.contains('wall') === false)
            {
                queueList = addToQueue((x+1), (y+1), nodeArray, queueList,searchArray(x, (y+1), nodeArray));
                nodesToAnimate.push(document.getElementById((x+1) +'-'+ (y+1)));
            }

        }
    }

    if(x - 1 >= 0 && y + 1 <= borderY) // check walls
    {
        if(document.getElementById((x-1) + "-" + (y+1)).classList.contains('visited') === false && document.getElementById((x-1) + "-" + (y+1)).classList.contains('wall') === false)
        {
            if(document.getElementById((x) + "-" + (y+1)).classList.contains('wall') === false)
            {
                queueList = addToQueue((x-1), (y+1), nodeArray, queueList,searchArray(x, (y+1), nodeArray));
                nodesToAnimate.push(document.getElementById((x-1) +'-'+ (y+1)));
            }
            else if (document.getElementById((x-1) + "-" + y).classList.contains('wall') === false)
            {
                queueList = addToQueue((x-1), (y+1), nodeArray, queueList,searchArray((x-1), y, nodeArray));
                nodesToAnimate.push(document.getElementById((x-1) +'-'+ (y+1)));
            }

        }
    }

    if(x + 1 <= borderX && y - 1 >= 0) // check walls
    {
        if(document.getElementById((x+1) + "-" + (y-1)).classList.contains('visited') === false && document.getElementById((x+1) + "-" + (y-1)).classList.contains('wall') === false)
        {
            if(document.getElementById((x+1) + "-" + (y)).classList.contains('wall') === false)
            {
                queueList = addToQueue((x+1), (y-1), nodeArray, queueList,searchArray((x+1), y, nodeArray));
                nodesToAnimate.push(document.getElementById((x+1) +'-'+ (y-1)));
            }
            else if (document.getElementById((x) + "-" + (y-1)).classList.contains('wall') === false)
            {
                queueList = addToQueue((x+1), (y-1), nodeArray, queueList,searchArray(x, (y-1), nodeArray));
                nodesToAnimate.push(document.getElementById((x+1) +'-'+ (y-1)));
            }

        }
    }

    if(x - 1 >= 0 && y - 1 >= 0) // check walls
    {

        if(document.getElementById((x-1) + "-" + (y-1)).classList.contains('visited') === false && document.getElementById((x-1) + "-" + (y-1)).classList.contains('wall') === false)
        {
            if(document.getElementById((x) + "-" + (y-1)).classList.contains('wall') === false)
            {
                queueList = addToQueue((x-1), (y-1), nodeArray, queueList,searchArray(x, (y-1), nodeArray));
                nodesToAnimate.push(document.getElementById((x-1) +'-'+ (y-1)));
            }
            else if (document.getElementById((x-1) + "-" + y).classList.contains('wall') === false)
            {
                queueList = addToQueue((x-1), (y-1), nodeArray, queueList,searchArray((x-1), y, nodeArray));
                nodesToAnimate.push(document.getElementById((x-1) +'-'+ (y-1)));
            }

        }
    }
    queueList.shift();
    return queueList;
}

function addToQueue(x, y, nodeArray, queueList, previous)
{
    let obj = searchArray(x, y, nodeArray);
    obj = findDist(obj, nodeArray);
    let element = document.getElementById(obj.x+ '-' + obj.y)
    obj.previous = previous;
    element.classList.remove('unvisited');
    element.classList.add('visited');
    queueList.push(obj);
    

    return queueList;
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

    if(obj === start)
    {
        obj.gcost = 0;
        obj.hcost = distCalc(end, obj);
        obj.fcost = obj.gcost + obj.hcost;
    }
    else if(obj === end)
    {
        obj.gcost = distCalc(start, obj);
        obj.hcost = 0;
        obj.fcost = obj.gcost + obj.hcost;
    }
    else
    {
        obj.gcost = distCalc(start, obj);
        obj.hcost = distCalc(end, obj);
        obj.fcost = obj.gcost + obj.hcost;
    }
    

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
            c = Math.sqrt((a*b) + (b*b));
            return(c);
        }
        else if(goal.y < pos.y)
        {
            a = (pos.x - goal.x);
            b = (pos.y - goal.y);
            c = Math.sqrt((a*b) + (b*b));
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
            c = Math.sqrt((a*b) + (b*b));
            return(c);
        }
        else if(goal.y < pos.y)
        {
            a = (goal.x - pos.x);
            b = (pos.y - goal.y);
            c = Math.sqrt((a*b) + (b*b));
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