function sumar(a, b){

    let rdo;
    setTimeout(() => {
        rdo = a+b;
        console.log("La suma es " + rdo);
        
    }, 3000);

    return rdo;
}

function restar(a, b){
    let rdo;
    setTimeout(() => {
        rdo = a-b;
        console.log("La resta es " + rdo);
    }, 2000);

    return rdo;
}
function multiplicar(a, b){    
    let rdo;
    setTimeout(() => {
        rdo = a*b;
        console.log("La multi es " + rdo);
        
    }, 1500);

    return rdo;
}
function cuadrado(a){
    let rdo;
    setTimeout(() => {
        rdo = a*a;
        console.log("El cuadrado es " + rdo);
    }, 1800);

    return rdo;
}
function informar(valor){
    console.log("El resultado es " + valor);
}

console.log("Inicio");
let suma = sumar(4,5);
let cuadr = cuadrado(suma);
let multi = multiplicar(cuadr, 10);
let resta = restar(multi, 5);
informar(resta);

console.log("Fin");
