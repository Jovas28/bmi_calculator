const Person = require('../models/person');
const argv = require('../config/yargs');
require('colors')

module.exports = getBmiPerson = async () => {
    try{
        
        const person = new Person( { name: argv.n, weight: argv.w, height: argv.h } );
        const resp = person.bmi > 25
        ? 'Overweight'.red
        : person.bmi < 18 
        ? 'Underweight'.yellow
        : 'Normal weight'.green;

        return `${resp}, ${person.name.toString().blue }${"'s BMI is".blue} ${person.bmi.toFixed(2).toString().black.bgCyan}`;

    }catch(err){
        throw 'ERROR!!! '+err;
    }
}