// const button = document.querySelector("button");
// button.addEventListener("click", function() {
//     const nom = document.getElementById("nom");
//     alert(`Bonjour ${nom.value}`);
// }) // fonction anonyme (mono-utilisation)

// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//     const nom = document.getElementById("nom");
//     alert(`Bonjour ${nom.value}`);
// }) // fonction flechée, plus rapide à écrire, comme anonyme mais elle n'a pas d'acces à la valeur "this" dans un objet

const button = document.querySelector("button");
button.addEventListener("click", direBonjour);  // ne pas mettres les () apres direBonjour, sinon ça s('execute tout de suite!)

function direBonjour() {
    const nom = document.getElementById("nom");
    alert(`Bonjour ${nom.value}`);
} // fonction nommée, se réutilise plusieures fois dans le code

const button2 = document.querySelector("button:last-of-type");
button2.addEventListener("click", () => {
    button.removeEventListener("click", direBonjour);
}) // supprime l'event précédent

function afficherPrenom(event) {
    //console.log(event);
    console.log(`dernier caractere saisie : ${event.data}`);
    console.log(`valeur actuelle : ${event.target.value}`); // target ou srcElement
}

function verifierTexte(event) {
    //console.log(event);
    const char = event.key;
    if (char < 'a' || char > 'z') {
        event.preventDefault();
        alert("Merci de saisir le texte en minuscule");
    }
    
}

function parent() {
    alert("parent")
}

function enfant(event) {
    alert("enfant");
    event.stopPropagation(); // pour annuler l'event du parent
    
}