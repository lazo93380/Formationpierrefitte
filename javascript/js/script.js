// commentaire sur une ligne

/** 
 * un 
 * commentaire
 * sur
 * plusieur
 * lignes
 * /
  /**
   * les variables
   * une variable est un un conteneur servant a stocker temporairement une information(ou donnee). en javascript on declare une variable avec le mot-clé: "var" suivie du nom de la variable, chaque variable doit avoir un nom unique(egalement appeler en anglais "identifier").
   * le nom d' une variable doit observer quelques regles a savoir:
   * le nom d' une variable doit commencer par une lettre;
   * le nom d' une variable ne peyt contenir que des lettres(non accentuées), des chiffres ou les signes "_" et "$"
   * le nom d' une variable est sensible a la casse c' est a dire que "a" est different de "A"
   * le javascript possède des mots "réservés" qu' on ne peut utilisé pour crée un variable(ex: var, alert,...).
   */

   // on declare une variable et on lui affecte immediatement une valeur
   var x = 25;
   var X = 100;// celle-ci est differente de la var"x"

   // on declare plusieurs variables d' un coup 
   var nom = "lazo",
   prenom = "dybala",
   date = "01/11/93";

   // on declare une variable sans lui affecter de valeur, puis on lui affecte une valeur ensuite(non recommande).
   var age;
   age =25;



// on declare une variable sans lui affecter de valeur, puis on lui affecte une valeur ensuite(non recommande).
   var ville = "";
   ville = "pierrefitte";
x = x + 5;

console.log ("nos variables sont:" + x +'\n' + X + '\n' + nom + prenom + date + '\n' + age + '\n' + ville);
/**
* En javascript le signe égal (=) n'est pas un opérateur d'égalité mais un opérateur d'affectation càd qu'il sert à affecter (ou assigner) une valeur à une variable et non que la variable est égal à sa valeur. Ainsi on va pouvoir affecter differentes valeurs à une même varianles dans le temps.
*/


/**
 * les types de (valeurs de) variables
 * les types de valeurs vont avoir une influence sur notre code, puisqu' on ne stockera pas de la memes facon un chiffre ou une chaine de caracteres( un texte) par exemple dans une variable. 
 * nous ne pourrons pas non plus effectuer les memes operations sur les variables selon le type de valeurs qu' elles stockent.
 * 
 * le type number
 * il va representer tout nombre ou chiffre, qu' il soit positive ou negatif, entier ou a virgule. pour affecter une valeur de type number on utilise ni guillemet ni appostrophe.
 * /!\ attention: een programmation on utilise des notations anglo-saxonne, ce qui signifie qu' il faut remplacer nos virgules par des points pour les nombres decimaux. */
var number = 25;
var number2 = -15;
var number3 = 1.09;

/**
 * le type string
 * il va representer les chaines de caracteres c' est-a-dire les textes.
 * pour afffecter une chaine de caractere a une variable il faut l' entourer avec des guillemets ou apostrophes.*/

 var texte = "lorem ipsum";
 var desc = "lorem ipsilum";
 
/**
 * cependant si la valeur stocker contient elle meme des apostrophes ou des guillemets il faudra les echapper au moyen d' un antislas(\) 
 */

var dept = 'Je suis du "9.2"'; // Je suis dans des guillemets dons j'echappe l'guillemets

var dept = 'Je suis du "9.2"' + '<br>';

document.write(dept + "<br>");

var dept2 = "J'habite dans le 9.2"; // Je suis dans des apostrophes dons j'echappe l'apostrophe

var dept2 = "J'habite dans le 9.2";

document.write(dept2 + "<br>");

/**
 * le type boolean(booléen)
 * un booléen en algebre c' est une valeur binaire(soit 0 ou 1), en programmation un booléen va etre soit la valeur true(vrai ou 1) soit la valeur false(faux ou 0)
 * pour affecter un boolean a une variable on utilise ni guillemet, ni apostrophe.
 */
 var vrai = true;
 var faux = false;

 /**
  * les autres types
  * parmi les autres valeurs possible on peut citer la valeurs "null", qui correspond a la non connaissance a priori de la valeur. "undefined", qui corespond au fait de ne pas voir défini de valeur pour notre variable. "NaN" qui signifie "not a nimber" soit n' est pas un n ombre
  */
var n = null,
u = undefined,
nn = NaN;

// /!\ notez qu' il est possible de cganfer le type de valeur d' une variable, la nouvelle ecrasera tout simplement l' ancienne.

var tt =25; // type number
tt = true; //type boolean
tt = 1.09; //type null 
tt = "tt"; //type string

/**
 * pour tester le type de la valeur, on utilise généralement la methode "typeof()"
 */

alert( typeof(tt));

// declarer une variable de maniere eppxplicite ou implicite
var maVariable = 'toto'; // "maVariable" est ce qu' on appelle une écriture camel case

ma_variable = 'toto';// "ma_variable" est ce qu' on appelle une écriture snake case

// afficher dans la console
alert("je sert a afficher des données dans une boite de dialogue");
console.log("je sert a afficher des données dans la console");

// afficher dans le navigateur (page web)
document.write("je sert a afficher des données dans la page web")

// demander a l' utilisateur d' entrer une valeur 
prompt("je sert a afficher des données dans une boite de dialogue qui va demander a l' utilisateur de rentrer des données");

// méthode(ou fonction) parseint(), la methode parseint() renvoi un nombre ou chiffre entier a partir d' une chaine de caractere(string)
var unChiffre = "12";
document.write(unChiffre + '<br>'); // 12
document.write(typeof (unChiffre) + '<br>'); // string
unChiffre = parseInt(unChiffre + '<br>');
document.write(unChiffre + '<br>'); //12
document.write(typeof (unChiffre) + '<br>'); //number
//Méthode (ou fonction) parseFloat()
var nb_en_lettre = "12.22";
document.write(nb_en_lettre + '<br>'); // 12
document.write(typeof (nb_en_lettre) + '<br>'); // string
nb_en_lettre = parseFloat(nb_en_lettre + '<br>');
document.write(nb_en_lettre + '<br>'); //12
document.write(typeof (nb_en_lettre) + '<br>'); //number
//Méthode toString(), qui sert a convertir en chaînes de caractère
var nb_en_lettre = "258";
document.write(nb_en_lettre + '<br>');
document.write(typeof (nb_en_lettre) + '<br>');
nb_en_lettre = nb_en_lettre.toString();
document.write(nb_en_lettre + '<br>');
document.write(typeof (nb_en_lettre) + '<br>');


alert("hello, je me lance depuis le fichier script.js!!");



