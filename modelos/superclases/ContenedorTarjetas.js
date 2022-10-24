import { Tarjeta } from "./Tarjeta.js";

class ContenedorTarjetas{ 
    #idContenedor = "def id";
    #tarjetas = [];

    /**
     * Inicializa un objeto ContenedorTarjeta
     * @param {String} idContenedor en la pagina
     */
    constructor(idContenedor){
        this.#idContenedor = idContenedor;
    }
    /* setIdContenedor(idContenedor){ 
        this.#idContenedor = idContenedor;
    } */

    /**
     * Agrega las tarjetas a la app con la lista contenido
     * @param {Array} listaContenido para las Tarjetas del Contenedor
     */
    agregarTarjetasALaAppCon(listaContenido){ 
        this.agregarInfoALasTarjetas(listaContenido);
        this.#mostrarTarjetas();
    }

    /**
     * Insertar el html necesario para las tarjetas
     */
    #mostrarTarjetas(){ 
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
        //alert("esto es un comportamiento abstracto - ")
        for (let i = 0; i < listaContenido.length; i++) {
            this.#tarjetas.push(
                this.crearTarjetaCon(listaContenido[i])
            );        
        }
        
    }

    /**
     * Construye una tarjeta con la info recibida
     * @param {Object} info para construir la tarjeta
     */
    crearTarjetaCon(info){
        alert("creacion de tarjeta fallo - comportamiento abstracto");
    }
 }

 export {ContenedorTarjetas};