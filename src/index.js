module.exports = function reverse (n) {
    let moduleNumber = Math.abs(n);
    let arrNumber = [...moduleNumber.toString()];
    let reverse = arrNumber.reverse().join('');
    let result = parseInt(reverse);
    return result;
}
