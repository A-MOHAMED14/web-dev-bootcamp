const maths = require('./maths');

const operation = process.argv[2];

const numOne = parseInt(process.argv[3]);
const numTwo = parseInt(process.argv[4]);

switch (operation) {
    case 'sum':
        const result = maths.sum(numOne, numTwo);
        console.log(result);
        break;
    case 'difference':
        console.log(maths.difference(numOne, numTwo));
        break;
    case 'product':
        console.log(maths.product(numOne, numTwo));
        break;
    case 'quotient':
        console.log(maths.quotient(numOne, numTwo));
        break;
    default:
        console.log('Check your maths!');
    }