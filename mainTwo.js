let el = document.querySelector("#canvas1");
let context = el.getContext("2d");
context.lineWidth = "2"
context.strokeStyle = "black";

el.addEventListener('touchmove', makeSignature);


function drawing(x, y){
     context.lineWidth = "2";
     context.strokeStyle = "black";
     context.lineTo(x, y);
     context.stroke();
};


function makeSignature(e){
    e.preventDefault();
    const touches = e.changedTouches
    let X = e.touches[0].clientX;
    let Y = e.touches[0].clientY;
    drawing(X, Y);
    context.context.beginPath();
    
};

