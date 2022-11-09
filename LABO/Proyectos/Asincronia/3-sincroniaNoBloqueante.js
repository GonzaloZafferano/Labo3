function sumar(a, b){

    let rdo;
    setTimeout(() => {
        rdo = a+b;
        console.log("La suma es " + rdo);

        cuadrado(rdo);
    }, 3000);
}

function restar(a, b){
    let rdo;
    setTimeout(() => {
        rdo = a-b;
        console.log("La resta es " + rdo);

        informar(rdo);
    }, 2000);
}
function multiplicar(a, b){    
    let rdo;
    setTimeout(() => {
        rdo = a*b;
        console.log("La multi es " + rdo);

        restar(rdo, 5);
    }, 1500);
}
function cuadrado(a){
    let rdo;
    setTimeout(() => {
        rdo = a*a;
        console.log("El cuadrado es " + rdo);

        multiplicar(rdo, 10);
    }, 1800);
}
function informar(valor){
    console.log("El resultado es " + valor);
}

console.log("Inicio");
/*
let suma = sumar(4,5);
let cuadr = cuadrado(suma);
let multi = multiplicar(cuadr, 10);
let resta = restar(multi, 5);
informar(resta);
*/
sumar(4,5);
console.log("Fin");
