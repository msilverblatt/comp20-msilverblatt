sprite = new Image();
sprite.src = "assets/frogger_sprites.png";

var frog = {};
frog.direction = "forward";

var vehicles = [];
var logs = [];

var frog_side = 21;
var frog_up = 25;

var frog_y = [500,467,432,397,362,327,280,245,215,188,157,126,85];

var steps = 0;
var maxsteps = 0;
 
var home = [];

var vehicle_types = [];
vehicle_types[0] = "yellow";
vehicle_types[1] = "white_car";
vehicle_types[2] = "purple";
vehicle_types[3] = "other_white";
vehicle_types[4] = "truck";

var widths = []
widths["small"] = 82;
widths["med"] = 114;
widths["long"] = 177;
widths["yellow"] = 23;
widths["white_car"] = 24;
widths["other_white"] = 24;
widths["truck"] = 47;
widths["purple"] = 30;

var heights = []
heights["small"] = 20;
heights["med"] = 20;
heights["long"] = 20;
heights["yellow"] = 23;
heights["white_car"] = 26;
heights["other_white"] = 21;
heights["truck"] = 18;
heights["purple"] = 21;

var speeds = [];
	speeds[0] = .5;
	speeds[1] = 1;
	speeds[2] = 2;
	speeds[3] = 3;


var level = 1;
var score = 0;
var highscore = 0;
var lives = 3;

var fps = 33;
var interv;

var onlog = false;
var logid;

document.addEventListener("keydown", function(event) {
    	switch(event.keyCode){
    		case 37:
    			event.preventDefault();
    			move_frog("left");
    			break;

    		case 38:
    			event.preventDefault();
    			move_frog("forward");
     			break;
    		case 39:
    			event.preventDefault();
    			move_frog("right");
     			break;
    		case 40:
    			event.preventDefault();
     			move_frog("backward");
   		 		break;
    	}
 	});

function init_setup(){
	canvas = document.getElementById("game");
	ctx = canvas.getContext('2d');	
	frog.xcor = canvas.width/2 - 12;
	frog.ycor = 0;
	lives = 3;
	level = 1;
	for (var h in home){
		home[h] = false;
	}
	speeds[0] = .5;
	speeds[1] = 1;
	speeds[2] = 2;
	speeds[3] = 3;
	score = 0;
	setLevel(level);
	interv = setInterval(run,fps);
}

function run(){
	animate();
	draw();
	detect_collisions();
}

function win(){
	console.log("WIN!");
	for (var s in speeds){
		console.log(speeds[s]);
	}
	score += 100;
	var wins = 0;
	for (var h in home){
		if (home[h]){
			wins++;
		}
	}
	steps = 0;
	frog.ycor = 0;
	frog.xcor = canvas.width/2 - 12;
	setTimeout(draw,100000);
	clearInterval(interv);	
	if(wins > 4){
		level++;
		score += 500;
		setLevel(level);
	}
	wins = 0;
	inverv = setInterval(run, fps);
}

function detect_collisions(){
	if (frog.ycor > 11){
		if (frog.xcor < 5){
			die();
		}
		else if (frog.xcor < 37){
			if(home[0]){
				die();
			}
			else{
				home[0] = true;
				win();
			}
		} else if (frog.xcor < 87){
			die();
		} else if (frog.xcor < 112){
			if(home[1]){
				die();
			}
			else{
				home[1] = true;
				win();
			}
		} else if (frog.xcor < 177){
			die();
		} else if (frog.xcor < 197){
			if(home[2]){
				die();
			}
			else{
				home[2] = true;
				win();
			}
		} else if (frog.xcor < 247){
			die();
		} else if (frog.xcor < 277){
			if (home[3]){
				die()
			}
			else{
				home[3] = true;
				win();
			}
		} else if (frog.xcor < 312){
			die();
		} else if (frog.xcor < 362){
			if (home[4]){
				die();
			}
			else{
				home[4] = true;
				win();
			}
		} else if (frog.xcor < 374){
			die();
		}
		return;

	}

	for (var v in vehicles){
		var m = vehicles[v];
		var x = frog.xcor;
		var y = frog_y[frog.ycor];
		var xdiff = x - m.xcor;
		var ydiff = y - m.ycor;
		width = widths[m.type];
		height = heights[m.type];
		if ((xdiff < width) && (xdiff > -22)){
			if (frog.ycor == m.ycor){
				die();
			}
		}

	}
	var on = false;
	for (var l in logs){
		var m = logs[l];
		var x = frog.xcor;
		var y = frog_y[frog.ycor];
		var xdiff = x - m.xcor;
		var ydiff = y - m.ycor;
		width = widths[m.type];
		height = heights[m.type];
		if ((xdiff < width) && (xdiff > -21)){
			if (Math.abs(ydiff) < height){
				on = true;
				if (!onlog){
					onlog = true;
					logid = l;
				} else if (logid != l){
					logid = l;
				}
			}
		}

	}
	if (frog.ycor > 6){
		if (!on){
			die();
		}
	} else {
		onlog = false;
	}
	if ((frog.xcor < 0) || (frog.xcor > 379)) {
		if (onlog) die();
		else if (frog.xcor < 0) frog.xcor = 0;
			else frog.xcor = 379;
		}
}

function setLevel(level){
	console.log("setting level");
	for (var h in home){
		home[h] = false;
	}
	if (level > 0){
		frog.ycor = 0;
		frog.xcor = canvas.width/2 - 12;
		for (i = 0; i < 15; i++){
			vehicles[i] = {};
			vehicles[i].speed = 2;
			if ((Math.floor(i / 3) % 2) == 0){
				vehicles[i].dir = "left";
				vehicles[i].xcor = (405 + ((i % 3) * 120)) - (i * 15);
			} else {
				vehicles[i].dir = "right";
				vehicles[i].xcor = (i * 15) + (-5 - ((i % 3) * 120));
			}
			if (i > 11){
				vehicles[i].speed = 1;
			}
			vehicles[i].ycor = (Math.floor(i / 3) + 1);
//			vehicles[i].ycor = 467 - (Math.floor(i / 3) *  35);
			vehicles[i].type = vehicle_types[Math.floor(i / 3)];
		}
		for (i = 15; i < 16; i++){
			vehicles[i] = {};
			vehicles[i].dir = "left";
			vehicles[i].speed = 1;
			vehicles[i].type = "truck";
			vehicles[i].xcor = (900 + ((i % 3) * 120)) - (i * 15);
			vehicles[i].ycor = 5;
		}
		for (i = 0; i < 4; i++){
			logs[i] = {};
			logs[i].type = "small";
			logs[i].speed = 1;
			logs[i].dir = "left";
			logs[i].xcor = 5 + (i * 140);
			logs[i].ycor = 126;

		}
		for (i = 4; i < 8; i++){
			logs[i] = {};
			logs[i].type = "med";
			logs[i].speed = 2;
			logs[i].dir = "right";
			logs[i].ycor = 157;
			logs[i].xcor = 395 - ((i-4) * 180);

		}
		for (i = 8; i < 10; i++){
			logs[i] = {};
			logs[i].speed = 3;
			logs[i].type = "long";
			logs[i].dir = "left";
			logs[i].ycor = 188;
			logs[i].xcor = 5 + ((i - 8) * 240);

		}
		for (i = 10; i < 14; i++){
			logs[i] = {};
			logs[i].dir = "right";
			logs[i].type = "small";
			logs[i].speed = 1;
			logs[i].ycor = 215;
			logs[i].xcor = 340 - ((i - 10) * 150);

		}
		for (i = 14; i < 17; i++){
			logs[i] = {};
			logs[i].type = "med";
			logs[i].dir = "left";
			logs[i].speed = 2;
			logs[i].ycor = 245;
			logs[i].xcor = 5 + ((i - 14) * 190);

		}
	}
	if (level > 1){
		for (var s in speeds){
			speeds[s] += .25;
		}
	}

}

// Moving Functions

function move_frog(dir){
	if (dir == "forward"){
		frog.ycor++;
		if (frog.ycor > steps){
			steps++;
			score += 10;
		}
	} else if (dir == "backward"){
		if (frog.ycor > 0) {
			frog.ycor--;
		}
	} else if (dir == "left"){
		frog.xcor -= frog_side;
	} else if (dir == "right"){
		frog.xcor += frog_side;
	}
	frog.dir = dir;
}

function animate(){
	for (var v in vehicles){
	//	console.log(vehicles[v].xcor,vehicles[v].ycor)
		if (vehicles[v].dir == "left"){
			vehicles[v].xcor -= speeds[vehicles[v].speed];
			if (vehicles[v].xcor <= -200){
				vehicles[v].xcor = 445;
			}
		} else if (vehicles[v].dir == "right"){
			vehicles[v].xcor += speeds[vehicles[v].speed];
			if (vehicles[v].xcor > 500){
				vehicles[v].xcor = -45;
			}
		}
	}
	for (var l in logs){
		if (logs[l].dir == "left"){
			logs[l].xcor -= speeds[logs[l].speed];
			if (logs[l].xcor <= -180){
				logs[l].xcor = 550;
			}
		} else if (logs[l].dir == "right"){
			logs[l].xcor += speeds[logs[l].speed];
			if (logs[l].xcor >= 500){
				logs[l].xcor = -130;
			}
		}
	}
	if (onlog){
		if (logs[logid].dir == "left"){
			frog.xcor -= speeds[logs[logid].speed];
		} else if (logs[logid].dir == "right"){
			frog.xcor += speeds[logs[logid].speed];
		}
	}
}

function die(){
	steps = 0;
	lives--;
	if (lives == 0){
		gameOver();
	}
	else {
		setTimeout(draw,1000);
		frog.xcor = canvas.width/2 - 10;
		frog.ycor = 0;
	}
}

function gameOver(){
	clearInterval(interv);
	ctx.font="60px Arial";
	ctx.fillText("GAME OVER", 17, 200);
	setTimeout(init_setup, 5000);


}

// Drawing Functions

function draw(){
	draw_board();
	setText();
	life_frog(lives);
	home_frogs();
	draw_vehicles();
	draw_logs();
	draw_frog();
}

function home_frogs(){
	for (var h in home){
		if (home[h]){
			forward_crouched_frog(17+(h*85),frog_y[12]);
		}
	}
}

function draw_board(){


// Blue river
	ctx.fillStyle="#191970";
	ctx.fillRect(0,0,400,287);

// FROGGER Header
	ctx.drawImage(sprite,15,13,319,32,15,15,319,32);

// Goal area
	ctx.drawImage(sprite,0,54,399,53,0,58,400,53);
	
// Black road
	ctx.fillRect(0,288,400,288);
//  purple bars
	ctx.drawImage(sprite,0,119,399,35,0,275,400,35);
	ctx.drawImage(sprite,0,119,399,35,0,495,400,35);

}

function draw_vehicles(){
	for (var v in vehicles){
		var m = vehicles[v];
		draw_car(m.xcor,frog_y[m.ycor],m.type);
	}
}

function draw_frog(){
	forward_crouched_frog(frog.xcor, frog_y[frog.ycor]);
}

function draw_logs(){
	for (var l in logs){
		draw_log(logs[l].xcor, logs[l].ycor, logs[l].type);
	}
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

function draw_log(x,y,type){
	if (type == "small"){
		small_log(x,y);
	} else if (type == "med"){
		med_log(x,y);
	} else if (type == "long"){
		big_log(x,y);
	}
}

function med_log(x,y){
	ctx.drawImage(sprite,10,198,114,20,x,y,114,20);
}

function small_log(x,y){
	ctx.drawImage(sprite,10,230,82,20,x,y,82,20);
}

function big_log(x,y){
	ctx.drawImage(sprite,7,166,177,20,x,y,177,20);

}
function draw_car(x,y,type){
		if (type == "white_car"){
			white_car(x,y);
		} else if (type == "other_white"){
			other_white(x,y);
		} else if (type == "yellow"){
			yellow_car(x,y);
		} else if (type == "purple"){
			purp_car(x,y);
		} else if (type == "truck"){
			truck(x,y);
		}
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