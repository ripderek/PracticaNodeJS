//se crea el objeto
const Math  = {};

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

//para exportar, es decir, que se puedan usar en otros archivos.
//cuando se exporte la funcion divide se usar la funcion divide de este archivo.
/*exports.divide = divide;
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
*/


//tambien se puede exportar como objeto.
Math.add=add;
Math.substract= substract;
Math.multiply = multiply;
Math.divide = divide;
//exportar como objeto
module.exports = Math;

function Hello(name){
    console.log('Hola',name);
}
//module.exports = Hello;
// module.exports es la mas tipica xq no solo puede exportar un objeto sino tambien funciones
