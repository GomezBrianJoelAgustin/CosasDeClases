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
                datosFemale.push(data[i].name.first + " " + data[i].name.last)
            } else {
                contadorMale ++;
                datosMale.push(data[i].name.first + " " + data[i].name.last)
            }

        }

        console.log("La cantidad de male son: " + contadorMale)
        console.log("La cantidad de female son: " + contadorFemale)

        const pjFemale = document.getElementById("pjFemale")
        const pjMale = document.getElementById("pjMale")

        pjFemale.innerHTML = `
            <h3> Female </h3>
            `;

        for (let i = 1; i < datosFemale.length; i++) {
            
            pjFemale.innerHTML += `
            <p> Nombre y apellido: ${datosFemale[i]}
            `;
        }


        pjMale.innerHTML = `
        <h3> Male </h3>
        `;

        for (let i = 1; i < datosMale.length; i++) {
            
            pjMale.innerHTML += `
            <p> Nombre y apellido: ${datosMale[i]}
            `;
        }
        
    })

}
