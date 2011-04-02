<!--

// verbose mode
if (verbose) {verboseMode("load: darwin.js");}

// Darwin gives names to the different snake mutations..
// lukas

function Darwin(g) {
 name = "unknown";
 if (g[2] > 0) { name = "suicidal";}
 if (g[1] < 0) { name = "pessimist";}
 if (g[1] < 0 && g[2] < 0 && g[4] < 0 && g[5] < 0 && g[6] < 0 && g[7] < 0 && g[8] < 0) { name = "quitter";}

 name+=" ("+g[1]+"|"+g[2]+"|"+g[4]+"|"+g[5]+"|"+g[6]+"|"+g[7]+"|"+g[8]+")"

 return name;
}

// verbose mode
if (verbose) {verboseMode("done: darwin.js");}

-->