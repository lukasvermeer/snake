<!--

// verbose mode
if (verbose) {verboseMode("load: layout.js");}

// this is the script that defines the layout for the visual representation of the AISnake simulation.
// lukas

for (y=0;y<s;y++) {
	document.write('<tr height="'+100/s+'%" border="0">');
	for (x=0;x<s;x++) {
		for (i=0;blockX[i]!=null;i++) {if (x == blockX[i] && y == blockY[i]) {document.write('<td ID="feed'+((y*s)+x+1)+'" colspan="'+(blockW[i]+1)+'" rowspan="'+(blockH[i]+1)+'">'+blockC[i]+'</td>');}}
			document.write('<td ID="feed'+((y*s)+x+1)+'" width="'+100/s+'%" onMouseOver="clickFeed('+y+','+x+')" onClick="addSnakeXY('+x+','+y+')">&nbsp;</td>');
	}
	document.write('</tr>');
} 
document.write('</table>');

function clickFeed(x,y) {
 //feedSnakeXY(y,x);
}

function addSnakeXY(x,y) {
 sC++;
 colorSnake(sC-1);
 InitXY(sC-1,x,y,randomGenes("User", "Top"));
 if (updateStats==true) {updateStatsWin();}
}

// verbose mode
if (verbose) {verboseMode("done: layout.js");}

-->