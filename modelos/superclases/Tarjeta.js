class Tarjeta{
    _titulo = "def titulo";
    _imagen = "def imagen";
    _descripcion = "def descripcion";
    _nombreBoton = "def nombreBoton";

    constructor(titulo, descripcion, imagen, boton){
        this._titulo = titulo;
        this._descripcion = descripcion;
        this._imagen = imagen;
        this._nombreBoton = boton;

    }

    generarHtml(){
    /*    return `
            <div class="card" style="width: 18rem;">
                <img  width="250" height="250" src="${this._imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${this._titulo}</h5>
                    <p class="card-text">${this._descripcion}</p>
                    <a href="#" class="btn btn-primary">${this._nombreBoton}</a>
                </div>
            </div>
        `;
        */
    }

}

export {Tarjeta};