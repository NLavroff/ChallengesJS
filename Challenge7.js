'use strict';

let tip;
function calcTip(bill) {
        if (bill >= 50 && bill <= 300 ) {
            tip = bill * (15 / 100);
            return tip;
        }
        else {
            tip = bill * (20 / 100);
            return tip;
        } 
    }

console.log(calcTip(100));

let bills = [125, 555, 44];
let tips = bills.map(calcTip);

console.log(tips);

let totals = bills.map((bill, index) => {
    return bill + tips[index];
});

console.log(totals);