<!--

// verbose mode
if (verbose) {verboseMode("load: graphics.js");}

// these are most of the graphics functions.
// lukas

function colorSnakes() 
{
 snakeColor = new Array(); headColor = new Array();
 Ca = new Array(); Ca[0] = "FF"; Ca[1] = "FF"; Ca[2] = "DD"; Ca[3] = "BB"; Ca[4] = "99"; Ca[5] = "77"; Ca[6] = "55"; Ca[7] = "33"; Ca[8] = "11"; Ca[9] = "00"; Ca[10] = "00";

 //biteColor = '#F9F9F9';					// bite color 'extra-lite'
 biteColor = '#50ff50';						// bite color 'visible'
}

function colorSnake(i) {
   r = Math.ceil(8 * Math.random()); g = Math.ceil(8 * Math.random()); b = Math.ceil(8 * Math.random());
   snakeColor[i] = '#'+Ca[r]+Ca[g]+Ca[b];			// tail color
   headColor[i] = '#'+Ca[r+2]+Ca[g+2]+Ca[b+2]; }		// head of snake color 

function ShowRank() 
{
 tail_by_rank = new Array(); color_by_rank = new Array();

 for (i=0;i<sC;i++) 
 {	tail_by_rank[i] = tail[i];
	color_by_rank[i] = snakeColor[i]; }

 // bubblesort, I think...
 for (i=sC-1;i>=0;i--) 
 { 	for (q=sC-i-1;q>=0;q--) 
 	{ 	if (tail_by_rank[q] < tail_by_rank[q+1]) 
		{	t = tail_by_rank[q];
			tail_by_rank[q] = tail_by_rank[q+1];
			tail_by_rank[q+1] = t;
			t = color_by_rank[q];
			color_by_rank[q] = color_by_rank[q+1];
			color_by_rank[q+1] = t;	}}}

 for (i=0;i<=2;i++)
 {	DrawRank(i+1, color_by_rank[i]); }
}

function killTail(z) { DrawBlip(location_x[tail[z]+(z*maxtail)], location_y[tail[z]+(z*maxtail)], 'white'); }

function drawSnake(z)
{
 if (tail[z]>=1) {DrawBlip(location_x[1+(z*maxtail)], location_y[1+(z*maxtail)], snakeColor[z])};
 DrawBlip(location_x[(z*maxtail)], location_y[(z*maxtail)], headColor[z]);
}

function ShowBite() { DrawBlip(bite_x, bite_y, biteColor); }

function HideBite() { DrawBlip(bite_x, bite_y, "white"); }

function DrawBlip(x,y,c) { 
 if (noFX==false) {
 	if (!wallHere(x,y)) {
  		eval("feed"+((y*s)+x+1)+".bgColor = c");
 	}
 }
}

// verbose mode
if (verbose) {verboseMode("done: graphics.js");}

-->