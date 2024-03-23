#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the oprator to perfoam opration",
        type: "list",
        name: "oprator",
        choices: ["Addition", "Subtraction", "Multiplcaition", "Division"],
    },
]);
// conditional statement
if (answer.oprator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.oprator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.oprator === "Multiplcaition") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.oprator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select a valid oprator");
}
