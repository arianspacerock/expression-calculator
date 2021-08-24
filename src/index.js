function expressionCalculator(express) {
    let x = 0;
    express = express.split(' ').join('');

    for (let i = 0; i < express.length; i++) {
        if (express[i] === '(') x++;
        if (express[i] === ')') x--;
    }
    if (x !== 0) throw new Error("ExpressionError: Brackets must be paired");
    if (express.includes('/0')) throw new Error("TypeError: Division by zero.");
    return new Function(`return ${express}`)();
}
module.exports = {
    expressionCalculator,
};