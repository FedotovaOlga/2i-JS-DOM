// Récupération des éléments

// 1- récupération selon l'id
// var intro = window.document.getElementById("intro");
// //console.log(intro); // juste la div
// console.log(intro.innerHTML); // juste le contenu de la div
var intro = document.getElementById("intro");

// 2- récupération selon le nom de la classe
var rouges = document.getElementsByClassName("rouge")
console.log(rouges);
// console.log(rouges.innerHTML); // ça marche pas car byClassName retourne un tableau, tableau c'est pas une balise
for (const rouge of rouges) {
    console.log(rouge.innerHTML);
} // ça marche car chaque balise a une propriété innerHTML

// 3- récupération selon le nom de la balise
var paragraphes = document.getElementsByTagName('p')
for (const p of paragraphes) {
    console.log(p.innerHTML);
}

// 4- récup de tous les éléments de certain selector CSS
var paragraphesRouges = document.querySelectorAll("p.rouge")
for (const pRouge of paragraphesRouges) {
    console.log(pRouge.innerHTML);
}

// 5- récup d'un seul élément avec le selector css
var premierParagrapheRouge = document.querySelector("p.rouge");
console.log(premierParagrapheRouge.innerHTML);

// Récupération, modification et suppréssion d'un attribut

console.log("manip d'un attribut (récup, modif, supprim)");

function recupererAttribut() {
    var lien = document.querySelector('a');
    // var href = lien.getAttribute("href")
    // console.log(href);
    console.log(lien.href); // raccourci, marche pas avec tous les elements
    
}

function modifierAttribut() {
    var lien = document.querySelector('a');
    // var href = lien.setAttribute("href", "http://www.m2iformation.fr")
    lien.href = "http://www.m2iformation.fr"; // raccourci, marche pas avec tous les elements
        // console.log(href);
}

function supprimerAttribut() {
    var lien = document.querySelector('a');
    var href = lien.removeAttribute("target")
    console.log(href);
}


// raccourci d'attribut ne fonctionnera pas pour ceux-là :
// for
// class
// parce qu'ils sont déjà les mots-clés en JS
// du coup :
// for => htmlFor
// class => className, classList

// Actions sur les class

function afficherClassName(){
    const premierParagraphe = document.querySelector('p');
    console.log(premierParagraphe.className);
    console.log(typeof premierParagraphe.className); // string
}

function afficherClassList(){
    const premierParagraphe = document.querySelector('p');
    console.log(premierParagraphe.classList);
    console.log(typeof premierParagraphe.classList); // object iterable => tableau
}

function supprimerClasse(){
    const premierParagraphe = document.querySelector('p');
    const classes = premierParagraphe.classList;
    if (classes.contains("rouge")) {
        classes.remove("rouge");
    }
}

function ajouterClasse(){
    const premierParagraphe = document.querySelector('p');
    const classes = premierParagraphe.classList;
        classes.add("bleu");
}

function remplacerClasse(){
    const premierParagraphe = document.querySelector('p');
    const classes = premierParagraphe.classList;
        classes.replace("rouge", "bleu");
}

function basculerClasse(){
    const premierParagraphe = document.querySelector('p');
    const classes = premierParagraphe.classList;
        classes.toggle("rouge"); // si la class existe, supprime là, sinon rajoute là
}

function changerCouleur(){
    // récup tous p
    // rouge => bleu
    // bleu => rouge

   var paragraphes = document.querySelectorAll('p');
   for (const p of paragraphes) {
    const classes = p.classList
    if (classes.contains("rouge")) {
        classes.replace("rouge", "bleu")
    }
    else if(classes.contains("bleu")){
        classes.replace("bleu", "rouge")
    }
   }
} // on peut faire la meme chose avec getElementsByTagName



function modifierStyle() {
    const premierParagraphe = document.querySelector('p');
    premierParagraphe.style.backgroundColor = 'pink'
    premierParagraphe.style.textDecoration = 'underline'

}



