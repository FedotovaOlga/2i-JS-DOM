function ajouterTexte() {
  let texte = document.getElementById("texte");
  let textes = document.getElementById("textes");
  //textes.innerHTML += `<p>${texte.value}</p>`; =>
  /* !!! SoC = Separaition of Concerns !!! séparation de languages (pas de HTML dans le code JS) */
  var paragraphe = document.createElement("p");
  paragraphe.innerHTML = texte.value;
  let inputs = document.querySelectorAll("input:checked");
  for (const input of inputs) {
    paragraphe.style[input.name] = input.id;
    input.checked = null;
  }
  var button = document.createElement("button");
  button.innerHTML = "supprimer"
  // button.addEventListener("click", () => {
  //   paragraphe.remove();
  // }) // fonctionne aussi
  button.onclick = () => {
    paragraphe.remove();
  }
  // button.onclick = () => removeParagraphe(paragraphe); // fonctionne avec la function à l'extérieur;
  paragraphe.appendChild(button);
  textes.appendChild(paragraphe);
  texte.value = null; // ou "", ou undefined, ou null...
}


//  function removeParagraphe(paragraphe) {
//   paragraphe.remove();
// }