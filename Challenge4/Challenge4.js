"use strict";

let dolphinsScores = [
    [96, 108, 89],
    [97, 112, 101],
    [97, 112, 101]
];

let koalasScores = [
    [88, 91, 110],
    [109, 95, 123],
    [109, 95, 106]
];

//console.table(dolphinsScores);
//console.table(koalasScores);

function averageScore(array) {

    let reducer = (acc, curr) => acc + curr;
    let sum = array.reduce(reducer);
    let average = sum / array.length;

    return Math.round(average);
}

function compareScore(array1, array2) {
    for (let i = 0 ; i < array1.length ; i++) {
        if (averageScore(array1[i]) > 100 || averageScore(array2[i]) > 100) {
            if (averageScore(array1[i]) < averageScore(array2[i])) {
                console.log("Les Koalas ont gagné la partie " + (i + 1), " avec un score de " + averageScore(array1[i]));
            }
            else if (averageScore(array1[i]) > averageScore(array2[i])) {
                console.log("Les Dolphins ont gagné la partie "  + (i + 1), " avec un score de " + averageScore(array1[i]));
            }
            else if (averageScore(array1[i]) == averageScore(array2[i])) {
                console.log("Match nul pour la partie " + (i + 1));
            }
        } else {
                console.log("Il faut au moins 100 points pour gagner.")
            }
        }
    }

compareScore(dolphinsScores, koalasScores);