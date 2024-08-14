#!/usr/bin/env /usr/bin/node

const { Command } = require("commander");
const { prompt } = require("inquirer");
const program = new Command();

const {
  addCustomer,
  findCustomer,
  deleteCustomer,
  listCustomers,
  updateCustomer,
} = require("./index");

program.version("1.0.0").description("Client management System");

const questions = [
  {
    type: "input",
    name: "firstname",
    message: "Enter first name",
  },
  {
    type: "input",
    name: "lastname",
    message: "Enter last name",
  },
  {
    type: "input",
    name: "phone",
    message: "Enter phone number",
  },
  {
    type: "input",
    name: "email",
    message: "Enter email ",
  },
];
//Add Customer
program
  .command("add")
  .alias("a")
  .description("Add a customer")
  .action(() => {
    prompt(questions).then((answer) => {
      addCustomer(answer);
    });
  });
//Find Customer
program
  .command("find <name>")
  .alias("f")
  .description("Find a Customer")
  .action((name) => {
    findCustomer(name);
  });
//update Customer
program
  .command("update <_id>")
  .alias("u")
  .description("update a customer")
  .action((_id) => {
    prompt(questions).then((answer) => {
      updateCustomer(_id, answer);
    });
  });
//delete Customer
program
  .command("delete <_id>")
  .alias("d")
  .description("Customer deleted")
  .action((_id) => {
    deleteCustomer(_id);
  });

//List customer
program
  .command("list")
  .alias("l")
  .description("list a customer")
  .action(() => {
    listCustomers();
  });

program.parse(process.argv);
