// MAS INFO: https://platzi.com/clases/2332-javascript-poo/55663-playgrounds-manejo-de-clases/

class Banda {
    constructor({ nombre, generos = [] }) {
        this.nombre = nombre;
        this.generos = generos;
        this.integrantes = [];
    }
    agregarIntegrante(integranteuevo) {
        const thereAreBaterista = this.integrantes.some(
            (integrante) => integrante.instrumento === "Bateria"
        );
        if (thereAreBaterista) {
            if (integranteuevo.instrumento === "Bateria") {
            console.log("No puedes agregar mas de un integrante con bateria");
            return;
            }
        }
        this.integrantes.push(integranteuevo);
    }
}

//Crear clase Integrante
class Integrante {
  // Tu código aquí 👈
    constructor({ nombre, instrumento }) {
        this.nombre = nombre;
        this.instrumento = instrumento;
    }
}

export { Banda, Integrante };
