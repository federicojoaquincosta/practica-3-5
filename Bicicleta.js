class Bicicleta {
    #marca;
    #descripcion;
    #imagen;
    #nombreBoton;

    constructor(marca, descripcion, imagen, nombreBoton){
        this.#marca = marca;
        this.#descripcion = descripcion;
        this.#imagen = imagen;
        this.#nombreBoton = nombreBoton;
    }

    getMarca(){
        return this.#marca;
    }
    getDescripcion(){
        return this.#descripcion;
    }
    getImagen(){
        return this.#imagen;
    }

    getBoton(){
        return this.#nombreBoton;
    }
}

//module.export = Bicicleta;
export {Bicicleta};