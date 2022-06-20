const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const CustomerSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Please, enter your name"], minlength: 2},
    email: {type:String, required: [true, "Please, enter your name"],},
    password: {type: String, required: [true, "Please, enter your name"],},
    tokens: [{token: {type: String, required: true}}],
    location: {type: String},
    phone: Number,
    date: {type:Date, default: Date.now},
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        autopopulate: { maxDepth: 2 }
    }]
})

//The method will hash the password before saving the customer model

CustomerSchema.pre("save", async function(next) {
    const customer = this;
    if (customer.isModified("password")) {
      customer.password = await bcrypt.hash(customer.password, 8);
    }
    next();
  });


//The method generates an auth token for the customer

CustomerSchema.methods.generateAuthToken = async function() {
    const customer = this;
    const token = jwt.sign({ _id: customer._id, name: customer.name, email: customer.email },
    "secret");
    customer.tokens = customer.tokens.concat({ token });
    await customer.save();
    return token;
    };

//The method search for a customer by email and password.

CustomerSchema.statics.findByCredentials = async (email, password) => {
    const customer = await Customer.findOne({ email });
    if (!customer) {
      throw new Error({ error: "Invalid login details" });
    }
    const isPasswordMatch = await bcrypt.compare(password, customer.password);
    if (!isPasswordMatch) {
      throw new Error({ error: "Invalid login details" });
    }
    return customer;
  };

CustomerSchema.plugin(require('mongoose-autopopulate'))
const Customer = mongoose.model('Customer', CustomerSchema)
module.exports = Customer