
const boardHeight = 600;
const boardWidth = 800;

var wBall = 35;

var xBallPos = (boardWidth-wBall)/2;
var yBallPos = (boardHeight-wBall)/2;

var ballSpeedX = 5;
var ballSpeedY = 5;

var player1Points = 0;
var player2Points = 0;

function setup(){
    let myCanvas = createCanvas(boardWidth, boardHeight);
    myCanvas.parent('myCanvas');
}

function draw() {
    background(255);
    background(220,15,40,100);

    drawPlayer1(20, boardHeight/3.5);
    drawPlayer2(20, boardHeight/3.5);

    //drawBall(wBall, xBallPos, yBallPos);
    moveBall();
    actualizarPuntos();
}

function drawPlayer1(w,h, xPos, yPos){
    //w = 20; h = 100;
    xPos = 15;
    yPos = (height-h)/2;

    fill(102, 15, 0);
    rect(xPos, yPos, w, h);
}

function drawPlayer2(w,h, xPos, yPos){
    //w = 20; h = 100;
    xPos = boardWidth-w-15;
    yPos = (height-h)/2;

    fill(102, 15, 0);
    rect(xPos, yPos, w, h);
}

function drawBall(w, xBallPos, yBallPos){
    //xPos = (boardWidth-w)/2;
    //yPos = (boardHeight-w)/2;

    fill(102, 15, 30);
    ellipse(xBallPos, yBallPos, w);
}

function moveBall() {
    xBallPos += ballSpeedX;
    yBallPos += ballSpeedY;
    //console.log(xBallPos);
    if(xBallPos < 0 || xBallPos >= boardWidth){
        ballSpeedX *= -1;
    }    

    if(yBallPos < 0 || yBallPos >= boardHeight){
        ballSpeedY *= -1;
    }

    drawBall(wBall, xBallPos, yBallPos);
}

function actualizarPuntos(){
    if(xBallPos <= 0){
        player2Points++;
    }
    if(xBallPos >= boardWidth){
        player1Points++;
    }
    text(`${this.p1} - ${this.p2}`, this.x, this.y);
    document.getElementById("puntos").innerHTML = `Player1: ${player1Points} - ${player2Points} Player2 `;
}

function movePlayer1(){

    drawPlayer1(20, boardHeight/3.5, xPos, yPos);
}