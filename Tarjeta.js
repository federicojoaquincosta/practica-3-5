class Tarjeta{
    #titulo = "def titulo";
    #imagen = "def imagen";
    #descripcion = "def descripcion";
    #nombreBoton = "def nombreBoton";

    constructor(titulo, descripcion, imagen, boton){
        this.#titulo = titulo;
        this.#descripcion = descripcion;
        this.#imagen = imagen;
        this.#nombreBoton = boton;

    }

    generarHtml(){
        return `
            <div class="card" style="width: 18rem;">
                <img  width="250" height="250" src="${this.#imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${this.#titulo}</h5>
                    <p class="card-text">${this.#descripcion}</p>
                    <a href="#" class="btn btn-primary">${this.#nombreBoton}</a>
                </div>
            </div>
        `;
    }

}
//module.export = Tarjeta;
export {Tarjeta};