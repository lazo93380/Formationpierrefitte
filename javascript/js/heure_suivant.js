var heure = prompt("saisir une heure")
var minute = prompt("saisir une/des minutes(s)")
var seconde = prompt("saisir une seconde")
// verifie la validite de l'heure
if ((heure >= 0) && (heure <= 23) && (minute >=0) && (minute <= 59) && (seconde >=0) && (seconde <= 59)){
// incremente les secondes
seconde++;

if (seconde == "60") {
seconde = "00";
minute++;

if (minute == "60") {
    minute = "00";
    heure++;

    if (heure == "24") {
    heure = "00";
    }
}
}

document.write("<h3> dans une seconde il sera" + heure + "h" + minute + "m" + seconde + "s</h3>");
} else{
        document.write("<h3> l' heure entrer est invalide </h3>");
      }
