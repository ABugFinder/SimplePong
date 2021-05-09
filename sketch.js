
const boardHeight = 600;
const boardWidth = 800;

function setup(){
    let myCanvas = createCanvas(boardWidth, boardHeight);
    myCanvas.parent('myCanvas');
}

function draw() {
    background(255);
    background(220,15,40,100);

    drawPlayer1(20, boardHeight/3.5);
    drawPlayer2(20, boardHeight/3.5);

    drawBall(35);
}


function drawPlayer1(w,h, xPos, yPos){
    //w = 20; h = 100;
    xPos = boardWidth-w-15;
    yPos = (height-h)/2;

    fill(102, 15, 0);
    rect(15, yPos, w, h);
}

function drawPlayer2(w,h, xPos, yPos){
    //w = 20; h = 100;
    xPos = boardWidth-w-15;
    yPos = (height-h)/2;

    fill(102, 15, 0);
    rect(xPos, yPos, w, h);
}

function drawBall(w, xPos, yPos){
    xPos = (boardWidth-w)/2;
    yPos = (boardHeight-w)/2;

    fill(102, 15, 30);
    ellipse(xPos, yPos, w,)
}