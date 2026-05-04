console.log("salut") // console.log = écrire dans la console //

let age = 17; // une variable dont le contenu evolue //
const vitesselumier = 380000; // une variable dont le contenu n'évoluera pas : une constante//

let salut="bonjour romain, sa va"
console.log(salut)

let connecte=false

console.log(age)

console.log(connecte)

let i =0;

i= i +1;

console.log(i)

i= i +1;

console.log(i)

i= i +1;

console.log(i)

i= i +1;

console.log(i)

i= i +1;

console.log(i)

//i=i +1, i+=1, i++, ces trois exemple donne le même résultat//

let prenom = "romain";

let nom= " charles"

let nomcomplet = prenom + nom 

console.log(nomcomplet)

let nommcomplet = `le prenom ${prenom} et le nom est ${nom}`;

console.log(nommcomplet)

// exo 4//
let phase =  "bonjour " + prenom + " comment tu vas aujourd'hui";

console.log(phase)

let phase2 = `bonjour  ${prenom} comment tu vas aujourd'hui`;
console.log(phase2) // methode interpolation //

//correction //

console.log("salut" + prenom + "comment sa va aujourd'hui ?") // methode concatenation //



//exo 5//
let phrase = "je suis fatigué aujourd'hui";

let longueurphrase = phrase.length

console.log (phrase.length)

console.log(` la phrase: ${phrase} contient ${longueurphrase} caractère`)

//exo 6//

let mot= "chateau"

console.log(mot.replace("t","p")) // replace permet de remplacer une lettre mais seulement la premier itération et pour remplacer toute les lettres designer il faut taper replaceall//

//exo 7//

let Mot = "pelican"
console.log(Mot.length)
console.log(Mot.indexOf("p"))
console.log(Mot[0]) // pour aller chercher un caractere c'est la variable [] ou charat()//
// pour trouver la derniere lettre de Mot il faut taper console.log(Mot[Mot.length-1])//
console.log(Mot[Mot.length-1])