import { Node } from "./node";

//Adds all nodes on the table created as objects to an array
export function findNodes()
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
            if(element.classList.contains('wall') === true)
            {
                node.wall = true;
            }

            gridNodes.push(node)
        }
        y += 1;
    }

    return gridNodes;
}

export function clearTable()
{
    let element = 0;
    let x = 0;
    let y = 0;
    let id;

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
            if(element.classList.contains('visited') === true)
            {
                element.classList.remove('visited');
                element.classList.add('unvisited');
                element.classList.remove('node-colour');
                element.classList.remove('path');
            }
        }
        y += 1;
    }
}

export function searchArray(a, b, arrayList)
{
    let obj = arrayList.find(o => o.x === a && o.y === b)
    return obj;
}

export function sortQueue(queueList)
{
    queueList.sort((a, b) => {
        return a.distance - b.distance;
    });
}

export function sortQueueAStar(queueList)
{
    queueList.sort((a, b) => {
        return a.hcost - b.hcost;
    });
}
