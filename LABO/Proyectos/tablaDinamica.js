function crearTabla(array) {

    const table = document.createElement("table");
    const tHead = document.createElement("thead");
    const tBody = document.createElement("tbody");

    table.appendChild(tHead);
    table.appendChild(tBody);

    if (array && Array.isArray(array) && array.length > 0) {
        let item = array[0];
        let trEncabezado = document.createElement("tr");
        tHead.appendChild(trEncabezado);

        for (const atributo in item) {
            if (atributo != "id") {
                const th = document.createElement("th");
                th.appendChild(document.createTextNode(atributo));
                trEncabezado.appendChild(th);
            }
        }

        array.forEach((item) => {
            const trDatos = document.createElement("tr");
            for (const atributo in item) {
                if (atributo === "id") {
                    trDatos.setAttribute("data-id", item[atributo]);
                    continue;
                }
                const tdDatos = document.createElement("td");
                tdDatos.appendChild(document.createTextNode(item[atributo]));
                trDatos.appendChild(tdDatos);
            }
            tBody.appendChild(trDatos);
        });
    }
    darEstiloATabla(table);
    return table;
}

function darEstiloATabla(tabla) {
    if (tabla && tabla instanceof HTMLTableElement) {
        const trs = tabla.querySelectorAll("tr");
        for (let i = 0; i < trs.length; i++) {
            if (!(i % 2)) {
                trs[i].classList.add("color");
            }
        }
    }
}