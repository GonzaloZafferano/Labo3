let divTabla = document.getElementById("divTabla");
let datos;
let btnSexo = document.getElementById("btnSexo");
let btnMapear = document.getElementById("btnMapear");

btnMapear.addEventListener("click", ()=>{

    refrescarTabla(divTabla, crearTabla(mapear(datos)));


});

btnSexo.addEventListener("click", ()=>{

       // refrescarTabla(divTabla, crearTabla(filtrarSexo(datos, "Male")));
        refrescarTabla(divTabla, crearTabla(filtrarSexo(datos, "Female")));
});
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){

    if(this.readyState === 4 &&  this.status === 200){
        datos = JSON.parse(this.responseText);

        console.log(datos);

        refrescarTabla(divTabla, crearTabla(datos));
    }


}

xhr.open("get", "Data.json");
xhr.send();




function crearTabla(data){
    if(!Array.isArray(data)){
        return null;
    }

    const tabla = document.createElement("table");
    tabla.appendChild(crearCabecera(data[0]));
    tabla.appendChild(crearCuerpo(data));


    tabla.classList.add("table");
    tabla.classList.add("table-bordered");
    tabla.classList.add("table-striped");
    tabla.classList.add("table-hover");
    tabla.classList.add("table-light");
    tabla.classList.add("table-sm");

    return tabla;    
}


function crearCabecera(row){

    const cabecera = document.createElement("thead");
    const tr = document.createElement("tr");

    cabecera.classList.add("thead-dark");
    cabecera.classList.add("text-capitalize");
    cabecera.classList.add("text-center");


    for (const key in row) {
        if(key!="id")
        {
            const th= document.createElement("th");
            th.textContent = key;
            tr.appendChild(th);
        }
    }

    cabecera.appendChild(tr);
    return cabecera;
}

function crearCuerpo(data){

    const cuerpo = document.createElement("tbody");

    data.forEach((element) => {
        const fila = document.createElement("tr");
        for (const atributo in element) {
            if(atributo==="id")
            {
                fila.setAttribute("data-id",element[atributo]);
                continue;
            }
            const td= document.createElement("td");
            td.textContent = element[atributo];
            fila.appendChild(td);
            fila.classList.add("puntero");
        }

        const filas = cuerpo.children;

        for(let i=0; i<filas.length; i++)
        {
            if (i%2) {
                filas[i].classList.add("gris");
            }
        }
        cuerpo.appendChild(fila);
    });
    
    return cuerpo;
}


function refrescarTabla(div, tabla){

    while(div.hasChildNodes()){
        div.removeChild(div.firstElementChild);
    }

    div.appendChild(tabla);
}

function filtrarSexo(array, sexo){

    return array.filter(x=> x.genero === sexo);

}

function mapear(array){
    return array.map(e => ({email : e.email, sueldo : e.sueldo}));
}