const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const PharmacySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please, enter your name"],
    minlength: 2,
  },
  email: { type: String, required: [true, "Please, enter your email"] },
  password: { type: String, required: [true, "Please, enter your password"] },
  tokens: [{ token: { type: String, required: true } }],
  location: { type: String },
  phone: Number,
  date: { type: Date, default: Date.now },
  customers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      autopopulate: { maxDepth: 1 },
    },
  ],
  druglist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Drug",
      autopopulate: { maxDepth: 1 },
    },
  ],
});

//The method will hash the password before saving the user model

PharmacySchema.pre("save", async function (next) {
  const pharmacy = this;
  if (pharmacy.isModified("password")) {
    pharmacy.password = await bcrypt.hash(pharmacy.password, 8);
  }
  next();
});

//The method generates an auth token for the user

PharmacySchema.methods.generateAuthToken = async function () {
  const pharmacy = this;
  const token = jwt.sign(
    { _id: pharmacy._id, name: pharmacy.name, email: pharmacy.email },
    "secret"
  );
  pharmacy.tokens = pharmacy.tokens.concat({ token });
  await pharmacy.save();
  return token;
};

//The method search for a user by email and password.

PharmacySchema.statics.findByCredentials = async (email, password) => {
  const pharmacy = await Pharmacy.findOne({ email });
  if (!pharmacy) {
    throw new Error({ error: "Invalid login details" });
  }
  const isPasswordMatch = await bcrypt.compare(password, pharmacy.password);
  if (!isPasswordMatch) {
    throw new Error({ error: "Invalid login details" });
  }
  return pharmacy;
};

PharmacySchema.plugin(require("mongoose-autopopulate"));
const Pharmacy = mongoose.model("Pharmacy", PharmacySchema);
module.exports = Pharmacy;
