
function setup(){
    let myCanvas = createCanvas(600, 400);
    myCanvas.parent('myCanvas');
}

function draw() {
    background(220);
    strokeWeight(1);
    ellipse(50,50,80,80);
    /*
    for(var x = 0; x < width; x++){
        point(x, height/2);
    }
    */
   strokeWeight(5);
   line(0, height/2, width, height/2)

}