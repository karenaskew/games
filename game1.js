
document.getElementsByClassName("rollButton")[0].addEventListener("click", rolldice);
function rolldice() {
    var diceFirst = document.getElementById("firstDice")
    var diceSecond = document.getElementById("secondDice")
   
    var randomNum1 = Math.floor(Math.random() * 6);
    var randomNum2 = Math.floor(Math.random() * 6);

    var diceRandom1 = "./gameElements/dice" +randomNum1+ ".svg";
    var diceRandom2 = "./gameElements/dice" +randomNum2+ ".svg";
    
    diceFirst.setAttribute("src", diceRandom1);
    diceSecond.setAttribute("src", diceRandom2);
};
