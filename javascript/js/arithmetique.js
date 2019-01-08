var nb1, nb2, resultat;
nb1 = 10;
nb2 = 5;
// 1. addition
resultat = nb1 + nb2;
document.write(resultat + "<br>");

// 1. soustraction
resultat = nb1 - nb2;
document.write(resultat + "<br>");

// 1. multiplication
resultat = nb1 * nb2;
document.write(resultat + "<br>");

// 1.division 
resultat = nb1 / nb2;
document.write(resultat + "<br>");

// 1. modulo
// le modulo retourne le reste de la division
resultat = nb1 % nb2;
document.write(resultat);


// et maintenant on reaffect nb1
nb1 = 11;
resultat = nb1 % nb2;
document.write("le reste de la division(ou modulo) de " + nb1 + " par " + nb2 +" est egal a: " + resultat + "<br>");

// ecriture simplifiee
// 1. addition
 nb1 += 5;
document.write(nb1 + "<br>");

// 1. soustraction
nb1 -= 5;
document.write(nb1 + "<br>");

// 1. multiplication
nb1 *=5 ;
document.write(nb1 + "<br>");

// 1.division 
nb1 /= 5;
document.write(nb1 + "<br>");

// 1. modulo
// le modulo retourne le reste de la division
nb1 %= 5;
document.write(resultat);

// incrementation
var nb3 = 1;
// la variable nb3 stocke la valeur 1, puis on lui reaffecte la valeur nb3 + 1.
nb3 = nb3 + 1;// resultat: 2
// ecriture simplifiee incrementation
++nb3;
document.write( + "<br>");

// decrementation
nb = nb3 - 1;
nb3--;
document.write(nb3);
