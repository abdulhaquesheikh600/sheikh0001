"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// initialize user balance and pin code
let myBalance = 900000;
let myPin = 786;
// PRINT WELCOME MESSAGE
console.log("Welcome to A.Haque -ATM Machine");
let pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
]);
// Check if the entered PIN is correct
if (pinAnswer.pin === myPin) {
    // if PIN is correct,display account balance
    console.log("Pin is correct, Login Successfully!");
    // console.log(`Your Current Account Balance is ${myBalance}`);
    let operationAns = await inquirer_1.default.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an Operation",
            choices: ["Withdraw Amount", "Check Your Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer_1.default.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdrawn successfully`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check Balance") {
    }
    console.log(`Your Current Account Balance is ${myBalance}`);
}
else {
    console.log("Incorrect PIN. Please try again.");
}
