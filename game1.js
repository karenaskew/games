
document.getElementById("button1").addEventListener("click", rollSet1);
function rollSet1() {
    var diceFirst = document.getElementById("firstDice");
    var diceSecond = document.getElementById("secondDice");
   
    var randomNum1 = Math.floor(Math.random() * 6)+1;
    var randomNum2 = Math.floor(Math.random() * 6)+1;

    var diceRandom1 = "./gameElements/dice" +randomNum1+ ".png";
    var diceRandom2 = "./gameElements/dice" +randomNum2+ ".png";
    
    diceFirst.setAttribute("src", diceRandom1);
    diceFirst.setAttribute("alt", randomNum1);
    diceSecond.setAttribute("src", diceRandom2);
    diceSecond.setAttribute("alt", randomNum2);

    // sum dice
    var diceSum = randomNum1 + randomNum2;
    document.getElementById("set1Sum").innerText = String(diceSum);

    var gameDictionary = {};
    gameDictionary["2"] = "You";
    gameDictionary["3"] = "Me";
    gameDictionary["4"] = "Girls";
    gameDictionary["5"] = "5Alive";
    gameDictionary["6"] = "Guys";
    gameDictionary["7"] = "Heaven";
    gameDictionary["8"] = "War";
    gameDictionary["9"] = "Rhyme";
    gameDictionary["10"] = "Categories";
    gameDictionary["11"] = "Truth";
    gameDictionary["12"] = "Higher/Lower";
   
    var gameNum = String(diceSum);
    var gameName = gameDictionary.["2"];
    document.getElementById("set1Game").innerText = gameName;

};

    

document.getElementById("button2").addEventListener("click", rollSet2);
function rollSet2() {
    var diceThird = document.getElementById("thirdDice");
    
    var randomNum3 = Math.floor(Math.random() * 6)+1;

    var diceRandom3 = "./gameElements/dice" +randomNum3+ "color.png";
    
    diceThird.setAttribute("src", diceRandom3);
    diceThird.setAttribute("alt", randomNum3);

    let forfeitDictionary = {};
    forfeitDictionary["1"] = "Shot";
    forfeitDictionary["2"] = "2 drinks";
    forfeitDictionary["3"] = "3 drinks";
    forfeitDictionary["4"] = "Half Shot";
    forfeitDictionary["5"] = "SAFE - Reroll for the other player's forfeit";
    forfeitDictionary["6"] = "Shot";

    var diceNum = String(randomNum3);
    var forfeitName = forfeitDictionary.diceNum[0];
    document.getElementById("set1Game").innerText = forfeitName;
};

