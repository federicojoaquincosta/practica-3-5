import { Tarjeta } from "../superclases/Tarjeta.js";

class TarjetaRed extends Tarjeta {

    constructor(titulo, descripcion, imagen, nombreBoton) {
        super(titulo, descripcion, imagen, nombreBoton);
    }

    generarHtml() {
        return `
            <div class="card tarjetared" style="width: 18rem;">
                <img  width="250" height="250" src="${this._imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${this._titulo}</h5>
                    <p class="card-text">${this._descripcion}</p>
                    <a href="#" class="btn btn-primary">${this._nombreBoton}</a>
                </div>
            </div>
        `;
    }

}

export { TarjetaRed };