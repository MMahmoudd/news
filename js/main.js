
function changeColor(id) {
    // Get List Of classes and change color from index
    var list = document.getElementsByClassName("colors-c");
    for (index = 0; index < list.length; ++index) {
        list[index].setAttribute("style", "background-color: " + id);
    }
    var list = document.getElementsByClassName("font-c");
    for (index = 0; index < list.length; ++index) {
        list[index].setAttribute("style", "color: " + id);
    }
}