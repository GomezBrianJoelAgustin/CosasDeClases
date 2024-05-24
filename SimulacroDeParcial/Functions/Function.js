const pjs = [];
const maxId = [0];

function buscarMayor(){

    const pjId = document.getElementById("pjId").value;

    pjs.push(pjId)

    if (pjs.length == 9) {
        
        alert("Ya se ingresaron 10 numeros")

        for (i=0; i <= pjs.length; i ++){
            if (pjs[i] > maxId[0]) {
                maxId[0] = pjs[i];
            } 
        };
        
        console.log("Array = " + pjs)
        console.log("La Id mayor es = " + maxId)
        personajes(maxId)
    };
    
}; 


function personajes (maxId){

    fetch (`https://rickandmortyapi.com/api/character/${maxId[0]}`)
    .then (res => res.json())
    .then (dataRym =>{

        fetch (`https://randomuser.me/api/`)
        .then(respuesta => respuesta.json())
        .then (dataRu =>{

            console.log(dataRym)
            console.log(dataRu)

            if ( dataRym.species === "Human") {
                const containerPj = document.getElementById("containerPj");
                containerPj.innerHTML = `
                <div id="containerPhotoHuman">
                    <img src="${dataRym.image}" alt="">
                    <img id= "ruImg" src="${dataRu.results[0].picture.large}" alt="">
                </div>
                `;
            };

            if (dataRym.species != "Human") {
                const containerPj = document.getElementById("containerPj");
                containerPj.innerHTML = `
                <div id="containerPhoto">
                    <img src="${dataRu.results[0].picture.large}" alt=""></img>
                </div>    

                <div id="containerInfo">
                    <h3>Nombre: ${dataRu.results[0].name.first}</h3>
                    <h3>Apellido: ${dataRu.results[0].name.last}</h3>
                    <h3>Gmail: ${dataRu.results[0].email}</h3>
                </div>
                `
            }

         });

    })

    .catch(erorr => console.log(error))
        document.getElementById("error").innerHTML = "El error es: " + (error)

};
