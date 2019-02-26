var xincrement = 1;
function scroll(){
    var top = document.getElementById("cplus").getAttribute("top");
    document.getElementById("cplus").setAttribute("top", top+1);
}