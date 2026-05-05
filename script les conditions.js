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
    if (color === "rouge") {
        console.log("je m'arrête")
    } else if (color === "orange") {
        console.log("je freine")
    } else if (color === "vert") {
        console.log("je passe!")
    } else {
        console.log("danger! feu defectueux")
    }

}


