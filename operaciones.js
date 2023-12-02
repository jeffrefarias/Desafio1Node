
import {readFile, writeFile} from 'node:fs/promises'

const leerCitas = async () => {
    try{
        return JSON.parse(await readFile('citas.json','utf-8'));
        
    }catch{
        await writeFile('citas.json',JSON.stringify([]));
        return [];
    }
}

const registrar = async (nombre,edad,animal,color,enfermedad) =>{
    const citas = await leerCitas();
    citas.push({nombre,edad,animal,color,enfermedad})
    await writeFile('citas.json',JSON.stringify(citas));
    console.log("La cita ha sido registrada con éxito");
    console.log(citas);
}

const consultaCitas = async () =>{
    const citas = await leerCitas();

    if(citas.length == 0){
        console.log("No hay citas registradas en el sistema.");
        citas.forEach(e => {
            console.log(`Nombre: ${e.nombre} ++ Edad: ${e.edad} ++ Tipo: ${e.animal} ++ Color: ${e.color} ++ Enfermedad: ${e.enfermedad} \n`);
        });
    }
}
    

export {registrar}