// const prompt=require("prompt-sync") ({sigint:true});
let priceInput= prompt("Enter the price of item");
if(isNaN(priceInput)){
    alert("Invalid input! Please enter the number for the price ");
}
let taxPrice= prompt("Enter the price of tax");
if(isNaN(taxPrice)){
    alert("Invalid input! Please enter the number for the price ");
}
if(!isNaN(priceInput)&&!isNaN(taxPrice)){
    totalCost = priceInput*(1+taxPrice);
    alert("The total cost of your item is:"+totalCost.toFixed(2));
}