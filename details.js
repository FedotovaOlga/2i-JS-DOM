function afficherAlert() {
    alert("bonjour")
}

function afficherConfirm() {
    const reponse = confirm("êtes-vous d'accord?")
    alert(reponse); // affiche alert "true" ou "false" en fonction de ce qu'on a clické => on peut faire 2 traitements différents
}

function afficherPrompt() {
    const reponse = prompt("êtes-vous d'accord?", "Allez, dites oui") // avec valeur par défaut
    alert(reponse); // récupère le contenu saisi
}

function exercice() {
    let i = 0;
    do {
    var reponse = Number(prompt("Saisissez un nombre positif")) // Number n'est pas obligatoire car JS peut comparer les chaines de caracteres, masi c'est une bonne pratique (pour des operations par ex)
    i++;
    }
        while (reponse <= 0 || isNaN(reponse)); // fait faire = car sinon "" est converti en 0
        alert(`Correct, vous avez fait ${i} tentative${i > 1 ? 's' : ''}`);
}

// function exercice() {
//     let reponse = Number(prompt("Saisissez un nombre positif"))
//     var i = 1;
//         while (reponse < 0)
//         {
//             reponse = Number(prompt("Faux, réessayez"));
//              i++;
//         }
//         alert(`Correct, vous avez fait ${i} tentative${i > 1 ? 's' : ''}`);
// }

