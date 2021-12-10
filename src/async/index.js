const functionAsync = (conditional) =>{
  return new Promise((resolve, reject) =>{
    if(conditional){
      setTimeout(() =>{
        resolve('Do something'),3000}
      );
    }
    else{
      reject(new Error('Error'));
    }
  })
}


const doSomething = async () => {
  const something = await functionAsync(true);
  console.log(something);
}


console.log('Before');
doSomething();
console.log('After');


const anotherFunction = async () =>{
  try{
    const something = await functionAsync(true);
    console.log(something);
  }catch(error){
    console.error(error);
  }
}

console.log('Before');
anotherFunction();
console.log('After');