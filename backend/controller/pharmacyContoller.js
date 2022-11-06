const Pharmacy = require("../models/pharmacy");

exports.registerNewPharmacy = async (req, res) => {
  try {
    const isPharmacy = await Pharmacy.findOne({ email: req.body.email });
    if (isPharmacy) {
      return res.status(409).json({ message: "This email already registered" });
    }
    const pharmacy = new Pharmacy({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    let data = await pharmacy.save();
    const token = await pharmacy.generateAuthToken(); // here it is calling the method that we created in the model
    res.status(201).json({ data, token });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};
exports.loginPharmacy = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const pharmacy = await Pharmacy.findByCredentials(email, password);
    if (!pharmacy) {
      return res
        .status(401)
        .json({ error: "Login failed! Check authentication credentials" });
    }
    const token = await pharmacy.generateAuthToken();
    res.status(201).json({ pharmacy, token });
  } catch (err) {
    res.status(400).json({ message: "Email or password is invalid" });
  }
};

exports.getPharmacyDetails = async (req, res) => {
  await res.json(req.userData);
};
