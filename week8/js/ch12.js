var canvas = document.getElementById("myCanvas"); 
var context = canvas.getContext("2d"); 
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);

var canvas2 = document.getElementById("myCanvas2"); 
var context2 = canvas2.getContext("2d"); 
function drawPattern() {

    var img = new Image(); 
    img.src = "../images/bike_sprite.png";
    img.onload = function() {
    var pattern = context2.createPattern(img, "repeat"); 
    context2.fillStyle = pattern;                        
    context2.fillRect(10, 10, 100, 100);                  
    context2.strokeRect(10, 10, 100, 100);             
    };
}

drawPattern()

var canvas3 = document.getElementById("myCanvas3"); 
var context3 = canvas3.getContext("2d"); 
function drawGradient() {
    var gradient = context3.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue"); 
    gradient.addColorStop(1, "white"); 
    context3.fillStyle = gradient; 
    context3.fillRect(10, 10, 100, 100); 
    context3.strokeRect(10, 10, 100, 100); 
}

drawGradient()

function drawCircle(canvas) {
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(150, 150, 50, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "black";
    context.fillStyle = "gold";
    context.lineWidth = 3;
    context.fill(); 
    context.stroke(); 
}

drawCircle(canvas3)

window.addEventListener("load", drawImageToCanvas, false);

function drawImageToCanvas() {
    var canvas = document.getElementById("demo6");
    var context = canvas.getContext("2d");
    var image = document.getElementById("myImageElem");
    context.drawImage(image, 0, 0); 
}

drawImageToCanvas()

function manipulateImage() {
    var canvas = document.getElementById("demo7");
    var context = canvas.getContext("2d");
    var image = document.getElementById("secondImage");
    context.drawImage(image, 60, 60);

    var imageData = context.getImageData(0, 0, 200, 200);
    
    for (var i = 0; i < imageData.data.length; i += 4) {
    var red = imageData.data[i];
    var green = imageData.data[i + 1];
    var blue = imageData.data[i + 2];
        
    var grayscale = red * 0.3 + green * 0.59 + blue * 0.11;
        
    imageData.data[i] = grayscale;
    imageData.data[i + 1] = grayscale;
    imageData.data[i + 2] = grayscale;
    } 
    context.putImageData(imageData, 0, 0);
}

manipulateImage()

function addEvent(event, elem, fxn) {
    if (elem.addEventListener) {
       elem.addEventListener(event, fxn, false);
    } else if (elem.attachEvent) {
       elem.attachEvent('on' + event, fxn);
    } else {
       elem['on' + event] = fxn;
    }
 }
 
 // bind the dragstart event on the mice  
 var mice = document.querySelectorAll('#mouseContainer img');
 var mouse = null;
 for (var i=0; i < mice.length; i++) {
   mouse = mice[i];
   mouse.addEventListener('dragstart', function (event) {
     event.dataTransfer.setData('text/plain', this.id); 
   });
 }
 
 // bind the dragover event on the cat
 var cat = document.getElementById('cat');
 addEvent('dragover', cat, function(event) {
   event.preventDefault();
 });
 
 // bind the drop event on the cat
 addEvent('drop', cat, function(event) {
   var mouseHash = {
      mouse1: 'NOMNOMNOM',
      mouse2: 'Mreow',
      mouse3: 'Purrrrrr...'
    };
 
     var ch = document.getElementById('catHeading');
 
     // change text of the header based on which mouse was dropped
   var mouseID = event.dataTransfer.getData('text/plain');
     ch.innerHTML = mouseHash[mouseID];	
     
     // get the img element for the mouse, and then remove it
     var mousey = document.getElementById(mouseID);
   mousey.parentNode.removeChild(mousey);
     
     event.preventDefault();  
 });