var mois = prompt("saisir un mois");

if (mois == 2) {
  document.write("ce mois contient 28j");
 } else if ((mois === 1) || (mois === 3) || (mois ===5) || (mois === 7) || (mois ===8) || (mois ===10) || (mois === 12)){
     document.write("ce mois contient 31jours");
 }else if ((mois === 4) || (mois === 6) || (mois === 9) || (mois === 7) || (mois === 11)){ 
     document.write("ce mois contient 30 jours");
 } else{
     document.write("ce mois n'existe pas");
 }
