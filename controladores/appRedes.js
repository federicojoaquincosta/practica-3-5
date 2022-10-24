import { ContenedorTarjetasRed } from "../modelos/subclases/ContenedorTarjetasRed.js";
import { listaRedes } from "../pseudoBD/listaRedes.js";


const tarjetasRedes = new ContenedorTarjetasRed("#contenedor-cards");


tarjetasRedes.agregarTarjetasALaAppCon(listaRedes);



