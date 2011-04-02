<!--

// verbose mode
if (verbose) {verboseMode("load: genetics.js");}

// genetic functions used for the mutations.
// lukas

function killSnake(n, why) {
 alive[n] = false;
 for (i=n*maxtail;i<=tail[n]+(n*maxtail);i++) {
 	DrawBlip(location_x[i], location_y[i], 'white');
	location_x[i] = null;
	location_y[i] = null; }

 genes = genePool[n]; hist = new Array(); for (var i=0; genes[i] != null; i++) { hist[i] = genes[i]; }
 hist[i] = tail[n]; hist[i+1] = why; historyL[historyN[n]] = hist; tail[n] = null;

 enterBreedProg(historyN[n]);

 updateStatsWin(historyN[n]);
}

function enterBreedProg(p) {
 for (var i=0;breedingProgram[i]!=null;i++) {}
 if (i<3) {breedingProgram[i] = p;}
 else {
	breedingProgram[3] = p;
	compare_and_breed(breedingProgram);
	for (i=0;i<=3;i++) {breedingProgram[i]=null;}
 }
}

function compare_and_breed(p) {
 score = new Array;
 genes = new Array;
 var best = -1;
 var bestman = null;

 for (z=0;p[z]!=null;z++) {
	score[z]=getScore(p[z]);
	genes[z]=cloneGenes(p[z]);
	if (score[z]>=best) {
		best = score[z];
		bestman = z;
	}
 }

 if (best == 0) {
	AddSnake(randomGenes("God")); 
	AddSnake(randomGenes("God")); 
	AddSnake(randomGenes("God")); 
	AddSnake(randomGenes("God")); 
 }
 else { 
	AddSnake(genes[bestman]);
	AddSnake(mutateGenes(p[bestman]));
	AddSnake(mutateGenes(p[bestman]));
	AddSnake(mutateGenes(p[bestman]));
 }
}

function mutateGenes(p) {
 oldgenes = historyL[p]
 newgenes = new Array();
 newgenes[0] = parseInt(oldgenes[0])+1;
 newgenes[3] = oldgenes[3];
 newgenes[9] = p;
 newgenes[10] = "mutation";

 for (i=1; i<=2; i++) {
  if (mutationInhibitor()) {newgenes[i] = mutateGene(oldgenes[i]);}
  else if (unstableMutationInhibitor()) {newgenes[i] = randomGene();}
  else {newgenes[i] = oldgenes[i];}
 }
 for (i=4; i<=8; i++) {
  if (mutationInhibitor()) {newgenes[i] = mutateGene(oldgenes[i]);}
  else if (unstableMutationInhibitor()) {newgenes[i] = randomGene();}
  else {newgenes[i] = oldgenes[i];}
 }

 return newgenes;
}

function mutationInhibitor() {		return (Math.round(Math.random()*8) == 1); }
function unstableMutationInhibitor() {	return (Math.round(Math.random()*8) == 1); }
function mutateGene(x) {		return x + ((Math.round(Math.random()*10)/2) - 5); }
function randomGene() {			return (Math.round(Math.random()*200)/2-50); }
function getScore(p) {
 n = historyL[p];
 return n[11];
}
function AddSnake(g) { 			for (var i=0;alive[i] == true;i++) {} alive[i] = true;  Init(i, g); }

function randomGenes(p) {
 genes = new Array();
 genes = defaultGenes(p);
 genes[1] = randomGene();
 genes[2] = randomGene();
 genes[4] = randomGene();
 genes[5] = randomGene();
 genes[6] = randomGene();
 genes[7] = randomGene();
 genes[8] = randomGene();
 genes[10] = "random";
 return genes;
}

function createGenes(p) {
 genes = new Array();
 genes = defaultGenes(p);
 genes[1] = mutateGene(genes[1]);
 genes[2] = mutateGene(genes[2]);
 genes[4] = mutateGene(genes[4]);
 genes[5] = mutateGene(genes[5]);
 genes[6] = mutateGene(genes[6]);
 genes[7] = mutateGene(genes[7]);
 genes[8] = mutateGene(genes[8]);
 genes[10] = "mutation of default";
 return genes;
}

function cloneGenes(p) { oldgenes = historyL[p]; newgenes = new Array(); for (i=0; i<=8; i++) { newgenes[i] = oldgenes[i]; } newgenes[9] = p; newgenes[10] = "clone";  newgenes[0] = parseInt(newgenes[0])+1; return newgenes; }

function defaultGenes(p) { genes = new Array(); genes[0] = 0; genes[1] = 1; genes[2] = -999; genes[3] = -999; genes[4] = 2; genes[5] = 1; genes[6] = 2; genes[7] = 1; genes[8] = 0.5; genes[9] = p; genes[10] = "default"; return genes; }

function addtoHist(n) {
 historyN[n] = historyC;
 historyL[historyN[n]] = genePool[n];
 historyC++;
}

// verbose mode
if (verbose) {verboseMode("done: genetics.js");}

-->