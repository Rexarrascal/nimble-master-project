const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  pharmacy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pharmacy",
    autopopulate: { maxDepth: 1 },
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    autopopulate: { maxDepth: 1 },
  },
  drug: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Drug",
    autopopulate: { maxDepth: 1 },
  },
});

OrderSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Order", OrderSchema);
