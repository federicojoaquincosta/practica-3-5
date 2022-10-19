import { ContenedorTarjetas } from "./ContenedorTarjetas.js";
import { Bicicleta } from "./Bicicleta.js";
import { Tarjeta } from "./Tarjeta.js";

class ContenedorTarjetasBici extends ContenedorTarjetas{ 


    /**
     * Construye una tarjeta con bicicleta
     * @param {Bicicleta} info para construir la tarjeta
     * @returns tarjeta construida con la info
     */
    crearTarjetaCon(info){
        return new Tarjeta(
            info.getMarca(),
            info.getDescripcion(),
            info.getImagen(),
            info.getBoton()
        )
    }
}


export { ContenedorTarjetasBici };