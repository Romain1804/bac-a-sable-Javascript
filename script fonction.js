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

//exo 7//

/*role afficher le prompt d'une question
paremetre la question
retour : rien  */
 function poserQuestion(laQuestion){

    let rep = prompt(laQuestion)
    return rep
 }

 console.log(poserQuestion("le ciel est t il bleu ?"))

//correction //

// on peut realiser la fonction  en notant : return prompt ( la question)

//exo 8//

/*role convertir un prix en dollar
paremetre prix en euro
retour : le prix en dollars  */

function endollars (leprixeuro){
    return leprixeuro*1.17
}

endollars(150)

console.log(endollars(200))

//correction//

function conversion( prix, taux){
    return prix*taux;
}

 let resultat = conversion(23,1.17)

console.log(` le prix convertit est de ${resultat} dollar`)

//exo 8 v2//

/*role demander un taux et un prix et convertit
paremetre prix et taux de change  
retour : le prix convertit   */

function convertisseur (){
    //demande le prix
     let unprix=parseFloat (prompt("quel prix veut tu convertir"))

    // demande le taux //
     let taux = parseFloat(prompt("quel est le taux"))

    //convertit//

    return unprix*taux
    
    //retourner le resultat//
}

let prixconvertit= convertisseur()

alert(`le prix convertit est de ${prixconvertit} dollars `)


//exo annexe moyenne //

/*role calculer  la moyenne  a partir des note donné
paremetre : rien
retour :  la moyenne   */

function lesmoyenne (){
    // la note de math et convertir en type number//
    let math= parseFloat(prompt("quel est la note de math"))

    // la note de français et convertir en type number//
    let français = parseFloat(prompt("quel est la note de français"))

    // la note d'histoire et convertir en type number //
    let histoire = parseFloat(prompt("quel est la note d'histoire"))

    // la note de svt et convertir en type number//
    let svt=parseFloat(prompt("quel est la note de svt"))

    // calcul de la moyenne //

    return (math+français+histoire+svt)/4
// on peut aussi créer un let avec le calcul puis mettre la let dans le return//
}

 let lamoyenne =lesmoyenne()

 alert(`la moyenne de l'eleve est de ${lamoyenne}`)
 
 /* operateur de comparaison 
 == comporte les valeurs identique
 === comporte strictement les meme valeurs et types 
 != different
 >< superieur et inferieur*/