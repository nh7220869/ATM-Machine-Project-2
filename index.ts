#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 20000; // Dollars
let myPin =1098;

let pinAnswer = await inquirer.prompt([
  {
  name: "Pin",
  message: "Enter your pin?",
  type: "number",
  }
]);

if (pinAnswer.Pin === myPin) {
  console.log("\n\t CORRECT PIN CODE !!! \n");
  let amount = await inquirer.prompt([
    {
      name: "Operation",
      message: "Please Select Option",
      type: "list",
      choices: ["Withdraw", "Check Balance", "Fast Cash"],
    },
  ]);

if (amount.Operation === "Check Balance") {
    console.log(`"Your remaining balance is:" ${myBalance}`);
    } else if (amount.Operation === "Withdraw") {
      let amountAnswer = await inquirer.prompt([
      {
        name : "Withdraw",
        message: "Enter your amount",
        type : "number",
      },
    ]);
    let money=(myBalance)
    if(amountAnswer.Withdraw<=myBalance){
      console.log(`"Your remaining amount is" ${myBalance-=amountAnswer.Withdraw}`);
    } else if (amountAnswer.Withdraw>myBalance){
      console.log(`"Insufficient Amount! Your total balance is" ${money}`)
    }
  } else if(amount.Operation === "Fast Cash") {
    let fastcash = await inquirer.prompt([
      {
      name: "cashAnswer",
      message: "Choose amount you want to Fast Cash",
      type: "list",
      choices: [500, 2000, 5000, 10000 ]
    }
  ]);
  let balance= myBalance-= fastcash.cashAnswer;
  console.log(`"Your remaining amount is" ${balance}`);
  }
} else {
  console.log(`"\n\t YOU ENTER INVALID PIN \n"`);
}