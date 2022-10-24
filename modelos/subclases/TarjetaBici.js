import { Tarjeta } from "../superclases/Tarjeta.js";

class TarjetaBici extends Tarjeta {
    #precio;

    constructor(titulo, descripcion, imagen, nombreBoton, precio) {
        super(titulo, descripcion, imagen, nombreBoton);
        this.#precio = precio;
    }

    generarHtml() {
        return `
            <div class="card tarjetabici" style="width: 18rem;">
                <img  width="250" height="250" src="${this._imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${this._titulo}</h5>
                    <p class="card-text">${this._descripcion}</p>
                    <h5 class="card-title">$${this.#precio}</h5>
                    <a href="#" class="btn btn-primary">${this._nombreBoton}</a>
                </div>
            </div>
        `;
    }

}

export { TarjetaBici };




