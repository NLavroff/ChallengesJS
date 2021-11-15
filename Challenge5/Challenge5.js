'use strict';

let bill = [275, 40, 430];
let percentage;
let totalTips; 

function calculTips(bill, percentage) {
    let tips = bill * percentage;
    return tips;
}

for (let i = 0; i < bill.length; i++) {

    bill[i] >= 50 && bill[i] <= 300
    ? (percentage = 0.15, totalTips = calculTips(bill[i], percentage))
    : (percentage = 0.20, totalTips = calculTips (bill[i], percentage))
    console.log(`La note était de ${bill[i]}, le pourboire de ${totalTips} et la valeur totale était de ${(bill[i] + totalTips)}`);
}