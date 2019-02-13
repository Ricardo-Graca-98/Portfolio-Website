var inside = false;

function mouseUpdate(event)
{
    var x = event.clientX;
    var y = event.clientY;
    
    document.getElementById("test1").innerHTML = x;
    document.getElementById("test2").innerHTML = y;
    document.getElementById("mousePointer").setAttribute("cy", y);
    document.getElementById("mousePointer").setAttribute("cx", x);
    if(!inside)
    {
        document.getElementById("mousePointer").setAttribute("r", 20);
    }
    else
    {
        document.getElementById("mousePointer").setAttribute("r", 30);
        inside = false;
    }
}

function changeMouse(event)
{
    inside = true;
}