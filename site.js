//opens one portfolio item in seperate tab behind, doesnt actually put it behind
function openNewBackgroundTab(){    
    var a = document.createElement("a");    
    a.href = "https://github.com/PhillipDaum/parallax-practice";    
    var evt = document.createEvent("MouseEvent");    

    //the tenth parameter of initMouseEvent sets ctrl key    
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,true, false, false, false, 0, null);    
    a.dispatchEvent(evt);
}


//timed rickroll experience
//if this 
//button has been clicked
//make transparent all layer 1 backgrounds
//for (x) time

function clickyTime(){
  document.getElementById("toast").className = "toast show";
  setTimeout(stopannoyingMove, 4500)
}


function RickRollerson(){
     document.getElementById("tile-3").className = "bg-transparent";
     document.getElementById("tile-2").className = "bg-transparent";
     document.getElementById("tile-1").className = "container-fluid rr bg-transparent d-flex justify-content-center";
    }  


function unRickRollerson(){
    document.getElementById("tile-3").className = "container-fluid rr";
    document.getElementById("tile-2").className = "container-fluid rr";
    document.getElementById("tile-1").className = "container-fluid rr d-flex justify-content-center";
} 



function annoyingMove(){
    let n = "position-fixed top-1 start-1 p-5"

    document.getElementById("toast").className = "toast";
    document.getElementById("trick").className = n;
    document.getElementById("toast").className = "toast show";
    document.getElementById("th").setAttribute("onmouseover", "otherannoyingMove()");
}



function otherannoyingMove() {
    let m = "position-fixed bottom-0 end-0 p-5"
  
    document.getElementById("toast").className = "toast";
    document.getElementById("trick").className = m;
    document.getElementById("toast").className = "toast show";
    document.getElementById("th").setAttribute("onmouseover", "annoyingMove()");
}

function stopannoyingMove() {
    document.getElementById("th").setAttribute("onmouseover", "");
}