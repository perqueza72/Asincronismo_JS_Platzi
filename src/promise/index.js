const somethingWillHappen = (working) => {
    return new Promise((resolve, reject) => {
        if(working){
            resolve('OK');
        }
        else{
            reject('Nel');
        }
    })
}



const somethingWillHappen2 = (working) =>{
    console.log("Start to eject");
    return new Promise((resolve, reject) =>{
        if(working){
            setTimeout(() =>{
                resolve('True');
            }, 2000)
        }else{
            const error = new Error('Falló');
            console.error(error);
            }
        })
}


Promise.all([somethingWillHappen(true), somethingWillHappen2(true)])
.then(response =>{
    console.log('Array de resultados', response);
}).catch(error =>{
    console.error('Error cosmico', error);
})