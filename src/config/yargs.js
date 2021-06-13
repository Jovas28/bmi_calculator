
const argv = require('yargs')
    .options('n', {
        alias: "name", 
        demandOption : false, 
        type : "string",
        describe : "Name of the person", 
        default : "Person"
    })
    .options(
        'w', {
            alias: 'weight', 
            demandOption: true, 
            type: "number", 
            describe: "Weight of the person"
        }
    )
    .options('h', {
        alias: 'height', 
        demandOption: true, 
        type: "number", 
        describe: "Height of the person"
    })
    .check( (argv, options) => {
        if( !isNaN(argv.n) ) throw "The name must be a string not a number";
        else if( isNaN(argv.w) ) throw "The weight must be a number";
        else if( isNaN(argv.h) ) throw "The height must be a number";

        return true;
    } )
    .locale('en')
    .argv;

module.exports = argv;