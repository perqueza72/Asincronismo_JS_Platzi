const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
  .then(data =>{
    
    let urlPrimerBichoso = API + data.results[0].id;
    
    console.group("Primer llamado");
    console.log("Numero de bichosos: ", data.info.count);
    console.log("Url del primer bichoso: ", urlPrimerBichoso);
    console.groupEnd();

    return fetchData(urlPrimerBichoso); 
    //Llama el .then luego de ser ejecutado
  })
  .then(primerBichoso => {
    console.log("Nombre del primer bichoso: ", primerBichoso.name);
    return fetchData(primerBichoso.origin.url);
    //El return llama el .then luego de ser ejecutado
  })
  .then(origenBichoso => {
    console.log("Proviene de: ", origenBichoso.dimension);
    //Termina la ejecución y no llama a nadie.
  })
  .catch(error =>{ //POr si un error ocurre.
    console.error(error);
  });


  console.log('Before');
  fetchData(API);
  console.log('After');