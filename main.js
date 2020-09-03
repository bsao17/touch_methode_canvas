/**::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*
 * Snippet code for used in canvas new methode of EC6 for 
 * Touch devices 
 * Mehddeb.b, devwebdino.com
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

let el = document.querySelector("#canvas1");
let context = el.getContext("2d");
let position = {x: 0, y: 0};
let onTouches = new Array();
context.lineWidth = 1;
context.strokeStyle = "black";

el.addEventListener('touchstart', (e)=>{context.beginPath()} );
el.addEventListener("touchmove", findAndDrawingPointMove );
el.addEventListener("touchend",()=>{context.closePath();} );

// function findPointStart(e){

// }


function findAndDrawingPointMove (e) {
    let touches = e.changedTouches; //Object with a lot of position cursor

    //First loop for first index
    for (let i = 0; i < e.changedTouches.length; i++) {
        onTouches.push(touches);
        console.log("Touch move start", position.x, position.y);
  
      //Second loop for other index
      for (let x = 0; x < onTouches.length; x++) {
        let idx = onTouches[x];
        if(idx == touches[i].identifier)return i;
        context.lineTo(idx[i].pageX, idx[i].pageY);
        context.stroke();
       
      }
      context.beginPath();
    }
}

/**---------------------------------------------------------The End--;-)--------------------------------------------------------- */
