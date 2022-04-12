const { customerDatabase, pharmcyDatabase, drugDatabase } = require('./database')
const { printOrderHistory , printOrder} = require('./lib/print-order-history')

const serkan = customerDatabase.findBy('name','Serkan')
const nese = customerDatabase.findByName('Nese')
const aspirin = drugDatabase.findByDrugName('Aspirin')
const arvales = drugDatabase.findByDrugName('Arvales')
const augmentin = drugDatabase.findByDrugName('Augmentin')
const drugstore = pharmcyDatabase.findByPharmacyName('DrugStore')

printOrderHistory(serkan)

