import { Bicicleta } from "./Bicicleta.js";
import { Tarjeta } from "./Tarjeta.js";


//const Tarjeta = require("./Tarjeta.js");

//const Bicicleta = require("./NombreDelaClase");

const Bici1 = new Bicicleta("Raleigh", "Mountain bike rodado 30", "https://http2.mlstatic.com/D_NQ_NP_2X_859511-MLA49423989589_032022-F.webp");

const Bici2 = new Bicicleta("Fire Bird", "Freno a disco rodado 29", "https://http2.mlstatic.com/D_NQ_NP_2X_866218-MLA51001739312_082022-F.webp");

const Bici3 = new Bicicleta("Aerolite", "Fixie rodado 28", "https://http2.mlstatic.com/D_NQ_NP_2X_933303-MLA47283848110_082021-F.webp");

const Tarjeta1 = new Tarjeta(
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