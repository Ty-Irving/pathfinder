/**
 * #TODO: 
 *  - Go up down left right
 *  - Record distance from start
 * 
 * 
 */

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
            setTimeout(() => {
                newsearch(neighbor);
            }, 100);
            
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
            setTimeout(() => {
                newsearch(neighbor);
                console.log(neighbor);
            }, 100);
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
            setTimeout(() => {
                newsearch(neighbor);
            }, 100);
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
            setTimeout(() => {
                newsearch(neighbor);
            }, 100);
        }
        
    }

}
