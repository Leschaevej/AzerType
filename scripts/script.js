function afficherResultat(score, nbMotsProposes) {
    console.log("Votre score est de " + score + " sur " + nbMotsProposes)
}

function choisirPhrasesOuMots() {
    let choix = prompt('Voulez-vous jouer avec les mots ou les phrases ?')
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Veillez chosir la liste : mots ou phrases")
    }
    return choix
}

function LancerBoucleDeJeu(listeProposition) {
    let score = 0
    for (let i = 0; i < listeProposition.length; i++) {
        let motUtilisateur = prompt("Entrez le mot : " + listeProposition[i])
        if (motUtilisateur === listeProposition [i]) {
            score++
            console.log("Bravo !")
        } else {
            console.log ("Vous avez fait une erreur de frappe.")
        }
    }
    return score
}

function lancerJeux() {
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nbMotsProposes = 0

    if (choix === 'mots') {
        score = LancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length        
    } else {
        score = LancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }

    afficherResultat(score, nbMotsProposes)
}