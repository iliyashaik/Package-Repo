const integerOnlyRegex = /^[0-9]*$/;

const isIntegerNumber = (number) => integerOnlyRegex.test(String(number));

module.exports = isIntegerNumber;
