'use strict';

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
let tip;

let calcTip = (bill) => {
    if (bill >= 50 && bill <= 300 ) {
        tip = bill * (15 / 100);
        return tip;
    }
    else {
        tip = bill * (20 / 100);
        return tip;
    } 
}

tips = bills.map(calcTip);

totals = bills.map((bill, index) => {
    return bill + tips[index];
});

console.log(bills);
console.log(tips);
console.log(totals);

let calcAverage = (array) => {
    let sum = array.reduce((acc, curr) => acc + curr);
    let average = sum / array.length;

    return Math.round(average);
}

console.log(calcAverage(totals));