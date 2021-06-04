
/////////////// BUSINESS LOGIC

function getNumCarteRimanenti() {
	return deckSize - (indice+1);
}

function pesca() {
	if (indice >= deckSize) {		
		initMazzo();
	}
	return mazzo[indice++];
}

function mescola(mazzo) {
  var currentIndex = mazzo.length,  randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [mazzo[currentIndex], mazzo[randomIndex]] = [
      mazzo[randomIndex], mazzo[currentIndex]];
  }
  return mazzo;
}

function getImmagine(folderName, fileName){
	var immagine = document.createElement("img");
	immagine.src = "img/" + folderName + "/" + fileName;
	if (folderName == 'deck') {
		immagine.id = "c_pescata";
		immagine.className = "mazzo front animated flipInY";
		immagine.onclick = pescaEMostra;
	} else {
		immagine.className = "cartaround";
	}
	return immagine;
}

function getDado3() {
	var rand = Math.random();
	return Math.ceil(rand*3);
}



//////////////////// VIEW

function pescaEMostra() {
	var carta = 'a_' + pesca() + '.jpg';
	mostra(carta);
	document.getElementById('numPescate').innerHTML = (indice);
}

function mostra(carta) {
	var cartaPescata = document.getElementById('c_pescata');
	if (cartaPescata) {
		document.getElementById('risultato').removeChild(cartaPescata);
	}
	document.getElementById('risultato').appendChild(getImmagine('deck', carta));
}
	
function apriRound(num) {
	document.getElementById("legendaC").style.display = "none";
	document.getElementById('legendaVera').innerHTML = "";
	document.getElementById('legendaVera').appendChild(getImmagine('round', 'r' + num + '_' + round[num] + '.jpg'));
	document.getElementById("legendaO").style.display = "block";
}

function chiudiRound() {
	document.getElementById("legendaO").style.display = "none";
	document.getElementById("legendaC").style.display = "block";
}



/////////////////// TEST

function testDado() {
	var result = [];
	for (var i=0; i<12; i++) {
		result[i+1]=0;
	}
	for (var i=0; i<1000000; i++) {
		var dado = getDado();
		result[dado]++;
	}
	var testo= '';
	for (var i=0; i<12; i++) {
		testo = testo + (i+1) + ': ' + result[i+1] + '\n';
	}
	alert(testo);
}