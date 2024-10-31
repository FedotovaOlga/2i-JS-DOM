const draggable = document.querySelector("#draggable");
const dropper = document.querySelector("#dropper");

dropper.addEventListener("dragover", (event) => {
    event.preventDefault();
})

// dropper.addEventListener("dragenter", (event) => {
//     dropper.style.backgroundColor = "teal";
// })

draggable.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", draggable.innerHTML);
})

dropper.addEventListener("drop", (event) => {
    const content = event.dataTransfer.getData("text/plain");
    dropper.innerHTML = `${content} ${dropper.innerHTML}`;
})

// text/plain est un type de média (pour que le navigateur comprenne ce qu'on transfère), ici la liste exhaustive : https://www.iana.org/assignments/media-types/media-types.xhtml