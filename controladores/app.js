
import { listaBicis } from "../pseudoBD/listaBicis.js";
import { ContenedorTarjetasBici } from "../modelos/subclases/ContenedorTarjetasBici.js";

const contenedorTarjetasBici = new ContenedorTarjetasBici("#contenedor-cards");

contenedorTarjetasBici.agregarTarjetasALaAppCon(listaBicis);


