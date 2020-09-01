

  let el = document.querySelector('#canvas1')
  let context = el.getContext('2d');
  let onGoingTouches = new Array();

  
  el.addEventListener('touchmove', function(e) {
   
    context.lineWidth = 1;
    context.strokeStyle='black';
    var touches = e.changedTouches;
    
    for (var i=0; i < e.changedTouches.length; i++) {
        console.log("changedTouches[" + i + "].identifier = " + touches[i].identifier);
        onGoingTouches.push(touches)
        let idx;

        
        for(let x = 0; x < onGoingTouches.length; x++){
            idx = onGoingTouches[x];
            // console.log(idx[i].pageX, idx[i].pageY)
            context.lineTo(idx[i].pageX, idx[i].pageY);
            context.stroke(); 
        }
        context.beginPath(); 
      
    } 
    
   
        
 }, false);

 /**------------------------------------------------------------------------------------------------------------------------- */


 