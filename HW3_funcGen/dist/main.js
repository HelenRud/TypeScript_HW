// function* userInput() {
//     yield "Apple";
//     yield "Orange";
//     yield 15;
//     yield "Cherry";
// }
// let iterable1 = userInput();
// for (const item of iterable1) { 
//     if ((typeof item) == 'number'){
//     console.log('User input number: ' + item);
//     break;}
//     else console.log(item);
// }
class MyStringCollection {
    constructor(userInput) {
        this.values = [];
        this.values = userInput;
    }
    *getValues() {
        for (let i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
}
let userInput = () => (prompt('Input some strings, (comma separated). If your input is number, you will see Error in console.')).split(', ');
let inputNumber = userInput.length;
let iterable2 = new MyStringCollection(userInput()).getValues();
function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0); }
for (const item of iterable2) {
    if (isNumber(item)) {
        console.log('Error');
        break;
    }
    else
        console.log(item);
}
//# sourceMappingURL=main.js.map