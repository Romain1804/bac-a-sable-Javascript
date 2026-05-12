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