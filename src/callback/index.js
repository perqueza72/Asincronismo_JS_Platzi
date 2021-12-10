function suma(a,b){
    return a+b;
}

function calc(a,b,callback){
    return callback(a,b);
}

/**
 * 
 * @param {function} callback Es una función cualquiera que se manda como parametro (lambda).
 */
function date(callback, waitTime){
    //Llamo la función callback con el argumento new Date.
    callback(new Date);

    //Espero <waitTime> milisengudos hasta la ejecución de este trozo de codigo.
    setTimeout(function(){
        let date = new Date;
        callback(suma(10, 20)); //console.log(suma(10, 20));
        callback(date);
    }, waitTime)
}


console.log(calc(2,2,suma));


date(console.log, 300);

