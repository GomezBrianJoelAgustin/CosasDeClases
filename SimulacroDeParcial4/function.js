/*
Traer 
3 personajes de rick and morty y 3 de random user.
De randomuser traer la persona de mayor edad y mostrarlo.
De rick and morty traer alfabeticamente con la primer letra del nombre y mostrarlo.

En un objeto guardar datos de dos objetos distintos.
Name RM
edad RU
Gender RM
City RU
*/

const connected = navigator.onLine;

var mayorRM = [];
var datosRM = [];

var mayorRU = 0;
var datosRU = [];

function getCharacter() {

    if (connected) {

        fetch(`https://rickandmortyapi.com/api/character/1,2,183`)
        .then(res => res.json())
        .then(dataRM => {

            console.log(dataRM)        

            fetch(`https://randomuser.me/api/?results=3`)
            .then(resp => resp.json())
            .then(dataRU => {

                console.log(dataRU)
                

                for (let i = 0; i < 3; i++) {

                    if (dataRU.results[i].dob.age >= mayorRU) {

                        mayorRU = dataRU.results[i].dob.age;

                        datosRU[0] = dataRU.results[i] 
                        
                    }

                } 

                for (let i = 0; i < 3; i++) {
                    
                    mayorRM.push(dataRM[i].name)
                    
                }
                
                mayorRM.sort(); 

                for (let i = 0; i < dataRM.length; i++) {
                        
                    if (dataRM[i].name == mayorRM[2]) {
                            
                        datosRM[0] = dataRM[i]
                    }
                    
                }

                console.log("Los datos del mayor de rick and morty es: " + datosRM[0].name)

                resultados.innerHTML = `
                <h1> El mayor de Rickandmorty es: ${mayorRM[2]}
                <h1> El mayor de RandomUser es: ${mayorRU}
                `

                mostrarPjs(datosRM, datosRU)

            })
        })

    } else {
        alert("No estas conectado a wifi")
        error.innerHTML = `
        <h1> No tenes wifi crack </h1>
        `
    }
}

function mostrarPjs(datosRM, datosRU) {

    pjRM.innerHTML = `
    <p> name: ${datosRM[0].name}</p>
    <p> gender: ${datosRM[0].gender}</p>
    `
    
    pjRU.innerHTML = `
    <p> age: ${datosRU[0].dob.age}</p>
    <p> city: ${datosRU[0].location.city}</p>
    `
}