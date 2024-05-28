const userAge = parseInt(prompt("Enter your age: "));
if(userAge >= 1 && userAge <= 100){
   userAge >= 18 ? alert("You're an adult"): alert("You're just a baby")
} else {
    alert("input current age")
}