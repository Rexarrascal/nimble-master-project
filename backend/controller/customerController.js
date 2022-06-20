const Customer = require("../models/customer");

exports.registerNewCustomer = async (req, res) => {
  try {
    const isCustomer = await Customer.findOne( {email:req.body.email} );
    if (isCustomer) {
      return res.status(409).json({message:'This email already registered'});
    }
    const customer = new Customer({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

     let data = await customer.save();
     const token = await customer.generateAuthToken(); // here it is calling the method that we created in the model
     res.status(201).json({ data, token });
   } catch (err) {
     res.status(400).json({ err: err });
   }
};

exports.loginCustomer = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const customer = await Customer.findByCredentials(email, password);
    if (!customer) {
      return res.status(401).json({ error: "Login failed! Check authentication credentials" });
    }
    const token = await customer.generateAuthToken();
    res.status(201).json({ customer, token });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.getCustomerDetails = async (req, res) => {
  await res.json(req.userData);
};