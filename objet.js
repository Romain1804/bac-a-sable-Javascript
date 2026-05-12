let promo11 = [

    {
        prenom: "alexis",
        age: 19,
        ville: "St Etienne",
        job: "gagner de l'argent"
    },
    {
        prenom: "Romain",
        age: 27,
        ville: "St Etienne",
        job: "data scientist"
    },
    {
        prenom: "Ludivine",
        age: 29,
        ville: "St Etienne",
        job: "formatrice"
    },
    {
        prenom: "Nico",
        age: 42,
        ville: "St Etienne",
        job: "eleveur de poulet"
    },
]

//role ecrire un par un le nom des eleve 
//ecrire prenom age et ville en console
//return rien elle affiche
function ficheElevedansdom(tableaupromo11) {
    promo11.forEach(eleve => {
        console.log(eleve.prenom)

        ajouteraubody(`
        
        <div class="bcblue txtwhite mb50 w30 txtcenter">
            <h2>${eleve.age}</h2>
            <p>${eleve.prenom}</p>
            <p>${eleve.ville}</p>
            <p>${eleve.job}</p>
                                     `)
    });
}

function ajouteraubody(trucAafficher) {
    document.querySelector("body").innerHTML += trucAafficher

}

ficheElevedansdom(promo11)



//exo livre de recette

let recette = {
    nom: "poulet rôti au thym et à l'ail",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "1h 15 min",
    nbrPortions: 6,
    ingredients: ["huile d'olive", "beurre fondu", "feuilles de thym", "sel", "poivre", "ail"]
}

console.log(`
    la recette est ${recette.nom},
   difficulte ${recette.difficulte},
    temps de tempPreparation${recette.tempPreparation},
    temps de cuisson${recette.tempCuisson},
    pour ${recette.nbrPortions},
    la liste des ingredient est ${recette.ingredients}`)

//livre de recette v2

let recettes = [
    {
        nom: "poulet rôti au thym et à l'ail",
        difficulte: "Facile",
        tempPreparation: "15 min",
        tempCuisson: "1h 15 min",
        nbrPortions: 6,
        ingredients: ["huile d'olive", "beurre fondu", "feuilles de thym", "sel", "poivre", "ail"]
    },
    {
        nom: "spaghetti à la bolognaise",
        difficulte: "Moyenne",
        tempPreparation: "20 min",
        tempCuisson: "40 min",
        nbrPortions: 4,
        ingredients: ["spaghetti", "viande hachée", "oignon", "carotte", "tomate concassée", "ail", "huile d'olive", "sel", "poivre"]
    },
    {
        nom: "salade César",
        difficulte: "Facile",
        tempPreparation: "15 min",
        tempCuisson: "0 min",
        nbrPortions: 2,
        ingredients: ["laitue romaine", "croûtons", "parmesan râpé", "filet de poulet", "sauce César", "sel", "poivre"]
    }
];
//recuperer les recettes une par une 
recettes.forEach(plat => {
    console.log(`le plat est ${plat.nom},
                la difficulte est ${plat.difficulte}
             temps de Preparation ${plat.tempPreparation}
             temps de cuisson${plat.tempCuisson}
             le nbr de portion ${plat.nbrPortions}
             la liste des ingredient${plat.ingredients}`)
});

/*
correction 
role recuperer les recettes une par une pour les afficher  
parametre tableau des recette 
return rien*/
function ficherecette(recettes) {
    //recuperer les recette une par une 
    recettes.forEach(plat => {
        let listeingredient = ""

        recettes.forEach(plat => {
            listeingredient += `<li>${plat.ingredient}</li>
            console.log(listeingredient)`
        
    });

    ajouteraubody(` <div class="bcblue txtwhite mb50 w30 txtcenter"> 
        <h2>le plat est ${plat.nom}</h2>
            <p>la difficulte est ${plat.difficulte}</p>
            <p>temps de Preparation ${plat.tempPreparation}</p>
             <p>temps de cuisson${plat.tempCuisson}</p>
              <p> le nbr de portion ${plat.nbrPortions}</p>
               <p>la liste des ingredient${plat.ingredients}</p>
               
               
               
               </div> `)
});
}


function ajouteraubody(trucAafficher){
    document.querySelector("body").innerHTML+= trucAafficher}