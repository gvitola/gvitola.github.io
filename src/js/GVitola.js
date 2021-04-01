// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function dragEnter(event) {
    if ( event.target.className == "droptarget" ) {
        event.target.style.backgroundColor = "lightblue";
    }
}

function dragLeave(event) {
    if ( event.target.className == "droptarget" ) {
        event.target.style.backgroundColor = "";
    }
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    if ( event.target.className == "droptarget" ) {
        event.preventDefault();
        event.target.style.backgroundColor = "";
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    }
}