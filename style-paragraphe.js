const paragraphe = document.querySelector("p");

function mettreEnGras() {
    if (paragraphe.style.fontWeight != "bold") {
        paragraphe.style.fontWeight = "bold"
    } else {
        paragraphe.style.fontWeight = "normal";
    }
  }
  function mettreEnItalic() {
    if (paragraphe.style.fontStyle != "italic") {
        paragraphe.style.fontStyle = "italic";
    } else {
        paragraphe.style.fontStyle = "normal";
    }

  }
  function souligner() {
      if (paragraphe.style.textDecoration != "underline") {
        paragraphe.style.textDecoration = "underline";
    } else {
        paragraphe.style.textDecoration = "none";
    }
  }
  function supprimerStyle() {
    paragraphe.removeAttribute("style")
  }


// function supprimerStyle() {
//   paragraphe.style.textDecoration = "none";
//   paragraphe.style.fontStyle = "normal";
//   paragraphe.style.fontWeight = "normal";
  // paragraphe.style.all = "unset"; // on peut pas re-appliquer les styles après
// }
