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

function chBackcolor(color) {
    document.body.style.background = color;
 }




function rickrollHiddenLayer(){    
    var a = document.createElement("a");    
    a.href = "https://github.com/PhillipDaum/parallax-practice";    
    var evt = document.createEvent("MouseEvent");    

    //the tenth parameter of initMouseEvent sets ctrl key    
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,true, false, false, false, 0, null);    
    a.dispatchEvent(evt);
}




