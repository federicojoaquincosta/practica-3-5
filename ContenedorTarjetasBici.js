import { ContenedorTarjetas } from "./ContenedorTarjetas.js";
import { Bicicleta } from "./Bicicleta.js";
import { Tarjeta } from "./Tarjeta.js";

class ContenedorTarjetasBici extends ContenedorTarjetas{ 

    // sobreescritura
    /* agregarInfoALasTarjetas(listaContenido){
        for (let i = 0; i < listaContenido.length; i++) {
            this._tarjetas.push(
                new Tarjeta(
                    listaContenido[i].getNombre(),
                    listaContenido[i].getTipoPreparacion(),// .getTipoPreparacion();
                    listaContenido[i].getFoto()
                )
            );        
        }
    } */

    /**
     * Construye una tarjeta con bicicleta
     * @param {Bicicleta} info para construir la tarjeta
     * @returns tarjeta construida con la info
     */
    crearTarjetaCon(info){
        return new Tarjeta(
            info.getMarca(),
            info.getDescripcion(),
            info.getImagen()
        )
    }
}


export { ContenedorTarjetasBici };