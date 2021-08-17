// Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado*4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();



// Código del triángulo
console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " 
+ ladoTriangulo2 + "cm, " 
+ baseTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El área del triángulo es: " + areaTriangulo + "cm2");
console.groupEnd();


// Código del círsulo
console.group("Círculo");
const radio = 4;
const diametro = radio*2;
const pi = Math.PI;

const circunferencia = diametro*pi;
const areaCirculo = (radio*radio)*pi;

console.log("El radio del círculo mide : " + radio + "cm");
console.log("El diámetro del círculo es: " + diametro + "cm");
console.log("La circunferencia es: " + circunferencia + "cm");
console.log("El área del círculo es: " + areaCirculo + "cm2");

console.groupEnd();

