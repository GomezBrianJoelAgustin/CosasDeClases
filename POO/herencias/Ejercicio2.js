class Persona{

    constructor(name, lastName, gender, city, gmail){
        this.name = name;
        this.lastName = lastName;
        this.gender = gender;
        this.city = city;
        this.gmail = gmail;
    }

}

class Empleado extends Persona{

    constructor(name, lastName, gender, city, gmail, legajo){
        super(name, lastName, gender, city, gmail)
        this.legajo = legajo;
    }

    mostrarEmpleado(){
        return  empleado.innerHTML= 
        ` 
        <div id="containerPersona">
            <h1> Empleado </h1>
            <p> Name: ${this.name} </p>
            <p> Lastname: ${this.lastName} </p>
            <p> Gender: ${this.gender} </p>
            <p> City: ${this.city} </p>
            <p> Gmail: ${this.gmail} </p>
            <p> Legajo: ${this.legajo} </p>
        </div> 
        `
     }

}

class Cliente extends Persona{

    constructor(name, lastName, gender, city, gmail, numeroCuenta){
        super(name, lastName, gender, city, gmail)
        this.numeroCuenta = numeroCuenta;
    }

    mostrarCliente(){
        return  cliente.innerHTML= 
        ` 
        <div id="containerPersona">
            <h1> Cliente </h1>
            <p> Name: ${this.name} </p>
            <p> Lastname: ${this.lastName} </p>
            <p> Gender: ${this.gender} </p>
            <p> City: ${this.city} </p>
            <p> Gmail: ${this.gmail} </p>
            <p> Numero de cuenta: ${this.numeroCuenta} </p>
        </div> 
        `
     }

}

function getPersona(){

    fetch(`https://randomuser.me/api/`)
    .then(res => res.json())
    .then(data => {

        
        let datos = data.results[0]
        console.log(datos.dob.age)
        if (datos.dob.age> 18) {
        const personarandom = new Empleado(datos.name.first, datos.name.last, datos.gender, datos.location.city, datos.email, datos.location.street.number);
        console.log (personarandom);
        personarandom.mostrarEmpleado();
        } else {
            const personarandom = new Cliente(datos.name.first, datos.name.last, datos.gender, datos.location.city, datos.email, datos.location.street.number);
            console.log (personarandom);
            personarandom.mostrarCliente();
        }

        

    })

}