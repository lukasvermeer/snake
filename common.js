<!--

// verbose mode
if (verbose) {verboseMode("load: common.js");}

// these functions define the behaviour of the enviroment in the simulation
// lukas

lib = getLibs();
for (i=0;lib[i]!=null;i++) {
	document.write('<script language="JavaScript" type="text/javascript" src="'+lib[i]+'.js"></script>');
}

function Boot()
{
 window.status = "booting...";
 startTail = 0; maxtail = 500; survivalRate = 250; foodQuality = 500; updateStats = false; tail = new Array(); last_direction = new Array(); location_x = new Array(); location_y = new Array(); genePool = new Array(); historyN = new Array(); historyL = new Array(); historyC = 0; alive = new Array(); breedingProgram = new Array(); lastBite = new Array();
 colorSnakes();
 for (z=0;z<sC;z++) { Init(z, randomGenes("God", "Top")); }
 feedSnake();
 if (verbose) {verboseMode("completed: BOOT");}
}

function Init(n,genes)
{
 window.status = "initializing snake ["+n+"]...";
 location_x[n*maxtail] = Math.ceil(s * Math.random()) - 1; location_y[n*maxtail] = Math.ceil(s * Math.random()) - 1;
 if (wallHere(location_x[n*maxtail], location_y[n*maxtail])) {Init(n, genes);}
 else {InitBasic(n, genes);}
 if (verbose) {verboseMode("completed: INIT("+n+")");}
}

function InitXY(n,x,y,genes)
{
 window.status = "initializing snake ["+n+"]...";
 location_x[n*maxtail] = x; location_y[n*maxtail] = y;
 InitBasic(n,genes);
}

function InitBasic(n,genes) {
 last_direction[n] = 1; tail[n] = startTail; lastBite[n] = 0;
 for (x=1;x<=tail[n];x++)
 {  location_x[x+(n*maxtail)] = location_x[(n*maxtail)];
    location_y[x+(n*maxtail)] = location_y[(n*maxtail)]; }
 colorSnake(n);
 genePool[n] = genes;
 addtoHist(n);
 alive[n] = true; 
 window.status = "running...";
}

function feedSnake()
{
 HideBite();
 bite_x = Math.ceil(s  * Math.random()) - 1; bite_y = Math.ceil(s * Math.random()) - 1;
 while (snakeHere(bite_x, bite_y) || wallHere(bite_x, bite_y)) {bite_x = Math.ceil(s  * Math.random()) - 1; bite_y = Math.ceil(s * Math.random()) - 1;}
 runtime = 0;
}

function feedSnakeXY(x,y)
{
 HideBite();
 bite_x = x; bite_y = y;
 runtime = 0;
}

// verbose mode
if (verbose) {verboseMode("done: common.js");}

-->