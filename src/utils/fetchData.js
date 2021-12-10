let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;



function fetchData(url_api){
	
	return new Promise((resolve, reject) =>{
		let xhttp = new XMLHttpRequest(); 
		xhttp.open('GET', url_api, true); 
		xhttp.onreadystatechange = (() => {
			
			if(xhttp.readyState === 4){
				if(xhttp.status === 200){
					let infoApi = JSON.parse(xhttp.responseText); 
					resolve(infoApi);
				}else{
					const error = new Error('Error al acceder a' + url_api);
					reject(error); 
				}
			}
			
			//Se envia la petición
		});
		//Se cierra onreadystatechange y ahí si se envía.
		
		xhttp.send();
	});
	
}

module.exports = fetchData;