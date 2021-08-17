// Código del cuadrado
console.group("Cuadrado");
let ladoCuadrado;

function perimetroCuadrado(lado){
  let perimetro = lado*4;
  console.log("Los lados del cuadrado miden: " + lado + "cm");
  console.log("El perímetro del cuadrado es: " + perimetro + "cm");
  return perimetro;
}

function areaCuadrado(ladoCuadrado){
let area = ladoCuadrado*ladoCuadrado;
console.log("El área del cuadrado es: " + area + "cm2");
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
return area;
}
console.groupEnd();



// Código del triángulo
console.group("Triángulo");
let ladoTriangulo1;
let ladoTriangulo2;
let baseTriangulo;
let alturaTriangulo;



function perimetroTriangulo(ladoT,ladoT2,base){

let perimetroT = ladoT+ladoT2+base;

console.log("Los lados del triángulo miden: " + ladoT + "cm, " 
+ ladoT2 + "cm, " 
+ base + "cm");

console.log("El perímetro del triángulo es: " + perimetroT + "cm");
return perimetroT;
}

function areaTriangulo(base, altura){
let areaT = (base*altura)/2;
console.log("La altura del triángulo mide: " + altura + "cm, y la base mide: " + base + "cm");
console.log("El área del triángulo es: " + areaT + "cm2");
return areaT
}
console.groupEnd();


// Código del círsulo
console.group("Círculo");
let radio = 4;
const pi = Math.PI;

function diametro(radio){
    return radio*2;
}

function circunferencia(radio){
let circunf = diametro(radio)*pi;
console.log("El radio del círculo mide : " + radio + "cm");
console.log("El diámetro del círculo es: " + diametro(radio) + "cm");
console.log("La circunferencia es: " + circunf+ "cm");
return circunf;
}


function areaCirculo(radio){
 let areaC = (radio*radio)*pi;
 console.log("El radio del círculo mide : " + radio + "cm");
 console.log("El área del círculo es: " + areaC + "cm2");
 return areaC;
} 



console.groupEnd();

