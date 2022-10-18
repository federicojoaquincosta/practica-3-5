
import { listaBicis } from "./listaBicis.js";
import { ContenedorTarjetasBici } from "./ContenedorTarjetasBici.js";

const contenedorTarjetasBici = new ContenedorTarjetasBici("#contenedor-cards");

contenedorTarjetasBici.agregarTarjetasALaAppCon(listaBicis);


