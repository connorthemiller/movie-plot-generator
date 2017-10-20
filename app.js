const plotPieces = require('./plot-pieces.json');

function rand(limit) {
  return Math.floor(Math.random() * (limit));
}

function generatePlot() {
    var characterPick = plotPieces.characters[rand(plotPieces.characters.length)];
    var backstoryPick = plotPieces.backstories[rand(plotPieces.backstories.length)];
    var conflictPick = plotPieces.conflicts[rand(plotPieces.conflicts.length)];
    var settingPick = plotPieces.settings[rand(plotPieces.settings.length)];
    var finishedPlot = characterPick + ", " + backstoryPick + ", " + conflictPick + " " + settingPick + ".";
    return finishedPlot;
}

for (var i=0; i<15; i++){
console.log(generatePlot());
}