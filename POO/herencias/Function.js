
//Todo lo de la izquierda se asigna lo que esta en la derecha
//Los nombres de las clases en mayuscula la primera letra
//Buscar sobre POO las partes de herencia, encapsulacion, abstraccion, polimorfismo
//Ejercicio: Cambiar edad y que sea fecha_nacimiento mostrar la edad de la persona a traves de eso


class Persona{
    constructor(nombre, apellido, fecha_nacimiento){
    
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_nacimiento = fecha_nacimiento;
    }
    
    saludar(){

        return `Hola ${this.nombre} ${this.apellido} `
    }

    getEdad(){

        const ano = new Date()
        const fecha = ano.getFullYear()
        let edad = fecha - this.fecha_nacimiento;
        return`La edad es ${edad} `
    }
}

const agustin = new Persona("Agustin", "Gomez", 2003); 


console.log(agustin.saludar())
console.log(agustin.getEdad())



