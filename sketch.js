
const boardHeight = 600;
const boardWidth = 800;

var wBall = 35;

var xBallPos = (boardWidth)/2;
var yBallPos = (boardHeight)/2;

const ballSpeed = 5;
var ballSpeedX = 5;
var ballSpeedY = 5;

var h = boardHeight/3.5;
var playerWith = 20;

var xPosP1 = 15;
var xPosP2 = boardWidth-playerWith-15;

var yPosP1 = (boardHeight-h)/2;
var yPosP2 = (boardHeight-h)/2;

var player1Points = 0;
var player2Points = 0;

function setup(){
    let myCanvas = createCanvas(boardWidth, boardHeight);
    myCanvas.parent('myCanvas');
}

function draw() {
    background(255);
    background(220,15,40,100);

    //drawPlayer1(playerWith, h, xPosP1, yPosP1);
    //drawPlayer2(playerWith, h, xPosP1, yPosP1);

    //drawBall(wBall, xBallPos, yBallPos);
    moveBall();
    actualizarPuntos();

    movePlayer1();
    movePlayer2();
}

function drawPlayer1(playerWith,h, xPosP1, yPosP1){
    fill(102, 15, 0);
    rect(xPosP1, yPosP1, playerWith, h);
}

function drawPlayer2(playerWith,h, xPosP2, yPosP2){
    fill(102, 15, 0);
    rect(xPosP2, yPosP2, playerWith, h);
}

function drawBall(w, xBallPos, yBallPos){
    //xPos = (boardWidth-w)/2;
    //yPos = (boardHeight-w)/2;

    fill(102, 15, 30);
    ellipse(xBallPos, yBallPos, w);
}

function moveBall() {
    var ballLeft = xBallPos-(wBall/2);
    var ballRight = xBallPos+(wBall/2);
    //var ballUp = yBallPos-(wBall/2);
    //var ballDown = yBallPos+(wBall/2);
    
    xBallPos += ballSpeedX;
    yBallPos += ballSpeedY;
    
    //console.log("X: " + `${xBallPos},` +" Y: " + `${yBallPos}`);
    //console.log(`${ballLeft}` + ", " + `${xPosP1+playerWith}`);
    //console.log(yPosP1+h)
    
    //Colisión con player1
    if(xPosP1 <= ballLeft && ballLeft <= xPosP1+playerWith && yBallPos >= yPosP1 && yBallPos <= yPosP1+h){
        ballSpeedX = ballSpeed;
    }

    //Colisión con player2
    if(ballRight >= xPosP2 && ballRight <= xPosP2+playerWith && yBallPos >= yPosP2 && yBallPos <= yPosP2+h){
        ballSpeedX = ballSpeed*-1;
    } 
    
    //console.log(xBallPos);
    if(xBallPos >= boardWidth){
        ballSpeedX *= -1;
        xBallPos = boardWidth/2;
        yBallPos = boardHeight/2;
        addPointsToP1();
    }

    if(xBallPos <= 0){
        ballSpeedX *= -1;
        xBallPos = boardWidth/2;
        yBallPos = boardHeight/2;
        addPointsToP2();
    }

    if(yBallPos < 0 || yBallPos >= boardHeight){
        ballSpeedY *= -1;
    }

    drawBall(wBall, xBallPos, yBallPos);
}

function addPointsToP1(){
    player1Points++;
}

function addPointsToP2(){
    player2Points++;
}

function actualizarPuntos(){
    if(xBallPos <= 0){
        player2Points++;
    }
    if(xBallPos >= boardWidth){
        player1Points++;
    }
    //text(`${this.p1} - ${this.p2}`, this.x, this.y);
    document.getElementById("puntos").innerHTML = `Player1: ${player1Points} - ${player2Points} Player2 `;
}

function movePlayer1(){
    //w->87
    //s->83
    if(yPosP1 > 0){
        if(keyIsDown(87)){
            yPosP1 -= 5;
        }
    }
    if(yPosP1+h <= boardHeight){
        if(keyIsDown(83)){
            yPosP1 += 5;
        }
    }
    drawPlayer1(playerWith, boardHeight/3.5, xPosP1, yPosP1);
}

function movePlayer2(){
    //up->38
    //down->40
    if(yPosP2 > 0){
        if(keyIsDown(UP_ARROW)){
            yPosP2 -= 5;
        }
    }
    if(yPosP2+h <= boardHeight){
        if(keyIsDown(DOWN_ARROW)){
            yPosP2 += 5;
        }
    }
    drawPlayer2(playerWith, boardHeight/3.5, xPosP2, yPosP2);
}
