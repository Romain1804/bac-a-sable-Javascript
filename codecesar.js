// exo 4 code quesar 


//encoder les lettre par la suivante 
// parametre mot a encoder 
// return le mot chiffré

function encodage(motAencoder){
let alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let motEncoder = ""
let lettreSuivante=""

// prend la lettre et ajoute 1
for(let i=0;i<motAencoder.length;i++){

// permet d'aller chercher les lettre de l'alphabet dans le tableau
    let lettre = motAencoder.charAt(i)
    console.log(lettre)

    if(posLettreActuelle==="z"){
        lettreencode="a"
    }else{

   let posLettreActuelle= alphabet.indexOf(lettre)
    console.log(posLettreActuelle)
//epele le mot et affiche sa position dans le tableau  et donne la lettre suivant 
 lettreSuivante = alphabet[posLettreActuelle +1]
console.log(lettreSuivante)
//assembler les lettre pour donner le mot encoder
motEncoder = motEncoder + lettreSuivante
}

}

console.log(motEncoder)

/* correction
 un alphabet
// quand il aura recuperer une lettre il va chercher la position de cette lettre dans l'alphabet -> stock dans une variable posLettreActuelle

// va chercher la lettre a la position suivante 

// stock dans une variable pour recomposer le mot encoder

//return le mot encoder

*/}

//role afficher le mot encoder
// parametre  mot a encoder 
// return rien car elle affiche

function affichedansbody(trucAafficher){
    document.querySelector("body").innerHTML+=`<p> ${trucAafficher}`
}
function scenario(motAencoder){
    let motEncoder=codecesar(motaencoder) 
    affichedansbody(motAencoder)
}

//exo 5 jackpot

//créer une machine a jackpot qui affiche 4 emojis
// si les emojis sont identiques : afficher `jackpot`
//sinon, afficher `perdus`
//indice: il faudra utiliser math floor et math.rando


// créer une fonction 
// role choisir trois emojis 
// parametre : tableau avec tous les emojis possible ( entre 3 et 5 )
//return : les 3 emojis selectionné

//creer le tableau d'emojis

// tirer 3 chiffre aleatoirement -> math.floor(mathrandom()*3)
// attribuer un emojis a chaque chiffre tiré -> si on tire 0 on va chercher l'emojis a la positions zero  dans le tableau 
//retourner les emojis piocher 


//role : comparer les emojis pour definir si victoire 
//parametre les emojis pioché -> un tableau 
//return : true/false - > boolean

//role afficher la resultat dans le body
//parametre : les emojis pioche et le resultat
//return : rien car elel affiche
