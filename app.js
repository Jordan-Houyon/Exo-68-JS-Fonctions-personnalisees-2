// je reécupère les valeurs stockées dans mes paragraphes//
let paragraphe = document.getElementsByTagName("p");
let random;

// fonction qui va générér un aléatoire entre 1 et 100 //
function randomgenerate(math) {

    //génération d'un aléatoire entre 1 et 100 , sans arrondi et sans partie décimale//
    random = Math.trunc(Math.random() * 100);

    // je renvoie la valeur stockée dans random ici un aléatoire donc //

    return random
}

// grâce à une boucle, on recupère  un nombre aléatoire dans le innerHTML de chaque élément récupéré

for( let i = 0; i < paragraphe.length; i++){
    randomgenerate()
    paragraphe[i] = paragraphe[i].innerText;
    paragraphe[i].innerText = random;
}

console.log(random);