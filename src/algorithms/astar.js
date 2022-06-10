import { node } from 'webpack';
import { animate } from '../table/animation';
import { findNodes, clearTable, searchArray, sortQueue} from '../table/tablesetup'

export default function astar()
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

    if(x + 1 <= borderX && y + 1 <= borderY)
    {
        addToQueue(x+1, y+1, nodeArray);
    }

    if(x - 1 >= 0 && y + 1 <= borderY)
    {
        addToQueue(x-1, y+1, nodeArray);
    }

    if(x + 1 <= borderX && y - 1 >= 0)
    {
        addToQueue(x+1, y-1, nodeArray);
    }

    if(x - 1 >= 0 && y - 1 >= 0)
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
function findDist(x,y, nodeArray, nodeDist)
{

}