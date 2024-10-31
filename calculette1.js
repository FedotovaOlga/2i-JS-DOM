const buttons = document.querySelectorAll("button");
const signs = document.querySelectorAll("button.sign");
var calcul = document.getElementById("calcul");
var equalButton = document.querySelector("button.equal")
for (const button of buttons) {
  button.addEventListener ("click", () => {
    if (button.classList.contains("sign")) {
      calcul.textContent += button.textContent;
    }
  });
};
equalButton.addEventListener("click", () => {
    // console.log(calcul.textContent);
    if (calcul.textContent.includes("+")) {
      var indexOp = calcul.textContent.indexOf("+", 1);
      var valeur1 = Number(calcul.textContent.substring(0, indexOp));
      var valeur2 = Number(calcul.textContent.substring(indexOp+1));
      var result = valeur1 + valeur2
      console.log(result);
    }
})


// faire une grosse boucle pour les signes, et a l'intérieur faire une boucle pour numeros, et pour les operateurs.

// const nums = document.querySelectorAll("button.num");
// for (const num of nums) {
//   console.log(num.textContent);
// };




// signs.forEach((sign) => {
//   for (var sign of signs) {
//     signText = sign.textContent;
//     sign.addEventListener("click", () => {
//       calcul += signText;
//       console.log(calcul.textContent);
      
//     });
//   }
  

 
// });








// var v1 = document.getElementById('valeur1');
// var v2 = document.getElementById('valeur2');
// var result = document.getElementById('resultat');
// btn.onclick = () => {
//     result.innerHTML = 'Résultat : '
//     result.innerHTML += Number(v1.value) + Number(v2.value);
// }
// vaut mieux utiliser addEventListener (plis bas), c'est plus clair
// les déclarations : avant la fonction si après on les réutilise ailleur. Sinon, dedans.
// const [valeur1, valeur2] = document.querySelectorAll("input");
// const resultat = document.querySelector("#resultat");
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

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     if (isNaN(valeur1.value) || isNaN(valeur2.value)) {
//       resultat.innerHTML = "Valers pas acceptées!";
//     } else {
//       resultat.innerHTML = "Résultat : ";
//       if (button.innerHTML.includes("plus")) {
//         resultat.innerHTML += Number(valeur1.value) + Number(valeur2.value);
//       } else if (button.innerHTML.includes("minus")) {
//         resultat.innerHTML += Number(valeur1.value) - Number(valeur2.value);
//       } else if (button.innerHTML.includes("xmark")) {
//         resultat.innerHTML += Number(valeur1.value) * Number(valeur2.value);
//       } else if (button.innerHTML.includes("divide")) {
//         resultat.innerHTML += Number(valeur1.value) / Number(valeur2.value);
//       }
//     }
//   });
// });
