import { Tarjeta } from "./Tarjeta.js";

class ContenedorTarjetas{ 
    #idContenedor = "def id";
    #tarjetas = [];

    constructor(idContenedor){
        this.#idContenedor = idContenedor;
    }
   

    /**
     * Agrega las tarjetas a la app con la lista contenido
     * @param {Array} listaContenido para las Tarjetas del Contenedor
     */
    agregarTarjetasALaAppCon(listaContenido){ 
        this.agregarInfoALasTarjetas(listaContenido);
        this.mostrarTarjetas();
    }

    /**
     * Insertar el html necesario para las tarjetas
     */
    mostrarTarjetas(){ 
        document.querySelector(this.#idContenedor).innerHTML =`
            <div class="row">
                ${this.generadorTarjetasHtml()}
            </div>
        `;
    }

    /**
     * Generar el html de las tarjetas con la lista de contenido
     * @returns el html de las tarjetas generadas
     */
    generadorTarjetasHtml(){ 
        let tarjetasGeneradas = ``;

        for (let i = 0; i < this.#tarjetas.length; i++) {
            tarjetasGeneradas += `
                <div class="col" >
                    ${this.#tarjetas[i].generarHtml()}
                </div>
            `
        }
        return tarjetasGeneradas;
    }

    /**
     * Genera las tarjetas y las guarda a partir de la lista de contenido
     * @param {Array} listaContenido para las Tarjetas 
     */
    agregarInfoALasTarjetas(listaContenido){ 
        for (let i = 0; i < listaContenido.length; i++) {
            this.#tarjetas.push(
                new Tarjeta(
                    listaContenido[i].getMarca(),
                    listaContenido[i].getDescripcion(),
                    listaContenido[i].getImagen(),
                    "Comprar"
                )
            );        
        }
    }
 }

 export {ContenedorTarjetas};