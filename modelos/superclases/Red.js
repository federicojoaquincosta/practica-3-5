class Red {
    #nombre;
    #descripcion;
    #imagen;
    #nombreBoton;


    constructor(nombre, descripcion, imagen, nombreBoton){
        this.#nombre = nombre;
        this.#descripcion = descripcion;
        this.#imagen = imagen;
        this.#nombreBoton = nombreBoton;
    }

    getNombre(){
        return this.#nombre;
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

export {Red};