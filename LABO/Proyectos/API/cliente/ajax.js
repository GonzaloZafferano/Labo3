const URL = " http://localhost:3000/personas";
/*
Debemos tener el live server y el servidor 300 encendido con npm start (en la carpeta donde esta el package.json (carpeta servidor)) */


const divSpinner = document.getElementById("spinner");





const getPersonas = (url)=>{ //Lo correcto: que llegue la url por parametro a la funcion.

    setSpinner(divSpinner, "./assets/Gear.gif");


    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState === 4){
            //SI SE COMPLETO (es estado 4) quiero ver la RESPUESTA.
            if(xhr.status >= 200 && xhr.status < 300){ //Resultado OK.
                console.log(xhr);

                const data = JSON.parse(xhr.responseText);
                //const data = JSON.parse(xhr.response);

                console.log(data);
            }else{
                console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
            }

            clearSpinner(divSpinner);
        }
    });

    xhr.open("GET", URL);
    
    xhr.send();


}






const getPersona = (id)=>{ //Lo correcto: que llegue la url por parametro a la funcion.

    setSpinner(divSpinner, "./assets/Gear.gif");


    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState === 4){
            //SI SE COMPLETO (es estado 4) quiero ver la RESPUESTA.
            if(xhr.status >= 200 && xhr.status < 300){ //Resultado OK.
                console.log(xhr);

                const data = JSON.parse(xhr.responseText);
                //const data = JSON.parse(xhr.response);

                console.log(data);
            }else{
                console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
            }

            clearSpinner(divSpinner);
        }
    });

    xhr.open("GET", URL +"/" + id);
    
    xhr.send();


}


const createPersona = ()=>{ //Lo correcto: que llegue la url por parametro a la funcion.


    //NO HACE FALTA DARLE ID, EL SERVIDOR SE LO DA AUTOMATICAMENTE.
    const nuevaPersona = {
        nombre: "Julio",
        sexo: "Hombre"
    }

    setSpinner(divSpinner, "./assets/Gear.gif");


    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState === 4){
            //SI SE COMPLETO (es estado 4) quiero ver la RESPUESTA.
            if(xhr.status >= 200 && xhr.status < 300){ //Resultado OK.
                console.log(xhr);

                const data = JSON.parse(xhr.responseText);
                //const data = JSON.parse(xhr.response);

                alert(data.nombre + " " + data.sexo);
                console.log(data);
            }else{
                console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
            }

            clearSpinner(divSpinner);
        }
    });

    xhr.open("POST", URL);
    
    
    //TENGO QUE FORMATEAR LA CABECERA PARA QUE EL SERVIDOR SEPA EN QUE FORMATO MANDO LA informacion en la PETICION.
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(nuevaPersona));

}


const updatePersona = ()=>{ //Lo correcto: que llegue la url por parametro a la funcion.


    //NO HACE FALTA DARLE ID, EL SERVIDOR SE LO DA AUTOMATICAMENTE.
    const persona = {
        id : 32,
        nombre: "Julia",
        sexo: "Mujer"
    }

    setSpinner(divSpinner, "./assets/Gear.gif");


    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState === 4){
            //SI SE COMPLETO (es estado 4) quiero ver la RESPUESTA.
            if(xhr.status >= 200 && xhr.status < 300){ //Resultado OK.
                console.log(xhr);

                const data = JSON.parse(xhr.responseText);
                //const data = JSON.parse(xhr.response);

                alert(data.nombre + " " + data.sexo);
                console.log(data);
            }else{
                console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
            }

            clearSpinner(divSpinner);
        }
    });

    xhr.open("PUT", URL + "/" + persona.id);
    
    
    //TENGO QUE FORMATEAR LA CABECERA PARA QUE EL SERVIDOR SEPA EN QUE FORMATO MANDO LA informacion en la PETICION.
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(persona));

}





const deletePersona = (id)=>{ //Lo correcto: que llegue la url por parametro a la funcion.

    setSpinner(divSpinner, "./assets/Gear.gif");


    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState === 4){
            //SI SE COMPLETO (es estado 4) quiero ver la RESPUESTA.
            if(xhr.status >= 200 && xhr.status < 300){ //Resultado OK.
                console.log(xhr);

                const data = JSON.parse(xhr.responseText);
                //const data = JSON.parse(xhr.response);

                console.log(data);
            }else{
                console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
            }

            clearSpinner(divSpinner);
        }
    });

    xhr.open("DELETE", URL +"/" + id);
    
    xhr.send();


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