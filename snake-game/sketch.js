var snake;
var scl = 20;
var food;
var rate = 7;

function setup() {
	createCanvas(600, 600).position(300,5);
	snake = new Snake();
	frameRate(this.rate);
	pickLocation();
}

/*set the random location for food*/
function pickLocation(){
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}

function mousePressed(){
	snake.total++;
}
function draw() {
	background(51);
	
	if(snake.eat(food)){
		pickLocation();
	}

	snake.death();
	snake.update();
	snake.show();

	fill(255, 0, 100);
	rect(food.x, food.y, scl, scl);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		snake.dir(0, -1);
	}
	else if(keyCode === DOWN_ARROW){
		snake.dir(0, 1);
	}
	else if(keyCode === RIGHT_ARROW){
		snake.dir(1, 0);
	}
	else if(keyCode === LEFT_ARROW){
		snake.dir(-1, 0);
	}
}

