var ball;
var hipnotic_ball;
var database;
var position;

function setup() {
    createCanvas(500, 500);
    ball = createSprite(250, 250, 10, 10);
    ball.shapeColor = "red";
    database = firebase.database();
    var ball2 = createSprite(250, 250, 10, 10);
    ball2.shapeColor = "black";
    var ball2_position = database.ref('ball/position');
    ball2_position.on("value", readPosition, showError);

}

function draw() {
    background("white");
    if (keyDown(LEFT_ARROW)) {
        changePosition(-1, 0);
    }
    else if (keyDown(RIGHT_ARROW)) {
        changePosition(1, 0);
    }
    else if (keyDown(UP_ARROW)) {
        changePosition(0, -1);
    }
    else if (keyDown(DOWN_ARROW)) {
        changePosition(0, +1);
    }
    drawSprites();
}

function changePosition(x, y) {
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data){
    position = data.val();
    ball2.x = position.x;
    ball2.y = position.y;
}