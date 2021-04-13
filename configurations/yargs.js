const argv = require('yargs')
                            .option('b',{
                                    alias:'base',
                                    demandOption:'true',
                                    type:'number',
                                    describe:'base de la multiplicacion'
                                })
                            .option('l',{
                                alias:'listar',
                                type:'boolean',
                                describe:'Bandera para listar o no la tabla',
                                default:false
                            })
                            .option('h',{
                                alias:'hasta',
                                type:'number',
                                describe:'Límite de la tabla',
                                default:10
                            })
                            .check((argv,options)=>{
                                if (isNaN(argv.b)) {
                                    throw 'La base debe ser numérica'
                                }
                                if(isNaN(argv.h)){
                                    throw'El límite debe ser numérico'
                                }
                                return true;
                            })
                            .argv;


module.exports ={
    argv
}