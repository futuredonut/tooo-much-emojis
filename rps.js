//rps
function rpsstart(){
    document.getElementById("rpshumanrock").style.display = "inline";
    document.getElementById("rpshumanpaper").style.display = "inline";
    document.getElementById("rpshumanscissors").style.display = "inline";
    document.getElementById("rpscomputerrock").style.display = "inline";
    document.getElementById("rpscomputerpaper").style.display = "inline";
    document.getElementById("rpscomputerscissors").style.display = "inline";
    document.getElementById("rpsme").style.display = "inline";
    document.getElementById("rpsyou").style.display = "inline";
    document.getElementById("rpsstart").style.display = "none";
    document.getElementById("rpsreset").style.display = "inline";
}

function rpsreset(){
    document.getElementById("rpshumanrock").style.display = "none";
    document.getElementById("rpshumanpaper").style.display = "none";
    document.getElementById("rpshumanscissors").style.display = "none";
    document.getElementById("rpscomputerrock").style.display = "none";
    document.getElementById("rpscomputerpaper").style.display = "none";
    document.getElementById("rpscomputerscissors").style.display = "none";
    document.getElementById("rpsme").style.display = "none"
    document.getElementById("rpsyou").style.display = "none"
    document.getElementById("rpsstart").style.display = "inline";
    document.getElementById("rpsreset").style.display = "none";
}

function rpsrock(){
    document.getElementById("rpshumanrock").style.backgroundColor = "yellow";
    document.getElementById("rpshumanpaper").style.backgroundColor = "black";
    document.getElementById("rpshumanscissors").style.backgroundColor = "black"
}

function rpspaper(){
    document.getElementById("rpshumanrock").style.backgroundColor = "black";
    document.getElementById("rpshumanpaper").style.backgroundColor = "yellow";
    document.getElementById("rpshumanscissors").style.backgroundColor = "black"
}

function rpsscissors(){
    document.getElementById("rpshumanrock").style.backgroundColor = "black";
    document.getElementById("rpshumanpaper").style.backgroundColor = "black";
    document.getElementById("rpshumanscissors").style.backgroundColor = "yellow";
}