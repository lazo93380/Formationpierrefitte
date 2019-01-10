var nb1 = Number(prompt("saisir un chiffre ou un nombre")),
  nb2 = Number(prompt("saisir un chiffre ou un nombre"));

if (nb1 == nb2) {
  document.write(nb1 + "est égale à" + nb2);
} else if (nb1 >= nb2) {
  document.write(nb1 + "est plus grand que" + nb2);
} else {
  document.write(nb1 + "est plus petit que" + nb2);
}
