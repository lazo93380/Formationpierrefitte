// structure de base IF
// if(macondition){
//     // par defaut la condition va verifier si la condition a verifier est vrai.
//     // code a executer si la condition est verifier.
// }

var nb1 = 10;
if (nb1 < 50) {
    document.write("nb1 est inferieur a 50");
}

if (nb1 > 50){
    document.write("nb1 est bien superieur a 50"); 
} else{
    document.write("nb1 est bien inferieur a 50");
}

var majorite = 18;
var age  = Number(prompt("quel est votre age ??"))

if (age >= majorite) {
    alert("bienvenu sur le site")
    
} else{
    alert("casse-toi t'a pas l' age !!");
    document.location.href = "https://google.com";
}

var heure = Number(prompt("quel heure est-il ??"));

if(heure < 12){
    alert("c est le matin")
}else if (heure ==12){
    alert("il est midi");
}else if (heure < 18){
    alert("c est l' apres-midi");
}else{
    alert("c est le soir");
}
