const { orderService } = require("../services");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const orders = await orderService.load();

  res.render("orders", { orders });
});

router.get("/search", async (req, res) => {
  const pharmacy = req.query.pharmacyId;
  const drug = req.query.drugId;

  const query = {};

  if (pharmacy) query.pharmacyId = pharmacy;
  if (drug) query.drugId = drug;

  const orders = await orderService.query(query);

  res.render("orders", { orders });
});

module.exports = router;
