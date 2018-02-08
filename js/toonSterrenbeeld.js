function toonSterrenbeeld(oPersoon,eVeld){
	var dGeboorteDatum = new Date(oPersoon.geboortedatum);
	var nDag = dGeboortedatum.getDate();
	var nMaand = dGeboortedatum.getMonth();
	var sterrenbeelden = ["steenbok","waterman","vissen","ram","stier","tweeling","kreeft","leeuw","maagd","weegschaal","schorpioen","boogschutter","steenbok"];
	var overgangsdag = [21, 20, 21, 20, 21, 22, 24, 24, 23, 23, 23];
	var sterrenbeeld = (nDag < overgangsdag[nMaand]) ? sterrenbeelden[nMaand] : sterrenbeelden[nMaand+1];
	var eImg = document.createElement("img");
	eImg.src = "../img/"+sterrenbeeld;
	eImg.alt = "het sterrenbeeld";
	eVeld.appendChild(eImg);
}