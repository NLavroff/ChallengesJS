'use strict';

let bernard = {
    surname: "Bernard",
    weight: 78,
    height: 1.69,
    bmi: "",

    calcBMI : function() {
        this.bmi = this.weight / (this.height * this.height);
        return this.bmi.toFixed();
    }
};

let marcel = {
    surname: "Marcel",
    weight: 92,
    height: 1.95,
    bmi: "",

    calcBMI : function() {
        this.bmi = this.weight / (this.height * this.height);
        return this.bmi.toFixed();
    }
};

console.log(`L’IMC de Bernard (${bernard.calcBMI()}) est plus élevé que celui de Marcel (${marcel.calcBMI()}).`);