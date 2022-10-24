class Bicicleta {
    #marca;
    #descripcion;
    #imagen;
    #nombreBoton;
    #precio;

    constructor(marca, descripcion, imagen, nombreBoton, precio){
        this.#marca = marca;
        this.#descripcion = descripcion;
        this.#imagen = imagen;
        this.#nombreBoton = nombreBoton;
        this.#precio = precio;
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

    getPrecio(){
        return this.#precio;
    }
}

//module.export = Bicicleta;
export {Bicicleta};