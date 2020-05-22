
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
    document.getElementById("rpstied").style.display = "inline";
    document.getElementById("rpsme").value = 0;
    document.getElementById("rpsyou").value = 0;
    document.getElementById("rpstied").value = 0;
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
    document.getElementById("rpskeepgoing").style.display = "none";
    document.getElementById("rpstied").style.display = "none";
    document.getElementById("rpstied").value = '';
}

function rpskeepgoing(){
    document.getElementById("rpshumanrock").style.backgroundColor = "black";
    document.getElementById("rpshumanpaper").style.backgroundColor = "black";
    document.getElementById("rpshumanscissors").style.backgroundColor = "black"
    document.getElementById("rpskeepgoing").style.display = "none";
}

function rpsrock(){
    var n =Math.random()
    var myscore = document.getElementById("rpsme").value;
    var yourscore = document.getElementById("rpsyou").value;
    var tied = document.getElementById("rpstied").value;
    var ties = parseInt(tied);
    var myscore = parseInt(myscore);
    var yourscore = parseInt(yourscore);
    document.getElementById("rpshumanrock").style.backgroundColor = "yellow";
    document.getElementById("rpshumanpaper").style.backgroundColor = "black";
    document.getElementById("rpshumanscissors").style.backgroundColor = "black";
    document.getElementById("rpskeepgoing").style.display = "inline";
    var human = 'paper'
    if(n <0.33){
        var computer = 'rock'
        document.getElementById("rpstied").value = ties+1
    }else if(n <0.66){
        var computer = 'paper';
        document.getElementById("rpsyou").value = yourscore+1
    }else {
        var computer = 'scissors'
        document.getElementById("rpsme").value = myscore+1
    
    }
}

function rpspaper(){
    var n =Math.random()
    var myscore = document.getElementById("rpsme").value;
    var yourscore = document.getElementById("rpsyou").value;
    var tied = document.getElementById("rpstied").value;
    var ties = parseInt(tied);
    var myscore = parseInt(myscore);
    var yourscore = parseInt(yourscore);
    document.getElementById("rpshumanrock").style.backgroundColor = "black";
    document.getElementById("rpshumanpaper").style.backgroundColor = "yellow";
    document.getElementById("rpshumanscissors").style.backgroundColor = "black"
    document.getElementById("rpskeepgoing").style.display = "inline";
    var human = 'paper'
    if(n <0.33){
        var computer = 'rock'
        document.getElementById("rpsme").value = myscore+1
    }else if(n <0.66){
        var computer = 'paper'
        document.getElementById("rpstied").value = ties+1
    }else {
        var computer = 'scissors'
        document.getElementById("rpsyou").value = yourscore+1
    }
}

function rpsscissors(){
    var n =Math.random()
    var myscore = document.getElementById("rpsme").value;
    var yourscore = document.getElementById("rpsyou").value;
    var tied = document.getElementById("rpstied").value;
    var ties = parseInt(tied);
    var myscore = parseInt(myscore);
    var yourscore = parseInt(yourscore);
    document.getElementById("rpshumanrock").style.backgroundColor = "black";
    document.getElementById("rpshumanpaper").style.backgroundColor = "black";
    document.getElementById("rpshumanscissors").style.backgroundColor = "yellow";
    document.getElementById("rpskeepgoing").style.display = "inline";
    var human = 'paper'
    if(n <0.33){
        var computer = 'rock'
        document.getElementById("rpsyou").value = yourscore+1
    }else if(n <0.66){
        var computer = 'paper'
        document.getElementById("rpsme").value = myscore+1
    }else {
        var computer = 'scissors'
        document.getElementById("rpstied").value = ties+1
    }
}

