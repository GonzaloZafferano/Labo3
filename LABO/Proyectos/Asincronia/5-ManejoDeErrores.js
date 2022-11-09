function sumar(a, b, callback){

    let rdo;    
    setTimeout(() => {

        try{
            //TYPEOF RETORNA UN STRING CON EL TIPO DE DATO
            if(typeof a !== "number" || 
            typeof b !== "number" ||
            typeof callback != "function") {
                throw new Error("Parametros invalidos para la suma.");
            }
            rdo = a+b;
            console.log("La suma es " + rdo);
    
            callback(rdo);
        }
        catch(err){
            console.error(err.message);
        }

    }, 3000);
}

function restar(a, b, callback){
    let rdo;
    setTimeout(() => {

        try{
            //TYPEOF RETORNA UN STRING CON EL TIPO DE DATO
            if(typeof a !== "number" || 
            typeof b !== "number" ||
            typeof callback != "function") {
                throw new Error("Parametros invalidos para la resta.");
            }
            rdo = a-b;
            console.log("La resta es " + rdo);
    
            callback(rdo);
        }
        catch(err){
            console.error(err.message);
        }

    }, 2000);
}
function multiplicar(a, b, callback){    
    let rdo;
    setTimeout(() => {


        try{
            //TYPEOF RETORNA UN STRING CON EL TIPO DE DATO
            if(typeof a !== "number" || 
            typeof b !== "number" ||
            typeof callback != "function") {
                throw new Error("Parametros invalidos para el producto.");
            }
            rdo = a*b;
            console.log("La multi es " + rdo);
    
            callback(rdo, 5);
        }
        catch(err){
            console.error(err.message);
        }

    }, 1500);
}
function cuadrado(a, callback){
    let rdo;
    setTimeout(() => {
        try{
            //TYPEOF RETORNA UN STRING CON EL TIPO DE DATO
            if(typeof a !== "number" || 
            typeof callback != "function") {
                throw new Error("Parametros invalidos para el cuadrado.");
            }
            rdo = a*a;
            console.log("El cuadrado es " + rdo);
    
            callback(rdo, 10);
        }
        catch(err){
            console.error(err.message);
        }


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
            restar(prod, true, (restaResultado)=>{
                informar(restaResultado);
            });
        });
    });
});

//sumar(4,5, trabajarConLaSuma);

console.log("Fin");


/*
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
*/