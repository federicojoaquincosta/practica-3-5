import { ContenedorTarjetas } from "./ContenedorTarjetas.js";
import { Red } from "./Red.js";
import { Tarjeta } from "./Tarjeta.js";

class ContenedorTarjetasRed extends ContenedorTarjetas{ 


    /**
     * Construye una tarjeta con red
     * @param {Red} info para construir la tarjeta
     * @returns tarjeta construida con la info
     */
    crearTarjetaCon(info){
        return new Tarjeta(
            info.getNombre(),
            info.getDescripcion(),
            info.getImagen()
        )
    }
}


export { ContenedorTarjetasRed };