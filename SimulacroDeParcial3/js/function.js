/* 
Hacer una pantalla con un boton que sea buscar y ordenar, dividir la pantalla en dos, a la izquierda mostrar gender female y a la derecha male.
En ambos mostrar el nombre y apellido
Contar la cantidad de female y male que haya en cada uno con un contador

NUEVO
De este ejercicio hacer que de alguna forma me de a elegir con un button type checkbox que sea local o de internet
Si es local es como esta.
Si es con wifi la busqueda la tiene que hacer en la api.
Mostrar la edad de todos
Mostrar la foto de la persona de mayor edad
*/

function getCharacter(){

    var local = document.getElementById("local")
    var internet = document.getElementById("internet")

    let url = ``
    let contadorFemale = 0;
    let contadorMale = 0;
    let datosFemale = [""];
    let datosMale = [""];
    let edad = [];

    let mayor = 0;
    let aux = undefined;

    if (local.checked == true) {
            
        alert("Seleccionaste local")
       
        let url = `personas.json`   

        fetch(url)
        .then(res => res.json())
        .then(data => {
            
            console.log(data)

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
                <p> La cantidad de female son: ${contadorFemale}</p>
                `;

            for (let i = 1; i < datosFemale.length; i++) {
                
                pjFemale.innerHTML += `
                <p> Nombre y apellido: ${datosFemale[i]}
                
                `;
            }


            pjMale.innerHTML = `
            <h3> Male </h3>
            <p> La cantidad de male son: ${contadorMale}</p>
            `;

            for (let i = 1; i < datosMale.length; i++) {
                
                pjMale.innerHTML += `
                <p> Nombre y apellido: ${datosMale[i]}
                `;
            }
        })    
    }  

    else {
        
        alert("Seleccionaste internet")

        let url = `https://randomuser.me/api/?results=10`

        fetch(url)
        .then(res => res.json())
        .then(data => {

            console.log(data)

            for (let i = 0; i < 10; i++) {
                
                if (data.results[i].gender === "female") {

                    contadorFemale ++;
                    datosFemale.push(data.results[i].name.first + " " + data.results[i].name.last)
                } else {

                    contadorMale ++;
                    datosMale.push(data.results[i].name.first + " " + data.results[i].name.last)  
                }

            }

            for (let i = 0; i < 10; i++) {

                edad.push(data.results[i].registered.age)

                if (mayor < edad[i]) {

                    mayor = Math.max(edad[i])

                    aux = data.results[i].picture.large;
                }
            }


            console.log("La cantidad de male son: " + contadorMale)
            console.log("La cantidad de female son: " + contadorFemale)

            const pjFemale = document.getElementById("pjFemale")
            const pjMale = document.getElementById("pjMale")

            pjFemale.innerHTML = `
                <h3> Female </h3>
                <p> La cantidad de female son: ${contadorFemale}</p>
                `;

            for (let i = 1; i < datosFemale.length; i++) {
                
                pjFemale.innerHTML += `
                <p> Nombre, apellido y edad: ${datosFemale[i]}, ${edad[i]}
                `;
            }


            pjMale.innerHTML = `
            <h3> Male </h3>
            <p> La cantidad de male son: ${contadorMale}</p>
            `;

            for (let i = 1; i < datosMale.length; i++) {
                
                pjMale.innerHTML += `
                <p> Nombre, apellido y edad: ${datosMale[i]}, ${edad[i]} 
                `;
            }

            console.log(mayor)
          
        })   

        containerPic.innerHTML = `
        <h2> La persona mas grande es </h2>
        <img src="${aux}" alt="">
        `

    }

}
