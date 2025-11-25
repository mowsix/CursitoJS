//Ejemplo Inutil
const pruebaAsincrona = async () => {

    let peticion = await fetch("https://rickandmortyapi.com/api/character");
    let respuesta = await peticion.json();
    let printeable = respuesta.results;

    Object.keys(printeable).forEach((key) => {
        let fila = document.createElement("tr");
        let nombre = document.createElement("td");
        let estatus = document.createElement("td");
        let especie = document.createElement("td");
        let genero = document.createElement("td");

        nombre.innerText = printeable[key].name;
        estatus.innerText = printeable[key].status;
        especie.innerText = printeable[key].species;
        genero.innerText = printeable[key].gender;

        fila.appendChild(nombre);
        fila.appendChild(estatus);
        fila.appendChild(especie);
        fila.appendChild(genero);

        document.querySelector(".cuerpo-tabla").appendChild(fila);
    })
    }
pruebaAsincrona();

