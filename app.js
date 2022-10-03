import { Bicicleta } from "./Bicicleta.js";
import { Tarjeta } from "./Tarjeta.js";
import { ContenedorTarjetas } from "./ControladorTarjetas.js";
import { listaBicis } from "./listaBicis.js";


//const Tarjeta = require("./Tarjeta.js");

//const Bicicleta = require("./NombreDelaClase");



const unContenedorTarjetas = new ContenedorTarjetas("#contenedor-cards");

unContenedorTarjetas.agregarTarjetasALaAppCon(listaBicis);


/*const Tarjeta1 = new Tarjeta(
    Bici1.getMarca(),
    Bici1.getDescripcion(),
    Bici1.getImagen(),
    "Comprar"
)

const Tarjeta2 = new Tarjeta(
    Bici2.getMarca(),
    Bici2.getDescripcion(),
    Bici2.getImagen(),
    "Comprar"
)

const Tarjeta3 = new Tarjeta(
    Bici3.getMarca(),
    Bici3.getDescripcion(),
    Bici3.getImagen(),
    "Comprar"
)

document.querySelector("#contenedor-cards").innerHTML =`
    <div class="row">
        <div class="col">
            ${Tarjeta1.generarHtml()}
        </div>
        <div class="col">
            ${Tarjeta2.generarHtml()}
        </div>
        <div class="col">
            ${Tarjeta3.generarHtml()}
        </div>
    </div>
`;
*/