
document.getElementsByClassName("rollButton")[0].addEventListener("click", rolldice);
function rolldice() {
    var diceFirst = document.getElementById("firstDice")
    var diceSecond = document.getElementById("secondDice")
   
    var randomNum1 = Math.floor(Math.random() * 6)+1;
    var randomNum2 = Math.floor(Math.random() * 6)+1;

    var diceRandom1 = "./gameElements/dice" +randomNum1+ ".png";
    var diceRandom2 = "./gameElements/dice" +randomNum2+ ".png";
    
    diceFirst.setAttribute("src", diceRandom1);
    diceFirst.setAttribute("alt", randomNum1);
    diceSecond.setAttribute("src", diceRandom2);
    diceSecond.setAttribute("alt", randomNum2);
};
