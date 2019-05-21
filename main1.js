alert("we are good");
// var answer = confirm("please yes or no?");
// var number = prompt("enter number?");
// console.log("answer: "+answer);
// console.log("number: "+number);
// var drinks="Coke";
// console.log("Coke:" + drinks.charAt(0));
var drinkList = [
    "coffee: $4",
    "Cappuccino: $5",
    "Avocado shake: $10"];
document.onclick= function(event){
    var text1= document.getElementById("str1").value;
    console.log("text:" + text1);
    document.querySelector("#showhere").innerHTML = text1;
}
