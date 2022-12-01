//exo 1
document.getElementById("is-integer");
let nombre = 54.56;
if (Number.isInteger(54.56)){
    console.log("nombre entier");
} else {
    console.log("mon nombre n est pas un entier");
}

//exo 2
document.getElementById("is-nan");
let nombre = "UpTo, vive Javascript!";
if (isNaN(nombre)){
    console.log("le contenu de ma variable n est pas un nombre");
}
else {
    console.log("le contenu de ma variable est un nombre");
}

//exo 3
document.getElementById("parse-float");
let nombre = "52.563 % de la population blablabla";
let age = 37 ;
console.log(Number.parseFloat(nombre * age));

//exo 4
document.getElementById("parse-int");
let nombre = "65px";
console.log(parseInt(nombre));

//exo 5
document.getElementById("to-fixed");
let value = 41.9596;
value = value.toFixed(2);
console.log(typeof value + " ==> " + value);