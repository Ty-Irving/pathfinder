const timer = ms => new Promise(res => setTimeout(res, ms))

export async function animate(nodesToAnimate, shortestPathAnimate)
{
    let lastNode = nodesToAnimate[0];
    let table = document.getElementById('pathfinder-table')
    table.style.pointerEvents = "none";
    let legend = document.getElementsByClassName('algorithms')
    legend[0].style.pointerEvents = "none";
    while(nodesToAnimate.length !== 0)
    {
        //node animation here
        if(lastNode.classList.contains('start') !== true)
        {
            lastNode.classList.add('node-colour')
        }
        lastNode.classList.remove('node-last');
        nodesToAnimate.shift();
        lastNode = nodesToAnimate[0];
        if(lastNode !== undefined)
        {
            lastNode.classList.add('node-last');
            await timer(7);
        }
        
    }

    if(shortestPathAnimate === null)
    {
        table.style.pointerEvents = "all";
        legend[0].style.pointerEvents = "all";
        return;
    }
    for(let i = shortestPathAnimate.length - 1; i >= 0; i--)
    {
        shortestPathAnimate[i].classList.add('path');
        await timer(20);
    }
    table.style.pointerEvents = "all";
    legend[0].style.pointerEvents = "all";
}