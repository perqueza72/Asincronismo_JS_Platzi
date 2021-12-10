const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) =>{
  try{
    const data = await fetchData(url_api);
    const character = await fetchData(`${url_api}${data.results[0].id}`);
    const origen = await fetchData(character.origin.url);

    console.log(data, character.name, origen.dimension);
  }catch (error){
    console.error(error);
  }
}

anotherFunction(API);