function sumaTodo (){
    let suma=0;
    for(i=0; i<arguments.length; i++){
        suma+=arguments[i]
    }
    return suma
}

let resultado= sumaTodo(2,3,4,4,5,20);
console.log('el resultado de la suma de todos los numero es= '+resultado);