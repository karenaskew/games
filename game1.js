
document.getElementById("button1").addEventListener("click", rollSet1);
function rollSet1() {
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

document.getElementById("button2").addEventListener("click", rollSet1);
function rollSet2() {
    var diceThird = document.getElementById("thirdDice")
    
    var randomNum3 = Math.floor(Math.random() * 6)+1;

    var diceRandom3 = "./gameElements/dice" +randomNum3+ "color.png";
    
    diceThird.setAttribute("src", diceRandom3);
    diceThird.setAttribute("alt", randomNum3);

};
