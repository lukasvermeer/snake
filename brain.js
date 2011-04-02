<!--

// verbose mode
if (verbose) {verboseMode("load: brain.js");}

// this is what you might call the 'brain' of the snakes ( they all use the same brain :) ). all 'decisions' are made here.
// lukas

function Run(n, genes) // run snake number 'n'
{
 lastBite[n]++;

 // [0] IDENTIFY GENES
 //
 //
 // AUTHORS NOTE:
 // this feature was added later, after a tip from my gf. She thought it would be a good idea to give the snakes the
 // ability to evolve.

 basic_need	= genes[1];
 wall_need	= genes[2];
 snake_need	= genes[3];
 bitex_need	= genes[4];
 bitex2_need	= genes[5];
 bitey_need	= genes[6];
 bitey2_need	= genes[7];
 last_need	= genes[8];

 // [1] CONSIDER ALL OPTIONS OPEN TO SNAKE
 //
 //
 // AUTHORS NOTE:
 // to decide in what direction the snake will make it's move, it will give each possible direction a score based on a few 
 // important positives and negatives. the snake will move in the direction with the highest score (above zero that is).

 var y_plus_need = basic_need; // down
 var y_minu_need = basic_need; // up
 var x_plus_need = basic_need; // right
 var x_minu_need = basic_need; // left

 var sx = location_x[n*maxtail];
 var sy = location_y[n*maxtail];

 // NEGATIVES (reasons not to go in a direction):

 // WALL [-99]
 // hitting a wall will kill the snake, and we don't want that to happen, now do we :)
 if (wallHere(sx - 1,sy))	{x_plus_need+=wall_need;}
 if (wallHere(sx + 1,sy))	{x_minu_need+=wall_need;}
 if (wallHere(sx,sy - 1))	{y_plus_need+=wall_need;}
 if (wallHere(sx,sy + 1))	{y_minu_need+=wall_need;}

 // OTHER SNAKE [-99]
 // same effect as hitting a wall, but somewhat more difficult to calculate.
 if (snakeHere(sx - 1, sy)) { x_plus_need+=snake_need; }
 if (snakeHere(sx + 1, sy)) { x_minu_need+=snake_need; }
 if (snakeHere(sx, sy - 1)) { y_plus_need+=snake_need; }
 if (snakeHere(sx, sy + 1)) { y_minu_need+=snake_need; }

 // POSITIVES (reasons to go somewhere):

 // FOOD [+2] (also [+1] for directions left and right of direct route to food)
 // go towards the food, but not at all costs. a somewhat strange way if awarding points, but better than just awarding points 
 // for the direct route, I have no clue as to why :)
 if (sx > bite_x ) {x_plus_need+=bitex_need;	y_plus_need+=bitex2_need;	y_minu_need+=bitex2_need;} 
 if (sx < bite_x ) {x_minu_need+=bitex_need;	y_plus_need+=bitex2_need;	y_minu_need+=bitex2_need;} 
 if (sy > bite_y ) {y_plus_need+=bitey_need;	x_plus_need+=bitey2_need;	x_minu_need+=bitey2_need;} 
 if (sy < bite_y ) {y_minu_need+=bitey_need;	x_plus_need+=bitey2_need;	x_minu_need+=bitey2_need;} 

 // LAST DIRECTION [+.5]
 // somehow this increases the life span of the snakes. if you figure out why, please tell me, because I really don't know...
 if (last_direction[n] == 1) {x_plus_need+=last_need;} 
 if (last_direction[n] == 2) {x_minu_need+=last_need;} 
 if (last_direction[n] == 3) {y_plus_need+=last_need;} 
 if (last_direction[n] == 4) {y_minu_need+=last_need;} 

 // [2] SELECT BEST OPTION
 //
 //
 // AUTHORS NOTE:
 // because I wanted to have the snakes run indefinitely ( for my desktop :) ) I made them so that they do not die, ever.
 // if a snake has no options left (he/she is trapped) it will decrease it's tail by one blip. this way there will always
 // be snakes and the simulation will not have to be restarted every now and then.

 best_option = Math.max(Math.max(x_plus_need, x_minu_need), Math.max(y_plus_need, y_minu_need));
 if (best_option <= 0) { killSnake(n, "gave up"); }
 else if (lastBite[n] >= survivalRate) { killSnake(n, "hunger"); }
 else {
	if (best_option == x_plus_need) {m = 1;} // left
	if (best_option == x_minu_need) {m = 2;} // right
	if (best_option == y_plus_need) {m = 3;} // up
	if (best_option == y_minu_need) {m = 4;} // down

 // [3] EXECUTE DECISION
 //
 //
 // AUTHORS NOTE:
 // the rest is boring execution of the decision, you might want to ignore this. then again, you might be a masochist

	for (x=tail[n];x>=1;x--) 
	{
		location_x[x+(n*maxtail)] = location_x[x - 1 + (n*maxtail)];			
		location_y[x+(n*maxtail)] = location_y[x - 1 + (n*maxtail)];
	}

	// snake ate the bite: 
	if (location_x[n*maxtail]==bite_x && location_y[n*maxtail]==bite_y) {			
	 	feedSnake();									
		lastBite[n] = lastBite[n] - foodQuality;
		if (tail[n]<=maxtail) {
			tail[n]++;
			location_x[tail[n]+(n*maxtail)] = location_x[tail[n]-1+(n*maxtail)];
			location_y[tail[n]+(n*maxtail)] = location_y[tail[n]-1+(n*maxtail)];
		}
	}

	if (m==1) {location_x[n*maxtail]--;}
	if (m==2) {location_x[n*maxtail]++;}
	if (m==3) {location_y[n*maxtail]--;}
	if (m==4) {location_y[n*maxtail]++;}

	last_direction[n] = m;
	if (wallHere(location_x[n*maxtail],location_y[n*maxtail])) { killSnake(n, "collision|"+location_x[n*maxtail]+","+location_y[n*maxtail]); }
 }
}

// verbose mode
if (verbose) {verboseMode("done: brain.js");}

-->