// Código del cuadrado
//Console.group("nombre");
//Console.groupEnd();



let ladoCuadrado;

function perimetroCuadrado(lado){
  let perimetro = lado*4;
  //console.log("Los lados del cuadrado miden: " + lado + "cm");
  //console.log("El perímetro del cuadrado es: " + perimetro + "cm");
  return perimetro;
}

function areaCuadrado(ladoCuadrado){
let area = ladoCuadrado*ladoCuadrado;
//console.log("El área del cuadrado es: " + area + "cm2");
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
return area;
}



// Código del triángulo
let ladoTriangulo1;
let ladoTriangulo2;
let baseTriangulo;
let alturaTriangulo;



function perimetroTriangulo(ladoT,ladoT2,base){

let perimetroT = ladoT+ladoT2+base;

/*console.log("Los lados del triángulo miden: " + ladoT + "cm, " 
+ ladoT2 + "cm, " 
+ base + "cm");

console.log("El perímetro del triángulo es: " + perimetroT + "cm");*/
return perimetroT;
}

function areaTriangulo(base, altura){
let areaT = (base*altura)/2;
//console.log("La altura del triángulo mide: " + altura + "cm, y la base mide: " + base + "cm");
//console.log("El área del triángulo es: " + areaT + "cm2");
return areaT;
}

function calcularAlturaIso(base,lado){

  a = lado*lado;
  console.log(a);
  b = (Math.pow(base,2))/4;
  console.log(b);
  h = Math.sqrt((lado*lado) -(Math.pow(base,2))/4);

  return h;

}

// Código del círculo
let radio;
const pi = Math.PI;

function diametro(radio){
    return radio*2;
}

function circunferencia(radio){
let circunf = (radio*2)*pi;
/*console.log("El radio del círculo mide : " + radio + "cm");
console.log("El diámetro del círculo es: " + diametro(radio) + "cm");
console.log("La circunferencia es: " + circunf+ "cm");*/
return circunf;
}


function areaCirculo(radio){
 let areaC = (radio*radio)*pi;
 /*console.log("El radio del círculo mide : " + radio + "cm");
 console.log("El área del círculo es: " + areaC + "cm2");*/
 return areaC;
} 


let botonPerimetroCuadrado = "#perimCua";
let botonAreaCuadrado = "#areaCua";
let botonPerimetroT = "#perimT";
let botonAreaT = "#areaT";
let botonCircunferencia = "#circun";
let botonAreaCirculo = "#areaCir";
let botonAlturaIso = "#alturaIso"
let divCuadrado =  document.getElementById("respuestaCuadrado");
let divTriangulo = document.getElementById("respuestaTriangulo");
let divCirculo = document.getElementById("respuestaCirculo");
let divIsosceles = document.getElementById("respuestaIsosceles");


document.addEventListener("click", (e) => {
  if(e.target.matches(botonPerimetroCuadrado)){
    ladoCuadrado = document.getElementById("ladoC");
      if(ladoCuadrado.value == 0){
       divCuadrado.innerHTML = "Introduce un valor en el formulario!";
      } else {divCuadrado.innerHTML = `<p> El perímetro del cuadrado es: ${perimetroCuadrado(ladoCuadrado.value)}</p>`;}
  }

  if(e.target.matches(botonAreaCuadrado)){
    ladoCuadrado = document.getElementById("ladoC");
      if(ladoCuadrado.value == 0){
       divCuadrado.innerHTML = "Introduce un valor en el formulario!";
      } else {divCuadrado.innerHTML = `<p> El área del cuadrado es: ${areaCuadrado(ladoCuadrado.value)}</p>`;}

  }

  if(e.target.matches(botonPerimetroT)){
    ladoTriangulo1 = document.getElementById("ladoUno");
    ladoTriangulo2 = document.getElementById("ladoDos");
    base = document.getElementById("baseTriangulo");
    ladoT = parseInt(ladoTriangulo1.value);
    ladoT2 = parseInt(ladoTriangulo2.value);
    bas = parseInt(base.value);

      if(ladoT === 0 || ladoT2 === 0 || bas === 0 ){
       divTriangulo.innerHTML = "Introduce un valor en el formulario!";
      } else {divTriangulo.innerHTML = `<p> El perímetro del triángulo es: ${perimetroTriangulo(ladoT,ladoT2,bas)}</p>`;}

      if(ladoT == ladoT2){
        divTriangulo.innerHTML += `<p> El triángulo es isósceles </p>`;
      }
  }

  if(e.target.matches(botonAreaT)){
    alturaTriangulo = document.getElementById("alturaTriangulo");
    base = document.getElementById("baseTriangulo");
    

      if(base.value == 0 ){
       divTriangulo.innerHTML = "Introduce un valor en el formulario!";
      } else {divTriangulo.innerHTML = `<p> El área del triángulo es: ${areaTriangulo(base.value, alturaTriangulo.value)}</p>`;}
  }

  if(e.target.matches(botonCircunferencia)){
    radio = document.getElementById("circulo");

      if(radio.value == 0 ){
       divCirculo.innerHTML = "Introduce un valor en el formulario!";
      } else {divCirculo.innerHTML = `<p> La circunferencia es: ${circunferencia(radio.value)}</p>`;}
  }

  if(e.target.matches(botonCircunferencia)){
    radio = document.getElementById("circulo");

      if(radio.value == 0 ){
       divCirculo.innerHTML = "Introduce un valor en el formulario!";
      } else {divCirculo.innerHTML = `<p> El área del círculo es: ${areaCirculo(radio.value)}</p>`;}
  }

  if(e.target.matches(botonAlturaIso)){

    lado = document.getElementById("ladoIsosceles")
    let baseIso = document.getElementById("baseIsosceles");

      if(lado.value == 0 || baseIso.value == 0 ){
       divIsosceles.innerHTML = "Introduce un valor en el formulario!";
      } else {divIsosceles.innerHTML = `<p> La altura del triángulo es: ${calcularAlturaIso(parseInt(baseIso.value), parseInt(lado.value))}</p>`;}
  }

});
