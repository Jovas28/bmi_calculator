const getBmiPerson = require('./src/functions/getBmi');

const main = async () => {
    const bmi = await getBmiPerson();
    console.log(bmi);
}

main();
