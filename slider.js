var images = ["./images/bowser.png", "./images/luigi.png", "./images/mario.png"]

function changeImage()
{
    const img = document.querySelector('img');
    // console.log(img.src); // marche pas
    const src = img.getAttribute("src");
    console.log(src);
    let position = images.indexOf(src);
    let next = (position + 1) % images.length;
    // /* 
    // pq modulo? =>
    // position next images.length 4
    // 0        1
    // 1        2
    // 2        3
    // 3        0
    // */
    img.setAttribute("src", images[next])
    //var src = img.setAttribute("src", "./images/luigi.png")
    // img.src = "./images/luigi.png" // raccourci du precedent

    // img.src = img.src.replace("bowser", "luigi"); // retourne un nouveau tableau (une nouvelle chaine)
}

let interval;
function demarrerAnimation()
{
    interval = setInterval(
        changeImage,
        1000
    )
}

function arreterAnimation()
{
    clearInterval(interval)
}

