/* 
// trois maniere de selectionner des élements dans mon document c'est a dire dans mon html 

//le body
document.querySelector("body")

//le premier element ayant la classe "ma classe"
document.querySelector(".maclasse")

//l'element ayant l'id "boite"
document.querySelector("#boite")

// tous les element ayant la classe "en solde"
document.querySelector(".ensolde")


//selectionner le body et ajouter une div
document.querySelector("body").innerHTML +=
`<div>
<p> lorem ipsum dolor lorys </p></div> `

let paragrapheamettreEnrouge=document.querySelector("p")
paragrapheamettreEnrouge.classList.add("cred")

//paragrapheamettreEnrouge.classList.remove("bgyellow")

paragrapheamettreEnrouge.classList.toggle("bgyellow")

 let bouton =document.querySelector("button")
 bouton.addEventListener("click",ajouteunparagraphe)

function ajouteunparagraphe(){
    document.querySelector("#grosseboite").innerHTML+="<p> lorem ipsum dolor lorys </p>"
}

//exo 1 h1 style

//document.querySelector('#titre').style.color="red"

//exo 2 interrupteur 

//role permettre d'afficher puis de cacher en cliquant dessus ( un element dont l'id est en parametre)
//parametre l'id donné
//return rien elle affiche

let masquer = document.querySelector("#ptiteboite")
masquer.classList.toggle("display")

//exo 3 

//role remplir le cube de couleur 
//parametre rien
//return rien 

//colorier la boite en jaune 
function couleur(){
  
}


//faire pareil pour les deux autre boites 


// mettre la display pour que il y ait que un cube sur 3 qui soit colorier 

// mettre la fonction cliqué */

let boites =document.querySelectorAll(".card")

console.log(boites)

//je parcours mon tableaux de div
boites.forEach(boite => {
    boite.addEventListener("click", function(){
        reset()
        // j'ai la obite sur laquelle j'ai cliqué
        console.log(boite)
        boite.classList.toggle("bgyellow")
    })
});

//role reset la classe bgyellow a toute les div qui ont la classe card 
//parametre rien
//return rien

function reset(){
    document.querySelectorAll(".boite")
    boites.forEach(boite => {
        boite.classList.remove("bgyellow")
        
    });
}

//exo 4

let nombreDeClics=0

function comptage(){
    nombreDeClics++
}

comptage()

document.getElementById("#boutonClic").addEventListener("click", comptage);


