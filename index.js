// importando las operaciones de operaciones.js
import {registrar,consultaCitas} from './operaciones.js';


const args = process.argv.slice(2);
const [operacion,nombre,edad,animal,color,enfermedad] = args;

if(operacion === 'registrar'){
    registrar(nombre,edad,animal,color,enfermedad);
}else if(operacion === 'consultaCitas'){
    consultaCitas();
}else{
    console.log("La operación ingresada no existe");
}