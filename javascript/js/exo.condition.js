/**
 * 
var nom = "lazo";
var email = "lazeny.konate@gmail.com";
var mot_de_passe = "lazo93" ;




var lazo = prompt("quel est votre nom");
if (nom == lazo) {
  var email2 = prompt("quel est mon adresse email");
} else {
  alert("nom invalide");
}


    if (email2 == email) {
      var mdp = prompt("mot de passe");
    } else {
      alert("email invalide");
    }


        if (mdp == mot_de_passe) {
          alert("bienvenu" + " " + "lazo");
        } else {
          alert("mot de passe invalide");
        }
        // EXERCICE 0
// demander deux nombres à l'utilisateur (dans deux champs distincts)
// au clic sur un bouton, afficher le résultat de la multplication
// exemple avec 4 et 5: "4 multiplié par 5 vaut 20"
 */
/**
 * var nb1 = Number(prompt("entrer un chifre ou un nombre")),
nb2 = Number(prompt("entrer un chiffre ou un nombre"));

if (nb1 && nb2){
    alert(nb1 * nb2);
}
    /**exo 1
    cree un champ de texte
    auclic sur un bouton,
    changer la couleur de fond de la page avec la couleur donnee par l' utilisateur 
    */
 
/**var couleur = prompt("entrez une couleur?");

if (couleur == 'noir'){
    document.body.style.backgroundColor = "#000";
    location.reload();
}

 else if (couleur == 'bleu'){
    document.body.style.backgroundColor = "blue";
    location.reload();
}

else if (couleur == "rouge") {
  document.body.style.backgroundColor = "red";
  location.reload();
}

else if (couleur == "vert") {
  document.body.style.backgroundColor = "green";
  location.reload();
}

*/

/**
 *  
Créé une condition qui si pseudo équivaut à samba et son mail coressppond samba@mail.fr
Ouvre une 2 boite de dialogue qui demande age et année
si age est sup à 20 ou année de naissance est superieur à 2000
Ouvre une boite de dialogue qui si équivaut à vrai renvoi ver le site de votre chooix
Sinon fait recommencer depuis le début(reload)
 */

/**
 * var pseudo = prompt("entrer votre nom"),  mail = prompt("entre votre email");

if (pseudo == "samba" && "samba@mail.fr") {
  var age = Number(prompt("quel est votre age")),
    anne = Number(prompt("quel est votre année?"));

  if (age > 20 || annee > 2000) {
    var vraifaux = confirm("vrai ou faux");

    if (vraifaux) {
      document.location.href = "https://google.com";
    } else {
      location.reload();
    }
  } else {
    location.reload();
  }
} else {
  location.reload();
}
*/



/**
 * // EXERCICE 3
// demander un nombre à l'utilisateur
// calculer le modulo de ce nombre divisé par 5
// Afficher le reste dans une phrase
// exemple avec 21 : "Si l'on divise 21 par 5, le reste est de 1" 

 */

/**
 *  var nb1 = Number(prompt("chiffre ou nombre"));

 if (nb1){
     alert(nb1 % 5);
 }
*/

 // EXERCICE 6
// documentation : étudiez le fonctionnement de confirm() en javascript
// Créer un confirm() Javascript
// si l'utilisateur clique sur oui, afficher une image
// sinon, afficher une autre image
var confirmation = confirm("change??");


if (confirmation){
    document.body.style.backgroundImage = "url(https://le10static.com/img/a/2/7/0/8/4/9/270849-large.jpg)";
      document.body.style.backgroundColor = "red" 
} else {
    alert ('false');
}


/**exo
var imageUrl = prompt("entrez l' url de l' image?");

if (imageUrl) {
       document.getElementById("img").src = imageUrl;
  }else
  location.reload();
  */

