let promo11 = [

    {
        prenom : "alexis",
        age : 19,
        ville : "St Etienne",
        job : "gagner de l'argent"
    },
    {
        prenom : "Romain",
        age : 27,
        ville : "St Etienne", 
        job : "data scientist"
    },
    {
        prenom : "Ludivine",
        age : 29,
        ville : "St Etienne", 
        job : "formatrice"
    },
    {
        prenom : "Nico",
        age : 42,
        ville : "St Etienne", 
        job : "eleveur de poulet"
    },
]

//role ecrire un par un le nom des eleve 
//ecrire prenom age et ville en console
//return rien elle affiche
function ficheElevedansdom(tableaupromo11){
  promo11.forEach(eleve => {console.log(eleve.prenom)
    
    ajouteraubody(`
        
        <div class="bcblue txtwhite mb50 w30 txtcenter">
            <h2>${eleve.age}</h2>
            <p>${eleve.prenom}</p>
            <p>${eleve.ville}</p>
            <p>${eleve.job}</p>
                                     `)});
}

function ajouteraubody(trucAafficher){
    document.querySelector("body").innerHTML+= trucAafficher

}

ficheElevedansdom(promo11)
