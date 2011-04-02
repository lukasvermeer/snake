<!--

// verbose mode
if (verbose) {verboseMode("load: type_web.js");}

// functions used in the -web display- version of the simulation
// lukas

function getLibs() {
 var lib = new Array();

 lib[0] = "universe";
 lib[1] = "layout";
 lib[2] = "graphics";
 lib[3] = "brain";
 lib[4] = "stats";
 lib[5] = "genetics";
 lib[6] = "darwin";

 return lib;
}

function Type() { runtime = 0; wait = 10; }
function Loop() { for (i=0;i<=1;i++) {Rush();} timerID=setTimeout('Loop()', wait); }

function Rush()
{
 runtime++;
 for (z=0;z<sC;z++)	{
	if (alive[z] == true) { killTail(z); Run(z, genePool[z]);}
	if (alive[z] == true) { drawSnake(z); }
 }
 if (runtime >= 200)	{ feedSnake(); }
 showRun();
 ShowBite();
}

// verbose mode
if (verbose) {verboseMode("done: type_web.js");}

-->