"use strict";

let dolphinsScores = [
    [44, 23, 71],
    [85, 54, 41],
];

let koalasScores = [
    [65, 54, 49],
    [23, 34, 27],
];

const calcAverage = array => {
    let average = 0;
    let totalParties = 0;

    for (let i = 0 ; i < array.length ; i++){
        for (let j = 0; j < array.length; j++){
            average += array[i][j];
            totalParties++;
        }
    }
    
    return Math.round(average / totalParties);
}
console.log("La moyenne de l'équipe Dolphin est de : " + (calcAverage(dolphinsScores)));
console.log("La moyenne de l'équipe Koala est de : " + (calcAverage(koalasScores)));

const checkWinner = (team1, team2) => {
    if (calcAverage(koalasScores) >= (calcAverage(dolphinsScores) * 2)) {
        console.log("L’équipe Koala gagne ("  + (calcAverage(koalasScores)) + " vs " + (calcAverage(dolphinsScores) + ")"));
    }
   
    else if (calcAverage(dolphinsScores) >= (calcAverage(koalasScores) * 2))  {
        console.log("L’équipe Dolphin gagne ("  + (calcAverage(dolphinsScores)) + " vs " + (calcAverage(koalasScores) + ")"));
    } else {
        console.log("Il n'y a pas de gagnant :(");
    }
}

checkWinner(dolphinsScores, koalasScores);