function sumar(a, b, callback){

    let rdo;
    setTimeout(() => {
        rdo = a+b;
        console.log("La suma es " + rdo);

        callback(rdo);
    }, 3000);
}

function restar(a, b, callback){
    let rdo;
    setTimeout(() => {
        rdo = a-b;
        console.log("La resta es " + rdo);

        callback(rdo);
    }, 2000);
}
function multiplicar(a, b, callback){    
    let rdo;
    setTimeout(() => {
        rdo = a*b;
        console.log("La multi es " + rdo);

        callback(rdo, 5);
    }, 1500);
}
function cuadrado(a, callback){
    let rdo;
    setTimeout(() => {
        rdo = a*a;
        console.log("El cuadrado es " + rdo);

        callback(rdo, 10);
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
//sumar(4,5);



sumar(4,5, (sumaResultado)=>{

    cuadrado(sumaResultado,(cuadradoResultado)=>{
        multiplicar(cuadradoResultado, 10, (prod)=>{
            restar(prod, 5, (restaResultado)=>{
                informar(restaResultado);
            });
        });
    });
});

//sumar(4,5, trabajarConLaSuma);

console.log("Fin");



function trabajarConLaSuma(suma){

    cuadrado(suma, trabajarConCuadrado);
}

function trabajarConCuadrado(cuadr){
    multiplicar(cuadr, 10, trabajarConProducto);
}

function trabajarConProducto(producto){

    restar(producto, 5, trabajarConResta);
}

function trabajarConResta(resta){
    informar(resta);
}