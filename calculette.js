const buttons = document.querySelectorAll("button");
// var v1 = document.getElementById('valeur1');
// var v2 = document.getElementById('valeur2');
// var result = document.getElementById('resultat');
// btn.onclick = () => {
//     result.innerHTML = 'Résultat : '
//     result.innerHTML += Number(v1.value) + Number(v2.value);
// }
// vaut mieux utiliser addEventListener (plis bas), c'est plus clair
// les déclarations : avant la fonction si après on les réutilise ailleur. Sinon, dedans.
const [valeur1, valeur2] = document.querySelectorAll("input");
const resultat = document.querySelector("#resultat");
// buttons.forEach((button, indice) => {
//   button.addEventListener("click", () => {
//     resultat.innerHTML = "Résultat : ";
//     // console.log(indice);
//     if (indice == 0) {
//       resultat.innerHTML += Number(valeur1.value) + Number(valeur2.value);
//     } else if (indice == 1) {
//       resultat.innerHTML += Number(valeur1.value) - Number(valeur2.value);
//     } else if (indice == 2) {
//       resultat.innerHTML += Number(valeur1.value) * Number(valeur2.value);
//     } else if (indice == 3) {
//       resultat.innerHTML += Number(valeur1.value) / Number(valeur2.value);
//     }
//   });
// }); // ça marche aussi mais pas si on change les btns de place ! donc cf suite
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (isNaN(valeur1.value) || isNaN(valeur2.value)) {
      resultat.innerHTML = "Valers pas acceptées!";
    } else {
      resultat.innerHTML = "Résultat : ";
      if (button.innerHTML.includes("plus")) {
        resultat.innerHTML += Number(valeur1.value) + Number(valeur2.value);
      } else if (button.innerHTML.includes("minus")) {
        resultat.innerHTML += Number(valeur1.value) - Number(valeur2.value);
      } else if (button.innerHTML.includes("xmark")) {
        resultat.innerHTML += Number(valeur1.value) * Number(valeur2.value);
      } else if (button.innerHTML.includes("divide")) {
        resultat.innerHTML += Number(valeur1.value) / Number(valeur2.value);
      }
    }
  });
});
