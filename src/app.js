import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

    let suits = ["♣", "♦", "♥", "♠"];
    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"]
    let colors = ["black", "red"];


    let randomSuits = Math.floor(Math.random() * suits.length)
    let randomNumbers = Math.floor(Math.random() * numbers.length)
    let randomColors = Math.floor(Math.random() * colors.length)


    document.getElementById("suit").innerText = suits[randomSuits];
    document.getElementById("suitFooter").innerText = suits[randomSuits];
    document.getElementById("number").innerText = numbers[randomNumbers];


    let changeColorSuit = document.getElementById("suit")
    let changeColorSuitFooter = document.getElementById("suitFooter")
    let changeColorNumber = document.getElementById("number")

    if (colors[randomColors] == "red") {
        changeColorSuit.style.color = "red"
        changeColorSuitFooter.style.color = "red"
        changeColorNumber.style.color = "red"

    } else {
        changeColorSuit.style.color = "black"
    changeColorSuitFooter.style.color = "black"
    changeColorNumber.style.color = "black"

}


    



};
