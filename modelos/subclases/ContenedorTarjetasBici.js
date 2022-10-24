import { ContenedorTarjetas } from "../superclases/ContenedorTarjetas.js";
import { Bicicleta } from "../superclases/Bicicleta.js";
import { TarjetaBici } from "./TarjetaBici.js";


class ContenedorTarjetasBici extends ContenedorTarjetas{ 


    /**
     * Construye una tarjeta con bicicleta
     * @param {Bicicleta} info para construir la tarjeta
     * @returns tarjeta construida con la info
     */
    crearTarjetaCon(info){
        return new TarjetaBici(
            info.getMarca(),
            info.getDescripcion(),
            info.getImagen(),
            info.getBoton(),
            info.getPrecio()
        )
    }
}


export { ContenedorTarjetasBici };