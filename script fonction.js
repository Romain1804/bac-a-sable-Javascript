//exo 1//
/*role calculer la moyenne
paremetre calculer la moyenne selon 4 note
retour : afficher la moyenne*/
let math= 15;

let français= 12;

let italien=9;

let chimie=10;

function Moyen(a,b,c,d){return(a+b+c+d)/4}

let moyennE=Moyen(10,14,13,12)

console.log(moyennE)


//exo 2//
/*role gérer la réduction des pomme
paremetre  
retour : */

let stock= 4

function decremente(){stock--;}
console.log(stock)

decremente()
console.log(stock)

//exo 3//
/*role gérer la réduction des pomme
paremetre mot donnée 
retour :  */

let mot="chevalier"

function dnrmot(mot)
{return mot[mot.length-1]}

console.log(dnrmot(mot))

//correction//


//exo 4//

/*role remplacer le bubble tea par un autre produit
paremetre mot donnée ,la liste
retour : voir le dernier produit change */


function replace(nvproduit,liste){return console.log(liste.replace("bubble_tea","cacao",))}

replace("matcha","cafe,bubble_tea,tisane")


// exo annexe//
/*role afficher des balises a ma page html
paremetre la balises a ajoute
retour : rien  */

function ajouterbalise(balise){document.querySelector("body").innerHTML+=balise}
ajouterbalise("<h1>Coucou</h1>")
ajouterbalise("<p> on est vraimer content en js</h1>")
ajouterbalise("<h2>Coucou les amie</h2>")

// exo annexe//
/*role afficher et additionner 2 chiffre
paremetre les chiffre a additionner 
retour : rien  */

function afficheraddition(a,b){
    ajouterbalise(`<p>${a+b}</p>`)
}

afficheraddition(7,5)

// exo annexe//
/*role afficher nom et prenom
paremetre nom , prenom 
retour : rien  */

function afficherprenom(prenom){
    ajouterbalise(`<p>${prenom}</p>`)
}

afficherprenom("romain")

//exo 5 //
/*role permettre de vérifier si l'adresse mail a bien @ et afficher si @ présent
paremetre adresse mail
retour : */


let mail=" adresse.mail@dd.com"

function verifmail(mail)
{console.log(mail.includes('@'))}

verifmail("adrres.ff@ff.fr")
verifmail("adrres.ffggff.fr")

// exo 6 //

/*role afficher le resultat de deux chiffre renseigne
paremetre chiffre a et b 
retour : rien  */

let chiffrea = 12

let chiffreb = 23

function returnadition(chiffrea,chiffreb)
{return chiffrea+chiffreb}

console.log(returnadition(12,23))