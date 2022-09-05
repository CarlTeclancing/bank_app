var myApp;
myApp = "<h2>Ultimate Portfolio Acounts</h2> <p>Manage all your financial assets from one place as we are pleased to be your plug in all marketing strategies in this dev world</p> <button id='btn-readless' onClick='readless()'>Read less</button>";

function readMore(){
    var change = document.getElementById("box-1");
    change.style.transition = "2s";
    change.innerHTML = myApp;
    change.style.height = "300px";
}

function readless(){
    var chang = document.getElementById("box-1");
    chang.style.transition = "2s";
    chang.innerHTML = "<h2>Ultimate Portfolio Acounts</h2> <p>Manage all your financial assets from one place </p> <button id='btn-read' onclick='readMore()'>Read More</button>";
    chang.style.height = "200px";
}