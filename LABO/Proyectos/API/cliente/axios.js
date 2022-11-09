const URL = " http://localhost:3000/personas";
/*
Debemos tener el live server y el servidor 3000 encendido con npm start (en la carpeta donde esta el package.json (carpeta servidor)) */


const divSpinner = document.getElementById("spinner");





const getPersonas = (url)=>{ //Lo correcto: que llegue la url por parametro a la funcion.

    setSpinner(divSpinner, "./assets/Basketball.gif");

    //AXIOS NO REQUIERE QUE FORCEMOS LA EXCEPCION,
    //SI FALLA, AUTOMATICAMENTE LO MANDA AL CATCH.
    axios(URL)
    .then((rta)=>{
       // console.log(rta);
        console.log(rta.data); //Muestra todo el array.
    })  
    .catch((err)=>{
        console.error(err);
        console.error(err.message);
    })
    .finally(()=>{
        clearSpinner(divSpinner);
    });

}


//LAS FUNCIONES ASINCRONAS DEBEN ESTAR SI O SI DENTRO DE UN TRY-CATH
const getPersonasAsync = async (url)=>{ //Lo correcto: que llegue la url por parametro a la funcion.
    try{
        setSpinner(divSpinner, "./assets/Basketball.gif");
        //const data = await axios(URL);
        //console.log(data.data);


        //DESESTRUCTURO EL OBJETO.
        const {data} = await axios(URL);
        console.log(data);
    }catch(error){
        console.error(error.message);
    }finally{
        clearSpinner(divSpinner);
    }
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