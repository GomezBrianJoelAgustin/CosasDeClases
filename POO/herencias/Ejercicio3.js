// Hace un metodo en la clase peronsa que se llame getEdad usando la fecha de nacimiento.

class Persona{
    constructor(name, lastName, gender, city, email, fechaNacimiento){
        this.name = name;
        this.lastName = lastName;
        this.gender = gender;
        this.city = city;
        this.email = email;
        this.fechaNacimiento = new Date(fechaNacimiento);
    }

    getEdad(){

        const hoy = new Date();
        const anioActual = hoy.getFullYear();
        const mesActual = hoy.getMonth() + 1; 
        const diaActual = hoy.getDate();

        const anioNacimiento = this.fechaNacimiento.getFullYear();
        const mesNacimiento = this.fechaNacimiento.getMonth() + 1; 
        const diaNacimiento = this.fechaNacimiento.getDate();

        let edad = anioActual - anioNacimiento;

        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
            edad--;
        }

        return mostrarEdad.innerHTML= `
        <h3>La edad de ${this.name} ${this.lastName} es ${edad}</h3>
        ` 
    }
}

function getPersona(){
    fetch(`https://randomuser.me/api/`)
    .then(res => res.json())
    .then(data => {

        const dato = data.results[0];
        const personarandom = new Persona(dato.name.first, dato.name.last, dato.gender, dato.location.city , dato.email, dato.dob.date)
        console.log(personarandom)
        personarandom.getEdad()

    })
}

