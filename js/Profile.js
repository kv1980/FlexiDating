window.onload = function(){
    vulSelectIn("haarkleur",jsonKleurenHaren);
    vulSelectIn("oogkleur",jsonKleurenOgen);
    alert("Test");
};

function vulSelectIn(selectID,jsonID){
    var aKleuren = JSON.parse(jsonID);
    var eSelectKleuren = document.getElementById(selectID);
    for (var i = 0; i < aKleuren.length; i++) {
        var eOption = document.createElement('option');
        eOption.innerHTML = aKleuren[i];
        eOption.value = aKleuren[i];
        eSelectKleuren.appendChild(eOption);
    };
};