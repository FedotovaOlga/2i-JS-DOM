// function direBonjour()
// {

//     const radios = document.querySelectorAll("input[type=radio]")

//     for (const radio of radios)
//     {
//         if (radio.checked)
//         {
//             const nom = document.querySelector('#nom');
//             alert(`Bonjour ${radio.id} ${nom.value ? nom.value : 'Doe'}`);
//         }
//     }
//     const bouton = document.getElementById('bonjour');
//     bouton.disabled = true;
// } // avec boucle for et if car All => tableau

function direBonjour() {
  const radio = document.querySelector("input[type=radio]:checked");

  const nom = document.querySelector("#nom");
  alert(`Bonjour ${radio.id} ${nom.value ? nom.value : "Doe"}`);
  const bouton = document.getElementById("bonjour");
  bouton.disabled = true;
}

// function ajoutSport() {
//     const sports = document.getElementById("sports")
//     const sportsPreferes = document.getElementById("sportsPreferes");
//     //console.log(sports.options);
//     for (const option of sports.options) {
//         if(option.selected)
//         {
//             sportsPreferes.add(option) // add ou append
//         }
//     } // peut ajouter plusieurs sports à la fois
// }
    function ajoutSport() {
        const sports = document.querySelector("#sports option:checked")
        const sportsPreferes = document.getElementById("sportsPreferes");
        console.log(sports);
        sportsPreferes.append(sports);// add ou append
    } // ajoute un par un (le premier selectionné)

    // add : ajouter n'importe où
    // append : ajoute tjrs à la fin
    // insert : je choisis la position
