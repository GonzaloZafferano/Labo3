/*
Una promesa es un objeto.
La promesa recibe un CALLBACK, que a su vez, recibe 2 CALLBACKS.
Las promesas son retornadas por funciones.

Si quiero tener una funcion asincronica, voy a retornar una PROMESA.
Las promesas son retornadas por funciones que QUIEREN ser asincronicas.

Mientras la promesa NO SE CUMPLE, esta en un estado "pendiente".

Se puede resolver para BIEN O PARA MAL, pero si se resuelve,
se dice que la promesa esta fullfilled (DEJA DE ESTAR PENDING).

La promesa puede haber sido Resuelta o Rechazada.
Mientras esperamos la respuesta de la promesa, 
esta en estado PENDING.
Conseguida la respuesta (ok o error), esta en estado FullFilled.
*/

//const promesa = new Promise((resolve, reject)=>{});
//console.log(promesa);



function esPositivo(numero) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (isNaN(numero)) {
                reject("No es un numero"); //catch
            } else if (numero >= 0) {
                resolve("Es positivo");  //then
            } else {
                resolve("Es negativo"); //then
            }
        }, 4000);
    });
}


/*

console.log("Inicio");

let promesa = esPositivo("HOLA"); //TIRA EL ESTADO REJECTED
//let promesa = esPositivo(123); //TIRA EL ESTADO RESOLVE

console.log(promesa);

promesa.then((texto)=>{ //RECIBE EL PARAMETRO DEL RESOLVE
    console.info(texto);
    
    console.log(promesa);
});
promesa.catch((error)=>{ //RECIBE EL PARAMETRO DE REJECT
    console.error(error);
    
    console.log(promesa);
});

*/

/*
//esPositivo("hola").then((rta)=>{
//esPositivo(-10).then((rta)=>{
esPositivo(10).then((rta)=>{
    console.log(rta);
}).catch((err)=>{
    console.error(err);
});
console.log("Fin");

*/






function sumarPromise(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (typeof a === "number" && typeof b === "number") {
                let suma = a + b;

                console.log("La suma es " + suma);
                resolve(suma);  //EL RESOLVE ES COMO UN RETURN, LO SACA DE LA FUNCION.
            }

            reject("Parametros invalidos para la suma.");

        }, 1500);
    });
}



function cuadradoPromise(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (typeof a === "number") {
                let cuadrado = a * a;

                console.log("El cuadrado es " + cuadrado);
                resolve(cuadrado);  //EL RESOLVE ES COMO UN RETURN, LO SACA DE LA FUNCION.
            }

            reject("Parametros invalidos para el cuadrado.");

        }, 1500);
    });
}


function multiplicarPromise(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (typeof a === "number" && typeof b === "number") {
                let producto = a * b;

                console.log("El producto es " + producto);
                resolve(producto);  //EL RESOLVE ES COMO UN RETURN, LO SACA DE LA FUNCION.
            }

            reject("Parametros invalidos para el producto.");

        }, 1500);
    });
}


function restarPromise(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (typeof a === "number" && typeof b === "number") {
                let resta = a - b;

                console.log("La resta es " + resta);
                resolve(resta);  //EL RESOLVE ES COMO UN RETURN, LO SACA DE LA FUNCION.
            }

            reject("Parametros invalidos para la resta.");

        }, 1500);
    });
}

function informar(valor) {
    console.log("El resultado es " + valor);
}

/*
console.log("inicio");

sumarPromise(4, 5)
    //sumarPromise("",5)
    .then(sumaRta => cuadradoPromise(sumaRta))//RETORNA UNA PROMESA.    
    .then(cuadradoRta => multiplicarPromise(cuadradoRta, 10)) //RETORNA UNA PROMESA
    .then(productoRta => restarPromise(productoRta, 5))//RETORNA UNA PROMESA.   
    .then(resResta => informar(resResta))
    .catch(err => console.error(err));

console.log("Fin");
*/

//PARA QUE UNA FUNCION SEA ASINCRONA, DEBE SER ASYNC, 
//Y SI O SI DEBE TENER UN TRY-CATCH.
//AWAIT: SOLO EN FUNCIONES ASYNC.
//Lo puedo utilizar adelante de la llamada de una funcion 
//que retorna una promesa,
//y lo que hace es ESPERAR a que la promesa este fullfilled.

//async function calcular(a,b){
    const calcular = async (a,b)=>{
    try{
        let suma = await sumarPromise(a,b);
        let cuadrado = await cuadradoPromise(suma);
        let producto =await  multiplicarPromise(cuadrado, 10);
        let restar =await  restarPromise(producto, 5);
        informar(restar);
    }catch(err){ //EL CATCH ES POR SI UNA PROMESA TERMINA CON REJECTED.
        console.error(err);
    }
}

calcular(4,5);