const {funcionMultiplicar} = require('./helpers/multiplicar')
const {argv}=require('./configurations/yargs')

console.clear();
//Forma obsoleta de tomar los argumentos de la consola
//const [,,arg3] = process.argv; toma de argumentos sin ayuda
//const base=arg3.split('=')[1];

funcionMultiplicar(argv.b,argv.l,argv.h)
.then(response=>console.log(response))
.catch(err=>console.log(err));