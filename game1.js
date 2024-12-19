

var diceFirst = Math.floor(Math.random() * 6);
var diceRandom1 = "./gameElements/dice" +diceFirst+ ".svg";
document.getElementById("firstDice").setAttribute("src", diceRandom1);