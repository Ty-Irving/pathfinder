export function Node(x, y)
{
    this.x = x;
    this.y = y;
    this.start = false;
    this.end = false;
    this.distance = Infinity;
    this.wall = false;
    this.previous = null;
}