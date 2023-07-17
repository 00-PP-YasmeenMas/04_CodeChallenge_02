/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

let firstName = prompt("Bitte deinen Namen eingeben!");
// let age = parseInt(prompt("Bitte dein Alter eingeben!"));
let age = +prompt("Bitte dein Alter eingeben!");

/*********** Variante 1  ****************/

// if (age > 0 && age < 6) {
//   console.log(firstName + " trinkt Milch.");
// } else if (age > 5 && age < 13) {
//   console.log(firstName + " trinkt Saft.");
// } else if (age > 12 && age < 18) {
//   console.log(firstName + " trinkt Cole.");
// } else {
//   console.log(firstName + " trinkt Wein.");
// }

/*********** Variante 2  ****************/
// const cond = true;
// switch (cond) {
//   case age > 0 && age < 6:
//     console.log(firstName + " trinkt Milch.");
//     break;
//   case 5 < age && age < 13:
//     console.log(firstName + " trinkt Saft.");
//     break;
//   case 12 < age && age < 18:
//     console.log(firstName + " trinkt Cole.");
//     break;
//   case age >= 18:
//     console.log(firstName + " trinkt Wein.");
//     break;
//   default:
//     console.log(firstName + " trinkt etwas anderes!");
//     break;
// }

/*********** Variante 3  ****************/
let drink;
if (!isNaN(age) && age >= 0){
    if (age <= 5){
        drink = "Milch";
    }
    else if (age <= 12){
        drink = "Saft";
    }
    else if (age <= 17){
        drink = "Cole";
    }
    else {
        drink = "Wein";
    }
    console.log(`${firstName} trinkt ${drink}`);
}
else {
    console.log("Tee");
}