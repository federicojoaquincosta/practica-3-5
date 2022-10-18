class Red {
    #nombre;
    #descripcion;
    #imagen;
    #boton;


    constructor(nombre, descripcion, imagen){
        this.#nombre = nombre;
        this.#descripcion = descripcion;
        this.#imagen = imagen;
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
}

export {Red};