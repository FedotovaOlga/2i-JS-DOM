function direBonjour() {
    console.log("Bonjour");
}

// setTimeout(
//     direBonjour,
//     3000
// ) // callback : fonction passé en parametre à une autre fonction

setTimeout(
    () => console.log("Bonjour"),
        3000
    ) // soir avec cette fonction anonyme (plus court), soit avec fonction callback plus haut

    setInterval(
        direBonjour,
        2000); // s'execute en boucle, alors que setTimeout juste 1 fois
