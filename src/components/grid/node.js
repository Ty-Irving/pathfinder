function Node(x, y)
{
    this.x = x;
    this.y = y;
    this.start = false;
    this.end = false;
    this.distance = null;
    this.wall = false;
    this.previous = null;
}