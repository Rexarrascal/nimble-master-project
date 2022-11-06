const { customerService, pharmacyService, drugService } = require("./services");
const { printOrderHistory } = require("./lib/print-order-history");

async function main() {
  try {
    const serkan = await customerService.findBy("name", "Serkan");
    const nese = await customerService.findByName("Nese");
    const ersen = await customerService.findByName("Ersen");
    const drugstore = await pharmacyService.findByPharmacyName("DrugStore");
    const wallgreens = await pharmacyService.findByPharmacyName("WallGreens");
    const aspirin = await drugService.findByDrugName("Aspirin");
    const arvales = await drugService.findByDrugName("Arvales");
    const augmentin = await drugService.findByDrugName("Augmentin");
    const parol = await drugService.findByDrugName("Parol");

    printOrderHistory(nese);
  } catch (e) {
    return console.log(e);
  }
}

main();
