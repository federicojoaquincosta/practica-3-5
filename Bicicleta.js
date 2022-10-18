class Bicicleta {
    #marca;
    #descripcion;
    #imagen;

    constructor(marca, descripcion, imagen){
        this.#marca = marca;
        this.#descripcion = descripcion;
        this.#imagen = imagen;
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
}

//module.export = Bicicleta;
export {Bicicleta};