import { ContenedorTarjetas } from "../superclases/ContenedorTarjetas.js";
import { Red } from "../superclases/Red.js";
import { Tarjeta } from "../superclases/Tarjeta.js";
import { TarjetaRed } from "./TarjetaRed.js";

class ContenedorTarjetasRed extends ContenedorTarjetas{ 


    /**
     * Construye una tarjeta con red
     * @param {Red} info para construir la tarjeta
     * @returns tarjeta construida con la info
     */
    crearTarjetaCon(info){
        return new TarjetaRed (
            info.getNombre(),
            info.getDescripcion(),
            info.getImagen(),
            info.getBoton()
        )
    }
}


export { ContenedorTarjetasRed };