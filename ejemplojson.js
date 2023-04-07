const obj = {};
const datos = {
    nombres:{
        nombre1: "Raul ",
        nombre2: "Steven",
        apellido1: "Coello ",
        apellido2: "Castillo"
    },
    Direccion: "Playa Grande",
    Observaciones: {
        obs1: "Ecuador",
        obs2: "Quevedo",
        obs3: "Los Rios"
    }
};

module 
function mostrar_datos(){
    console.log(datos);
};
obj.mostrar_datos= mostrar_datos;
module.exports = obj;