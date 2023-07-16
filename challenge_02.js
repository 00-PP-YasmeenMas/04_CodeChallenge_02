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

let firstName = prompt("Bitte deinen Name eingeben!");
let age = parseInt(prompt("Bitte dein Alter eingeben!"));

/*********** Variante 1  ****************/

if (age > 0 && age < 6) {
  console.log(firstName + " trinkt Milch.");
} else if (age > 5 && age < 13) {
  console.log(firstName + " trinkt Saft.");
} else if (age > 12 && age < 18) {
  console.log(firstName + " trinkt Cole.");
} else {
  console.log(firstName + " trinkt Wein.");
}
