#! /usr/bin/env node
// SHABANG
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstnumber" },
    { message: "Enter second number", type: "number", name: "secondnumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// console.log(answer)
// Conditional Statement
if (answer.Operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.Operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.Operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.Operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("Please enter valid operator");
}
