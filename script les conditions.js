const number = 10

let strict = number === 10

console.log(strict)

//exo2

console.log("Hello" !== "hello")

// exo 3

console.log(8 > 12)

// si b=b -> bien joué 
// sinon -> dommage

/*let b =6
let c = 6
 
if(b===c){
   console.log("bien joue")

}else{
   console.log("dommage")
}

if(b===c){
   console.log("c'est pareil")
}else if(b>c){
   console.log("b est superieur a c")
}else {
   console.log("b est inferieur a c")
}*/

let connect = true

if (connect === true) {
    console.log("l'utilisateur est connecte")
} else {
    console.log("l'utilisateur n'est pas connecte")
}

//exo 4
let nb = 28
if (nb % 2 === 0) {
    console.log("le nombre est pair")
} else {
    console.log("le nombre est impair")
}

// exo 5 

let meteo = "neige"

if (meteo === "soleil") {
    console.log("prend une casquette")
} else if (meteo === "pluie") {
    console.log("n'oublie pas ton parapluie")
} else {
    console.log("met des bottes")
}


//exo 6

let agechild = 18

if (agechild < 12) {
    console.log("enfant")
} else if (agechild >= 12 && agechild <= 18) {
    console.log("adolescent")
} else if (agechild > 18) {
    console.log("adultes")
}

//exo 7

let a = 10

let b = 10

let c = 10

if (a === b && b === c && c === a) {
    console.log("triangle equilateral")

} else if (a != b && b != c && c != a) {
    console.log("triangle quelconque")
} else { console.log("triangle isocele") }


//exo 8

let agep = 17

let fidelite = "noabonne"

let achat = 101

if (agep >= 18 && fidelite === "abonne" || achat >= 100) {
    console.log("reduction accorde")
}
else if (agep < 18 && achat < 100) {
    console.log("reduction refuse")
}
else if (fidelite === "noabonne" && achat > 100) {
    console.log("reduction accorde")
} else if (agep < 18) {
    console.log("reduction refuse")
}
else { console.log("reduction refuse") }

//correction 

// role determine si une personne est eligible a une reduction 
// parametre : age ( number), membre( bolean), achat ( number )
// retour: "reduction accorde" ou "reduction refuse"

function reduction(age, membre, achat) {
    // si la personne a plus de 18 : reduction accorde
    if (age > 18) {
        //si la personne est membre ou a fait un achat >100
        if (membre === true || achat > 100) {
            return "reduction accorde"
        } else { return "reduction refuse" }

    } else { return "reduction refuse" }
    //sinon 
    // reduction refuse

    //sinon :
    // reduction 
}

let ticket = reduction(19, false, 80)
console.log(ticket)

//niveau 2

// exo 1

// role afficher la categorie du feu  
// parametre : rien
// retour: afficher le bon message"

function tricolore() {
    let color = prompt("quel est la couleur du feu tricolor")
    //si la couleur = rouge -> je m'arrete
    if (color === "rouge") {
        console.log("je m'arrête")
        //si la couleur = orange -> je freine
    } else if (color === "orange") {
        console.log("je freine")
        //si la couleur = vert -> je passe
    } else if (color === "vert") {
        console.log("je passe!")
        //sinon danger feu defectueux 
    } else {
        console.log("danger! feu defectueux")
    }

}

tricolore()

//correction 

/* 
demander a l'utilisateur de quelle couleur est le feu
role : demander a l'utilisateur de quelle couleur est le feu
parametre : non
return : la reponse de l'utilisateur ( rouge, vert, orange ou autre)
bien penser a donner le nom de l'utilisation ex: demander couleur) pour les fonction 

separe la fonction prompt et la fonction afficher message 
role afficher une indication de conduite
parametre : couleur du feu 
return rien

fonction afficher couleur 

3eme fonction
role appeler  demander couleur puis affiche info
parametre 
return

function lancerfonction () { 
let coileur = demander couleur ()
afficher infoconduite ( couleur)}
*/ 

//exo2 bulletin de note 

// role calculer et retourner la moyenne generale  
// parametre : moyenne des matiere 
// retour: la moyenne general 

function moyeng(math,français,histoire,geo,svt,physique){
    return (math+français+histoire+geo+svt+physique)/6
}
// fonction calcul et retour de la moyenne g
 let mg =moyeng(18,15.2,18.9,19,17,17.9)

console.log(mg) 

// créer un commentaire en fonction de la moyenne g  
// parametre : moyeng
// retour: afficher le commentaire selon la moyenne g

function commentaire(moyeng){
    if(moyeng>0 && moyeng==10){
        return "il faut travailler plus"
    }else if (moyeng>10 && moyeng<=13){
        return"poursuivez vos effort"
    }else if (moyeng>13 && moyeng<=15){
        return"bon travail"
    }else if (moyeng>15 && moyeng<=17){
        return "bravo!"
    }else{return"felicitation!"}
}

let commentair= commentaire(mg)

console.log(commentair)

//role afficher la moyenneg et le commentaire 
// parametre : moyeng et commentair
// return rien car elle affiche

function bulletin(commentaireEleve,moyenneGeneral){
   console.log(`la moyenne general de l'eleve est ${moyenneGeneral} et le commentaire est : ${commentaireEleve}`)
}

bulletin(commentair,mg)

// role : jouer le scenario -> calcul moyenne, commentaire, bulletin
// parametre : notes 
// return rien car elle affiche

function scenario(a,b,c,d,e,f,prenom){
    let moyg =moyeng(18,15.2,18.9,19,17,17.9)
    let comenteir=commentaire(moyeng)

    bulletin(moyg,comenteir,prenom)
} 

scenario(18,15.2,18.9,19,17,17.9,"marie")

