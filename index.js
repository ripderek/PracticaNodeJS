//Funciones en node js usando el archivo index.
/*
function add(x1,x2){
    return x1+x2;
}
function substract(x1,x2){
    return x1-x2;
}
function multiply(x1,x2){
    return x1*x2;
}
function divide(x1,x2){
    if(x2==0)
    {
        console.log('No se puede dividir por 0');
    }
    else {
        return x1/x2;
    }
}
console.log(divide(1,0));
*/
//Para no tener varias funciones dentro de un archivo ya que se puede complicar 
//se deben crear los modulos.
//Todas estas funciones se fueron al archivo metematica.js

//importar el archivo 
//const math = require('./matematica');
//console.log(math.divide(4,2));
//llamar la funcion del archivo
/*console.log(math.divide(1,0));
console.log(math.add(1,0));
console.log(math.substract(1,0));
console.log(math.multiply(1,0));
console.log(math.divide(2,2));*/
//los modulos son archivos que nos permiten dividir una aplicacion
// en multiples partes para poder mantenerla por separado.


//para ver lo que contiene un modulo
//console.log(math);

const datos1 = require('./ejemplojson');

datos1.mostrar_datos();