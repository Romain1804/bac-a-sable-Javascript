for (let i = 0; i < 20; i++) { console.log(i) }

// multiplication

//fonction qui affiche  la table de multiplication d'un nombre passe en parametre

// role afficher la table de multiplication d'un nombre donnes
// parametre nombre 
//return :

function multiplication(chiffremulti) {
    for (let i = 1; i <= 10; i++)
        console.log(chiffremulti * i)
}
//correction

function tabledemulti(chiffremulti) {
    for (let i = 1; i <= 10; i++)
        console.log(`${chiffremulti} * ${i} = ${chiffremulti * i}`)
}
// exo de remise en forme 
// role ecrire 50 fois  la phrase
// parametre 
//return non elle affiche

function lettre() {
    // creer une boucle qui tournera 50 fois
    for (let i = 1; i <= 50; i++) {
        // ecrit la phrase
        console.log(" i will not waste chalk")
    }
}
// exo 6 epeler le mot
// role epeler le mot lettre par lettre 
// parametre le mot 
//return rien elle affiche 

let mot = "plateau"

function epeler(mot) {
    console.log(`le mot ${mot} contient ${mot.length} lettres`)
    for (let i = 0; i < mot.length; i++) {
        console.log(mot.charAt(i))
    }
}

//boucle avec un tableau

let animaux = ["Lapin", "chat", "chien", "poule"]
console.log(animaux[animaux.length - 1])


// exo test tableau 

// créer un tableau "panierfruit" contenant 6 fruit 
// afficher dans la console le premier et dernier fruit
//" le premier fruit du tableau est... et le dernier est ..."

let panierfruit = ["pomme", "peche", "poire", "cerise", "orange", "ananas"]
console.log(`le premier fruit est ${panierfruit[0]} le dernier fruit du tableau est ${panierfruit[panierfruit.length - 1]}`)

for (let i = 0; i < panierfruit.length; i++) {
    console.log(panierfruit[i])
}

panierfruit.forEach(fruit => {
    console.log(fruit)
});

// les boucles exo 2

// role calculer la moyenne a partir du tableau de note
// parametre tableau note 
//return retourne la moyenne

let note = [12, 9, 15, 17, 10]

// recuperer les note une par une
// il l'aditionne dans une variable ( a l'origine une variable vide)
// on divise la somme obtenu par le nbr de valeur dans le tableau 
//c à d la longueur du tableau
//retourner le resultat

function moyenn(note) {
    let somme=0
    note.forEach(note => {
        somme = somme + note;
    })
    let moyenne = somme / note.length
    return moyenne
}

// role afficher le resultat retourner  par la fonction 1
// parametre du resultat
//return rien elle affiche 

function afficheresultat(moyenne){
    console.log(`la moyenne de l'eleve est de ${moyenne}`)
}
 let moyenne = moyenn(note)
 afficheresultat(moyenne)

 //exo 2 le panier de fruit

 // role calculer le nombre de fruit de chaque types 
// parametre tableau des fruit 
//return  le nb total de fruit par type 

//recupere les fruit dans le tableau
// compter les fruit de meme types 

let fruits = ["cerises", "pommes", "cerises", "pommes", "poires", "bananes", 
"pommes", "poires", "cerises"];

function calculfruit(fruits){
let cerise =0
let pommes=0
let poires=0
let bananes= 0

    fruits.forEach(fruit => {
        if(fruit==="pommes"){
            //ajoute 1 a mon compteur de pommes
            pommes++

        } else if(fruit==="cerises"){
            //ajoute 1 a mon compteur de cerises
            cerise++

        } else if(fruit==="poires"){
            //ajoute 1 a mon compteur de poires
            poires++

        }   else if(fruit==="bananes"){
            //ajoute 1 a mon compteur de bananes
            bananes++

        }
    } 
);

  console.log(`"dans le panier il y a ${cerise} cerises, ${pommes} pommes,${poires} poires et ${bananes} bananes`)
}

calculfruit(["cerises", "pommes", "cerises", "pommes", "poires", "bananes", "pommes", "poires", "cerises"])
//afficher le resultat du nb de fruit par types 

//correction

/*let fruits = ["cerises", "pommes", "cerises", "pommes", "poires", "bananes", 
"pommes", "poires", "cerises"];

function calculfruit(fruits){
let cerise =0
let pommes=0
let poires=0
let bananes= 0

    fruits.forEach(fruit => {
        if(fruit==="pommes"){
            //ajoute 1 a mon compteur de pommes
            pommes++

        } else if(fruit==="cerises"){
            //ajoute 1 a mon compteur de cerises
            cerise++

        } else if(fruit==="poires"){
            //ajoute 1 a mon compteur de poires
            poires++

        }   else if(fruit==="bananes"){
            //ajoute 1 a mon compteur de bananes
            bananes++

        }
    } 
);

  return`"dans le panier il y a ${cerise} cerises, ${pommes} pommes,${poires} poires et ${bananes} bananes`
}

function afficherdanslapage(aAfficher){
    document.querySelector("body").innerHTML +=`<p>${aAfficher}</p>`
}

let phraseaAfficher = calculfruit(fruits)
*/
