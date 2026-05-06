for(let i=0; i<20;i++){console.log(i)}

// multiplication

//fonction qui affiche  la table de multiplication d'un nombre passe en parametre

// role afficher la table de multiplication d'un nombre donnes
// parametre nombre 
//return :

function multiplication ( chiffremulti){
    for(let i=1;i<=10;i++)
    console.log(chiffremulti*i)
}
//correction

function tabledemulti(chiffremulti){
    for( let i=1; i<=10;i++)
        console.log(`${chiffremulti} * ${i} = ${chiffremulti*i}`)
}