//importacion para tener acceso a los archivos del equipo
const fs = require('fs');
const colors = require('colors')

const funcionMultiplicar=(base,listar,limite)=>{
    
    return new Promise((resolve,reject)=>{

        let salidaConsola=''; 
        let salidaArchivo='';

        for (let index = 1; index <= limite; index++) {
            salidaConsola += `${colors.blue(base)} X ${index} = ${base*index} \n`;
            salidaArchivo += `${base} X ${index} = ${base*index} \n`;
        }
        
        fs.writeFile(`./salida/tabla-${base}.txt`,salidaArchivo,(err)=>{
            if(err)reject(err);
            if (listar) {
                console.log('========================='.green);
                console.log(colors.green( `    Tabla del ${colors.blue(base)}`));
                console.log('========================='.green);
                console.log(salidaConsola);
            }
            resolve(`archivo tabla-${base}.txt creado!`.rainbow)
        });
    });
};

module.exports ={
    funcionMultiplicar
}

