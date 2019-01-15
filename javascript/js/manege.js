for (i = 0; i <= 10; i++){
    document.write("tour de manege n°" + j + "<br>");
}
var j = 0;

while (j <= 10) {
  document.write("<p>tour de manege while n°" + j + "<br>");
  j++;
}

ou

// for (var i = 0; i <= 10; i += 1) {
//   document.write("tour de boucle n°" + i + "<br>");
// }


var ii = prompt('saisir un nombre');
for (var i = 1; i <= ii; i++) {
 document.write("tour de boucle n°" + i + "<br>");
}