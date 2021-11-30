"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//EXERCICE 1:

//Tâche1:
let players1 = game.players[0];
let players2 = game.players[1];
//console.log(players1, players2);

//Tâche2:
let gk = players1[0];
//console.log(gk);

let fieldPlayers = players1.slice(1);
//console.log(fieldPlayers);

//Tâche3:
let allPlayers = game.players[0].concat(game.players[1]);
//console.log(allPlayers);

//Tâche4:
let players1Final = players1.concat("Thiago", "Coutinho", "Perisic");
//console.log(players1Final);

//Tâche5:
let team1 = game.odds.team1;
let draw = game.odds.x;
let team2 = game.odds.team2;
//console.log(team1, draw, team2);

//Tâche6:
function printGoals() {
  let randomNumberOfPlayers =
    Object.keys(allPlayers)[Math.floor(Math.random() * allPlayers.length)];
  allPlayers.length = randomNumberOfPlayers;
  //console.log(randomNumberOfPlayers);
  console.log(
    `Liste de joueurs selon un nombre aléatoire : ${randomNumberOfPlayers} : ${allPlayers}`
  );

  let totalScores = game.score.split(":").map(function (score) {
    return parseInt(score, 10);
  });
  totalScores = totalScores.reduce((acc, curr) => acc + curr);
  console.log(`Nombre total de buts : ${totalScores}`);
}

printGoals();

//Tâche7:
if (game.odds.team1 < game.odds.team2) {
  console.log(
    `L'équipe ayant le plus de chance de gagner est l'équipe ${game.team1}.`
  );
} else if (game.odds.team1 > game.odds.team2) {
  console.log(
    `L'équipe ayant le plus de chance de gagner est l'équipe ${game.team2}.`
  );
} else {
  console.log(
    `Egalité entre l'équipe ${game.team1} et l'équipe ${game.team2}.`
  );
}

//EXERCICE 2:
//Tâche1:
for (let i = 0; i < game.scored.length; i++) {
  console.log(`But ${i + 1} : ${game.scored[i]}`);
}

//Tâche2 :
let odds = Object.values(game.odds);

for (let j = 0; j < odds.length; j++) {
  let averageOdds = odds.reduce((acc, curr) => acc + curr) / odds.length;
  console.log(averageOdds);
}

//Tâche3:
console.log(`Probalité de victoire pour ${game.team1} : ${odds[0]}`);
console.log(`Probalité d'égalité : ${odds[1]}`);
console.log(`Probalité de victoire pour ${game.team2} : ${odds[2]}`);

//Tâche4:
let scorers = game.scored.reduce(function (acc, curr) {
  return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
}, {});
//console.log(scorers)

//EXERCICE 3:

const gameEvents = [
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 Yellow card"],
];

//Tâche1:
let extractArrayColumn = (array, eventIndex) => array.map(element => element[eventIndex]);
let temp = extractArrayColumn(gameEvents, 1);

let events = temp.filter((element, index, array) => { 
    return array.indexOf(element) === index;
});

console.log(events)

//Tâche2:
gameEvents.splice(4,1);
console.log(gameEvents);

// Tâche3:
let eventsAverage = 90 / gameEvents.length;
console.log(`Un évènement est apparu en moyenne toutes les ${eventsAverage.toFixed()} minutes.`);

//Tâche4:

for (let i = 0; i < gameEvents.length; i++) {
    if (gameEvents[i][0] < 45) {
        console.log(`[PREMIÈRE MOITIÉ]${gameEvents[i]}`);
    }
    else {
        console.log(`[DEUXIÈME MOITIÉ]${gameEvents[i]}`);
    }
}
