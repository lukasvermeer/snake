<!--

// verbose mode
if (verbose) {verboseMode("load: stats.js");}

// functions used by the 'stats'-window.
// lukas

function showStats() {
 if (go()!=true) {
	showClean=true;
	filterHeight = 2;
	statsW = window.open("about:blank", "stats", "status=no, height=200, width=900, scrollbars=yes, resizable=yes");
	updateMe=false;
	statsW.document.open();
	statsW.document.write(makeBody());
	statsW.document.close();
 }
}

function showRun() {
 //if (go()==true) {statsW.run.tw.value = runtime;}
}

function go() {
 return updateMe;
}

function updateStatsWin() {
 if (go()==true && statsW.run.update.checked) {
	showClean = statsW.run.clean.checked;
	updateSave = statsW.run.update.checked;
	statsW.document.open();
	updateMe=updateSave;
	statsW.document.write(makeBody());
	statsW.document.close();
	statsW.location = "#b";
 }
}

function updateStatsWinClick() {
 showClean = statsW.run.clean.checked;
 updateSave = statsW.run.update.checked;
 filterHeight = statsW.run.filter.value;
 statsW.document.open();
 updateMe=updateSave;
 statsW.document.write(makeBody());
 statsW.document.close();
 statsW.location = "#b";
}


function makeBody() {
 page = "<html><head><title>AISnake STATS</title></head><body leftMargin=0 topMargin=0 onUnload='window.opener.updateMe=false;'><table width=100% cellPadding=0 cellSpacing=0 border=0>";
 page += "<tr bgcolor=black><td><font color=white>#</font></td><td><font color=white>g</font></td><td><font color=white>species</font></td><td><font color=white>parent</font></td><td><font color=white>creation type</font></td><td><font color=white>length at death</font></td><td><font color=white>type of death</font></td></tr>";

 his = historyL;

 if (showClean == true) {
	for (n=0; his[n]!=null; n++) { 
		x = his[n];
		if (parseInt(x[11]) >= parseInt(filterHeight) || x[11] == null) {
			page += printLine(his[n]); 
		}
	 }
 }
 else { for (n=0; his[n]!=null; n++) { page += printLine(his[n]); }}

 page += "</table><form name='run'>";

 page += "show clean history <input type=checkbox";
 if (showClean==true) {page += " checked ";}
 page += " name=clean>";

 page += "filter <input type=text value=";
 page += filterHeight;
 page += " name=filter>";

 page += " || auto-update <input type=checkbox";
 if (updateMe==true) {page += " checked ";}
 page += " name=update onClick='window.opener.updateStatsWinClick();'>";

 page += " || <a href='#' onClick='window.opener.updateStatsWinClick();'>update</a> || total snakes: "+ sC +"</form><a name='b'></body></html>";
 return page;
}

function printLine(g) {
 string = "";
 string+= "<td>" + g[0] + "</td>";
 string+= "<td>" + Darwin(g) + "</td>";
 string+= "<td>" + g[9] + "</td>";
 string+= "<td>" + g[10] + "</td>";
 string+= "<td>" + g[11] + "</td>";
 string+= "<td>" + g[12] + "</td>";

 string += "</tr>";

 c = "white";
 if (g[11]==null)	{ c = "#ccffcc";}
 if (g[12]=="hunger")	{ c = "#ffcccc";}
 if (g[11]=="0")	{ c = "#aa0000";}
 if (g[11]=="1")	{ c = "#aa0000";}

 head = "<tr bgcolor='"+c+"'><td>" + n + "</td>";
 return head + string;
}

// verbose mode
if (verbose) {verboseMode("done: stats.js");}

-->