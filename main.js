/**::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*
 * Snippet code for used in canvas new methode of EC6 for 
 * Touch devices 
 * Mehddeb.b, devwebdino.com
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

let el = document.querySelector("#canvas1");
let context = el.getContext("2d");
let onTouches = new Array();

el.addEventListener("touchmove", function (e) {
  context.lineWidth = 1;
  context.strokeStyle = "black";
  let touches = e.changedTouches; //Object with a lot of position cursor
  //First loop for first index
  for (let i = 0; i < e.changedTouches.length; i++) {
    console.log("Touch move start");
    onTouches.push(touches);
    let idx;
    //Second loop for other index
    for (let x = 0; x < onTouches.length; x++) {
      idx = onTouches[x];
      context.lineTo(idx[i].pageX, idx[i].pageY);
      context.stroke();
    }
    context.beginPath();
  }
});

/**---------------------------------------------------------The End--;-)--------------------------------------------------------- */
