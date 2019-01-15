var t = "";
var ii = 0;
while (t !== "oui" && t !== "non") {
  t = prompt("saisir");
  ii++;
  document.write("game over");
}

var d = "";
for (i = 0; i < 7; i++) {
  d += "#";
  document.write(d + "<br>");
}
