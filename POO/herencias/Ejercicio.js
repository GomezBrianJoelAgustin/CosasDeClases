// Pantalla con un boton que sea buscar y que el boton le pida a la API re Random user y recibir esa persona e instanciar una persona y mostrar los datos de esa instancia.


class Persona{
    constructor(name, lastName, gender, city, gmail){
        this.name = name;
        this.lastName = lastName;
        this.gender = gender;
        this.city = city;
        this.gmail = gmail;
    }

    //Despues mostrarlo en pantalla y no consola
    mostrarPersona(){
        return  persona.innerHTML= 
        ` 
        <div id="containerPersona">
            <p> Name: ${this.name} </p>
            <p> Lastname: ${this.lastName} </p>
            <p> Gender: ${this.gender} </p>
            <p> City: ${this.city} </p>
            <p> Gmail: ${this.gmail} </p>
        </div> 
        `
     }
}


function getPersona(){

    fetch(`https://randomuser.me/api/`)
    .then(res => res.json())
    .then(data => {

        let datos = data.results[0]
        const personarandom = new Persona(datos.name.first, datos.name.last, datos.gender, datos.location.city, datos.email);
        console.log (personarandom);
        personarandom.mostrarPersona();
    })

}

