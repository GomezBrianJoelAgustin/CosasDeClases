const pjs = [];
const maxId = 0;
const connected = navigator.onLine; //Variable para comprobar el estado de wifi.

function buscarMayor() {

  const pjId = document.getElementById("pjId").value;
  const btn = document.getElementById("btn");

  pjs.push(pjId);

  console.log(pjs);

  if (pjs.length === 9) {

    alert("Ya se ingresaron 10 numeros");
    btn.disabled = true;

    var maxId = Math.max(...pjs);

    console.log("Array = " + pjs);
    console.log("La Id mayor es = " + maxId);

    if (!!connected) { //Verifica la conexion de wifi gracias a la variable de connected definida anteriormente.
      personajes(maxId); //Si hay wifi pasa el dato a la proxima funcion y continua todo normal :)
    } else {
      alert("¡No hay conexión a internet!"); //Si no hay wifi mostramos con una alerta.
      error.innerHTML = `
      <h1> No estas conectado a wifi </h1>
      `
    }
  }
}

function personajes(maxId) {

    fetch(`https://rickandmortyapi.com/api/character/${maxId}`)
      .then(res => res.json())
      .then(dataRym => {

        fetch(`https://randomuser.me/api/`)
          .then(respuesta => respuesta.json())
          .then(dataRu => {

            console.log(dataRym);
            console.log(dataRu);

            if (dataRym.species === "Human") {
              const containerPj = document.getElementById("containerPj");
              containerPj.innerHTML = `
                <div id="containerPhotoHuman">
                  <img src="${dataRym.image}" alt="">
                  <img id="ruImg" src="${dataRu.results[0].picture.large}" alt="">
                </div>
              `;
            } else {
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
              `;
            }
          })
      })
}