<!--

// verbose mode
if (verbose) {verboseMode("load: universe.js");}

// space is defined here.
// lukas

var blockX = new Array();
var blockY = new Array();
var blockH = new Array();
var blockW = new Array();
var blockC = new Array();

function makeBlock(n,x,y,h,w,c) {
 blockX[n] = x;
 blockY[n] = y;
 blockH[n] = h;
 blockW[n] = w;
 blockC[n] = c;
}

function wallHere(x,y)
{
 if (x < 0)	{return true;}
 if (x > s-1)	{return true;}
 if (y < 0)	{return true;}
 if (y > s-1)	{return true;}
 return false;
}

function snakeHere(x,y)
{
 for (c=0; c<sC; c++)
 {
 	for (i=c*maxtail;i<=tail[c]+(c*maxtail);i++) {
 		if (location_x[i] == x && location_y[i] == y) {return true;}
	 }
 }

 return false;
}

// verbose mode
if (verbose) {verboseMode("done: universe.js");}

-->
