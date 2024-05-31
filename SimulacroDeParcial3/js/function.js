/* 
Hacer una pantalla con un boton que sea buscar y ordenar, dividir la pantalla en dos, a la izquierda mostrar gender female y a la derecha male.
En ambos mostrar el nombre y apellido
Contar la cantidad de female y male que haya en cada uno con un contador
*/

function getCharacter(){

    fetch(`personas.json`)
    .then(res => res.json())
    .then(data => {
        
        console.log(data)

        let contadorFemale = 0;
        let contadorMale = 0;

        let datosFemale = [""];
        let datosMale = [""];

        for (let i = 0; i < 10; i++) {
            
            if (data[i].gender === "female") {
                
                contadorFemale ++;
                let datosFemale = [data[i].name.first]
                console.log(datosFemale[i])
            } else {

                contadorMale ++;
                let datosMale = [data[i].name.first]
                console.log(datosMale[i])
            }

        }

        console.log("La cantidad de male son: " + contadorMale)
        console.log("La cantidad de female son: " + contadorFemale)

        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < datosFemale.length; j++) {

                if (data[i].name.first === datosFemale[j].name.first) {
                    pjFemale.innerHTML = `
                        <p> Nombre y apellido: ${datosFemale[i]} </p>
                        `
                }
                
            }
            
        }
    })
}
