const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = mongoose.connect(
  "mongodb+srv://Ranger7280:Aman_3013@cluster0.hrrw02a.mongodb.net/Customer-CLI"
);

const Customer = require("./Model/Customer");

//Add New Customer
const addCustomer = (customer) => {
  Customer.create(customer).then((customer) => {
    console.info("Customer added Successfully");
    // db.close();
    mongoose.connection.close();
  });
};

//Find Customer

const findCustomer = (name) => {
  const search = new RegExp(name, "i"); // we ue this to make the name case Insensitive such that if anyone write the name either in uppercase or lowercase does not matter how this name is written in  database.
  Customer.find({ $or: [{ firstname: name }, { lastname: name }] }).then(
    (customer) => {
      console.info(customer);
      console.info(`${customer.length} matches`);
      //   db.close();
      mongoose.connection.close();
    }
  );
  //$or is used to check for the first or last name either u can write
};

const updateCustomer = (_id, customer) => {
  Customer.updateOne({ _id }, customer).then(() => {
    console.info("Customer Updated");
    mongoose.connection.close();
  });
};

const deleteCustomer = (_id) => {
  Customer.deleteOne({ _id }).then((customer) => {
    console.info("Delete Customer");
    mongoose.connection.close();
  });
};

const listCustomers = () => {
  Customer.find().then((customers) => {
    console.info(customers);
    console.info(`${customers.length} customers`);
    mongoose.connection.close();
  });
};

module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  deleteCustomer,
  listCustomers,
};
