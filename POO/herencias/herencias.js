class Persona{
    constructor(nombre, edad, dni, nacionalidad, fechaNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.nacionalidad = nacionalidad;
        this.fechaNacimiento = fechaNacimiento;
    }   

    saludar(){
        return `Hola ${this.nombre}`
    }
}

class Clientes extends Persona{
    constructor(nombre, edad, dni, nacionalidad, fechaNacimiento, cuenta){

        super(nombre, edad, dni, nacionalidad, fechaNacimiento)
        this.cuenta = cuenta;
    }
}

let agustin = new Clientes("Agustin", 21, 1111, "Argentino", 2003, 100);

console.log(agustin.saludar())

