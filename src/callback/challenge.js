let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';


function fetchData(url_api, callback){
  let xhttp = new XMLHttpRequest(); //Creo una instancia de sabrá dios que es esta cosa.
  xhttp.open('GET', url_api, true); //open(peticion, url donde esté la información API, activar o desactivar el asincronismo)
  xhttp.onreadystatechange = (event) => {
    /*
    xhttp.readyState posee 5 estados;
    0: No está inicializado xhttp.open();
    1: Loading;
    2: Loading finished.
    3: Descarga de información.
    4: Completed.
    */
    if(xhttp.readyState === 4){
      if(xhttp.status === 200){ //Revisa si la información llegó adecuadamente.
        let infoApi = JSON.parse(xhttp.responseText); //Información que se recibe desde la "instancia" http en formato texto.
        callback(null, infoApi); //function(mensaje de error, información).
      }else{
        const error = new Error('Error al acceder a' + url_api); //Envia mensaje de error.
        return callback(error, null);
      }
    }
  }
  //Se envia la petición
  xhttp.send();
}


console.group("Errores");
fetchData(API, (error1, data1) => {
  if(error1) return console.error(error1);
  fetchData(API + data1.results[0].id, (error2, data2) => {
    if(error2) return console.error(error2);
    fetchData(data2.origin.url, (error3, data3) =>{
      if(error3) return console.error(error3);
      console.groupEnd();
      console.group("Informacion");
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
      
      
    })
  })
});