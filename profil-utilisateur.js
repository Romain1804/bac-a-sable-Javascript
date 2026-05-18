// role :  questionner l’API
// parametre: 
// retour : 

	 fetch("user.json")
	.then(rep=> {
			return rep.json()
	})
	.then(data=>{
			// a ce niveau on devrait avoir dans la console les infos renvoyé par l’API

			console.log(data)
            afficheUtilisateur(data.users)
	});

    //role : recuperer les utilisateur 1 par 1 et de les afficher dans le dom 
    // parametre tableau d'utilisateur
    //return rien elle affiche

    function afficheUtilisateur(tableauUtilisateur){
        tableauUtilisateur.forEach(utilisateur => {
            let utilisateurcard = `
            <div class="card large-30">

    <div class="flex spacebetween">
        <img src="users-images/${utilisateur.image}" alt=""class="large-30 radius15">

        <div class="large-60">
            <h3>${utilisateur.nom}</h3>
            <h3>${utilisateur.prenom}</h3>
            <p>${utilisateur.age}</p>
            <p>${utilisateur.poste}</p>

        </div>
        <p class="mt-20"><i class="ph ph-envelope"></i>${utilisateur.email}</p>
    </div>
</div>`

document.querySelector("#usercontainer").innerHTML+= utilisateurcard
            
        });
    }

