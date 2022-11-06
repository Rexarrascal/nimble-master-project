const mongoose = require("mongoose");

const DrugSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  sellers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pharmacy",
      autopopulate: { maxDepth: 2 },
    },
  ],
});

DrugSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Drug", DrugSchema);
