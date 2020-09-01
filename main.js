/**::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*
 * Snippet code for used in canvas new methode of EC6 for 
 * Touch devices 
 * Mehddeb.b, devwebdino.com
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

let el = document.querySelector("#canvas1");
let context = el.getContext("2d");
let onGoingTouches = new Array();

el.addEventListener("touchmove", function (e) {
  context.lineWidth = 1;
  context.strokeStyle = "black";
  var touches = e.changedTouches; //Object with a lot of position cursor
  //First loop for first index
  for (var i = 0; i < e.changedTouches.length; i++) {
    console.log("Touch move start");
    onGoingTouches.push(touches);
    let idx;
    //Second loop for other index
    for (let x = 0; x < onGoingTouches.length; x++) {
      idx = onGoingTouches[x];
      context.lineTo(idx[i].pageX, idx[i].pageY);
      context.stroke();
    }
    context.beginPath();
  }
});

/**---------------------------------------------------------The End--;-)--------------------------------------------------------- */
