module.exports = class Person{
    constructor({ name, weight, height} ){
        this.name = name,
        this.weight = weight,
        this.height = height
        this.bmi = this.weight / Math.pow( this.height/100, 2 );
    }
}