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

    if (!!connected) {

        fetch(`https://rickandmortyapi.com/api/character/1,183,2`)
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
                        
                    }
                }

                for (let i = 0; i < 3; i++) {
                    
                    mayorRM.push(dataRM[i].name)
                    
                    console.log("Los nombres son: " + mayorRM)

                    mayorRM.sort();
                    
                }

                console.log("El mayor de Rickandmorty es: " + mayorRM[0])

                console.log("El mayor de randomuser es: " + mayorRU)

                pjRM.innerHTML = `
                <h1> El mayor de Rickandmorty es: ${mayorRM[0]}
                `
                pjRU.innerHTML = `
                <h1> El mayor de RandomUser es: ${mayorRU}
                `

            })
        })

    } else {
        alert("No estas conectado a wifi")
        error.innerHTML = `
        <h1> No tenes wifi crack </h1>
        `
    }

}

function mostrarPjs() {
    
}