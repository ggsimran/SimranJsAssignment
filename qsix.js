const fatherAge = parseInt(prompt("Enter age of your father: "));
const motherAge = parseTnt(prompt("Enter age of your mother: "));
const userAge = parseInt(prompt('Enter your age: '));

const averageAge = (fatherAge + motherAge + userAge)/ 3;
document.write("Average age of family is = "+averageAge);

if(fatherAge > 50 && motherAge > 50){
    alert("you should spend more time with your family");
} else if( fatherAge > 50){
    alert ("you should spend more time with your father");
} else if(motherAge > 50){
    alert("you should spend more time with your mother");
}