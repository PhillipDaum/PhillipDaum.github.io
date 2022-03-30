//opens one portfolio item in seperate tab
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


//
//public class Main {
//    public static void main(String[] args) {
//     for (int i = 0; i < 5; i++) {
//       System.out.println(i);
//      }  
//    }
// }
  


//function RickRollerson(i){
//            document.getElementById("tile-i").className = "bg-transparent";
//}




