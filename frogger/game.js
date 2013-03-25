// Your work goes here...
sprite = new Image();
sprite.src = "assets/frogger_sprites.png";

var lives = 5; 
var xcors = [];
var ycors = [];
var speed = [];

var frog_dist = 25;

var steps = 0;
var maxSteps = 0;

var newFrogs = 1;

var canvas;// = document.getElementById("game");
var ctx;// = canvas.getContext('2d');

document.addEventListener("keydown", function(event) {
    	console.log(event.keyCode);
    	switch(event.keyCode){
    		case 37:
    			event.preventDefault();
    			xcors["frog"] -= frog_dist;
    			break;

    		case 38:
    			event.preventDefault();
    			goForward();
    			//ycors["frog"] -= frog_dist;
    			break;
    		case 39:
    			event.preventDefault();
    			xcors["frog"] += frog_dist;
    			break;
    		case 40:
    			event.preventDefault();
    			//ycors["frog"] += frog_dist;
    			goBackward();
   		 		break;
    	}
    	drawBoard();
    	redraw();
 	});

function init_setup(){
	canvas = document.getElementById("game");
	ctx = canvas.getContext('2d');	
	
//	sprite = new Image();
//	sprite.src = "assets/frogger_sprites.png";
	
	
	level = 1;
	highscore = 0;
	score = 0;
//	lives = 3;


	xcors["frog"] = canvas.width/2;
	ycors["frog"] = 501;

	xcors["white_car"] = 0;
	ycors["white_car"] = 365;
	speed["white_car"] = 20;

	xcors["purple"] = 0;
	ycors["purple"] = 400;
	speed["purple"] = 20;

	xcors["truck"] = 0;
	ycors["truck"] = 330;
	speed["truck"] = 20;

	xcors["yellow"] = 0;
	ycors["yellow"] = 467;
	speed["yellow"] = 20;

	xcors["other_white"] = 0;
	ycors["other_white"] = 431;
	speed["other_white"] = 20;

	xcors["log1"] = 250;
	ycors["log1"] = 188;

	xcors["log2"] = 50;
	ycors["log2"] = 157;

	xcors["log3"] = 200;
	ycors["log3"] = 126;

	xcors["log4"] = 0;
	ycors["log4"] = 126;

	xcors["log5"] = 150;
	ycors["log5"] = 250;

	drawBoard();
	redraw();

	setInterval(run,300);
}

function run(){
	animate();
	drawBoard();
	redraw();
}

function animate(){

	xcors["yellow"] = (speed["yellow"] + xcors["yellow"]) % 400;
	xcors["white_car"] = speed["white_car"];
	xcors["other_white"] += speed["other_white"];
	xcors["truck"] = (speed["truck"] + xcors["truck"]) % 400;
}

function gameOver(){
	return false;
}

function goForward(){
	ycors["frog"] -= frog_dist;
	steps++;
	if (steps > maxSteps){
		maxSteps = steps;
		score += 10;
	}
}

function goBackward(){
	ycors["frog"] += frog_dist;
	steps--;
}

function goLeft(){

}

function goRight(){


}

function move(event){

    console.log(event.keyCode);
    switch(event.keyCode){
    	case 37:
    		event.preventDefault();
    		xcors["frog"] -= frog_dist;
    		break;

    	case 38:
    		event.preventDefault();
    		goForward();
    		//ycors["frog"] -= frog_dist;
    		break;
    	case 39:
    		event.preventDefault();
    		xcors["frog"] += frog_dist;
    		break;
    	case 40:
    		event.preventDefault();
    		//ycors["frog"] += frog_dist;
    		goBackward();
   		 	break;
    }
    drawBoard();
    redraw();

}

function redraw(){
	drawBoard();
	forward_crouched_frog(xcors["frog"],ycors["frog"]);
	if (score > (newFrogs * 10000)){
		if(lives <= 4){
			lives++;
			newFrogs++;
		}
	}
	life_frog(lives);
	setText();
	white_car(xcors["white_car"],ycors["white_car"]);
	purp_car(xcors["purple"],ycors["purple"]);
	truck(400 - xcors["truck"],330);
	yellow_car(xcors["yellow"],467);
	other_white(0,431);
	big_log(250,188);
	big_log(50, 157);
	med_log(200,126);
	big_log(0,219);
	small_log(150,250);

}

function drawBoard(){
// Black road
	ctx.fillRect(0,288,400,288);

// Blue river
	ctx.fillStyle="#191970";
	ctx.fillRect(0,0,400,287);

// FROGGER Header
	ctx.drawImage(sprite,15,13,319,32,15,15,319,32);

// Goal area
	ctx.drawImage(sprite,0,54,399,53,0,58,400,53);
	
//  purple bars
	ctx.drawImage(sprite,0,119,399,35,0,285,400,35);
	ctx.drawImage(sprite,0,119,399,35,0,495,400,35);


}

function setText(){
	if (score > highscore) highscore = score;
	ctx.fillStyle="#00FF00";
	ctx.font="20px Arial";
	ctx.fillText("Level "+level, 80,545);
	ctx.font = "15px Arial";
	ctx.fillText("Score: "+score,1,559);
	ctx.fillText("Highscore: "+highscore, 81, 559);
	
}

function life_frog(lives){
	for (i = 0; i < lives; i++){
		ctx.drawImage(sprite,13,335,18,21,(i * 16),531,13,15);
	}
}
function right_crouched_frog(x,y){
	ctx.drawImage(sprite,13,335,18,21,x,y,18,21);
}
function forward_crouched_frog(x,y){

	ctx.drawImage(sprite,13,369,21,19,x,y,21,19);
}

function forward_stretched_frog(x,y){


}

function small_log(x,y){
	ctx.drawImage(sprite,10,198,114,20,x,y,114,20);
}

function med_log(x,y){
	ctx.drawImage(sprite,10,230,82,20,x,y,82,20);
}

function big_log(x,y){
ctx.drawImage(sprite,7,166,177,20,x,y,177,20);

}

function white_car(x,y){
	ctx.drawImage(sprite,47,267,24,26,x,y,24,26);
}

function other_white(x,y){
	ctx.drawImage(sprite,10,300,24,21,x,y,24,21);
}

function purp_car(x,y){
ctx.drawImage(sprite,9,267,31,21,x,y,31,21);
}

function truck (x,y){
	ctx.drawImage(sprite,104,303,47,18,x,y,47,18);
}

function yellow_car(x,y){
	ctx.drawImage(sprite,83,265,23,23,x,y,23,23);
}