//opens one portfolio item in seperate tab NO WORKY
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
//then z-index rickroll =2
//for (x) time


function RickRollerson(){
     document.getElementById("tile-3").className = "bg-transparent";
     document.getElementById("tile-2").className = "bg-transparent";
     document.getElementById("tile-1").className = "bg-transparent";
    }  


function unRickRollerson(){
    document.getElementById("tile-3").className = "container-fluid rr";
    document.getElementById("tile-2").className = "container-fluid rr";
    document.getElementById("tile-1").className = "container-fluid rr d-flex justify-content-center";
    }  
    





