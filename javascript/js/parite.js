var ii = prompt("Saisir un nombre");

for (var i = 1; i <= ii; i++) {
  if (i % 2 === 0) {
    document.write(i + " est pair" + "<br>");
  } else if (i % 2 === 1) {
    document.write(i + " est impair" + "<br>");
  }
}
