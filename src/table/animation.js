const timer = ms => new Promise(res => setTimeout(res, ms))

export async function animate(nodesToAnimate, shortestPathAnimate)
{
    let lastNode = nodesToAnimate[0];
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
            await timer(6);
        }
        
    }

    for(let i = shortestPathAnimate.length - 1; i >= 0; i--)
    {
        shortestPathAnimate[i].classList.add('path');
        await timer(20);
    }
}