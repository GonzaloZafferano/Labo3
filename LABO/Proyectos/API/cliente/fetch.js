const URL = " http://localhost:3000/personas";
/*
Debemos tener el live server y el servidor 300 encendido con npm start (en la carpeta donde esta el package.json (carpeta servidor)) */


const divSpinner = document.getElementById("spinner");





const getPersonas = (url)=>{ //Lo correcto: que llegue la url por parametro a la funcion.

    setSpinner(divSpinner, "./assets/Settings.gif");

    //Fetch me retorna una PROMESA.
    //No debemos, en este caso, programar la promesa,
    //sino que la debemos CONSUMIR.
    //Por defecto, fetch usa una peticion GET.

    //El FETCH SIEMPRE VA AL THEN, pero en la propiedad 'Ok' tira un FALSE.
    //si sale bien, el 'Ok' sera True.
    //ES DECIR, SOLO NOSOTROS PODRIAMOS HACER QUE EL FETCH() VAYA AL CATCH,
    //FORZANDO UNA EXCEPCION.
    fetch(URL)
    .then((rta)=>{
        //console.log(rta);
        //return (rta.ok) ? rta.json() : Promise.reject(`Error: ${rta.status} - ${rta.statusText}`); //LANZAMOS LA PROMESA PARA EL CATCH. Promise.reject(`Error: ${rta.status} - ${rta.statusText}`); //LANZAMOS LA PROMESA PARA EL CATCH.


        if(rta.ok){
            return rta.json();//RETORNA OOTRA PROMESA
        }else{
            return Promise.reject(`Error: ${rta.status} - ${rta.statusText}`); //LANZAMOS LA PROMESA PARA EL CATCH.
            //ERROR 404 - Not Found.            
        }

    })
    .then((dataOk)=>{
        console.log(dataOk);
    })
    .catch((err)=>{
        console.error(err);
    })
    .finally(()=>{
        clearSpinner(divSpinner);
    });

}


//https://icons8.com/preloaders/
const setSpinner = (div, src) =>{
    const img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("alt", "spinner");
    div.appendChild(img);
}

const clearSpinner = (div)=>{
    while(div.hasChildNodes()){
        div.removeChild(div.firstElementChild);
    }
}