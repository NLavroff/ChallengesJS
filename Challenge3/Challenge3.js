"use strict";

class Person {
  constructor(surname, weight, height) {
    this.surname = surname;
    this.weight = weight;
    this.height = height;
  }
}

let bernard = new Person("Bernard", 78, 1.69);
let marcel = new Person("Marcel", 88, 1.95);

let bernardHigherIMC = true;

function imcCalculation(weight, height) {
  let imc = weight / (height * height);
  return parseFloat(Number.parseFloat(imc).toFixed(1));
}

let imcBernard = imcCalculation(bernard.weight, bernard.height);
let imcMarcel = imcCalculation(marcel.weight, marcel.height);

console.log(imcBernard);
console.log(imcMarcel);

bernardHigherIMC ? imcBernard > imcMarcel : false;

imcBernard > imcMarcel
  ? console.log(`Bernard a un IMC (${imcBernard}) plus élevé que Marcel.`)
  : console.log(`Marcel a un IMC (${imcMarcel}) plus élevé que Bernard.`);

let people = [bernard, marcel];

people.forEach((element) => {
  let imc = imcCalculation(element.weight, element.height);
  switch (true) {
    case imc < 20:
      console.log(`${element.surname} : Insuffisance pondérale`);
      break;
    case imc >= 20 && imc < 25:
      console.log(`${element.surname} : Poids normal`);
      break;
    case imc >= 25 && imc < 30:
      console.log(`${element.surname} : Surpoids`);
      break;
    case imc >= 30 && imc < 40:
      console.log(`${element.surname} : Obésité`);
      break;
    case imc > 40:
      console.log(`${element.surname} : Obésité importante`);
      break;
  }
});
