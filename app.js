
let paragraphe = document.querySelectorAll("p");
let random;

function randomgenerate(math) {
    random = Math.trunc(Math.random() * 100);
    return random
}

for( let i = 0; i < paragraphe.length; i++){
    randomgenerate()
    paragraphe[i] = paragraphe[i].innerText;
    paragraphe[i].innerText = random;
}

console.log(random);