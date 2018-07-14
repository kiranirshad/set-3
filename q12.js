const appleCost = 10; 
const mangoCost = 15; 
const bananaCost = 8; 

const aliCash = 100; 
let totalCost;

let noOfApples = 5; 
let noOfMangoes = 3; 
let noOfBananas = 7; 

totalCost = noOfApples*appleCost + noOfMangoes*mangoCost + noOfBananas*bananaCost;

if (totalCost > 100 ) {
    console.log("Sorry, you do not have enough money");
} else {
    console.log("Hurray! You have enough money to buy all fruits");
}