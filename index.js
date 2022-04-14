const { customerDatabase, pharmacyDatabase, drugDatabase } = require('./database')
const { printOrderHistory , printOrder} = require('./lib/print-order-history')
const Customer = require('./models/customer')
const Drug = require('./models/drug')
const Pharmacy = require ('./models/pharmacy')

async function main () {
    try {
        const serkan = await customerDatabase.findBy('name','Serkan')
        const nese = await customerDatabase.findByName('Nese')
        const ersen = await customerDatabase.findByName('Ersen')
        const drugstore = await pharmacyDatabase.findByPharmacyName('DrugStore')
        const wallgreens = await pharmacyDatabase.findByPharmacyName('WallGreens')
        const aspirin = await drugDatabase.findByDrugName('Aspirin')
        const arvales = await drugDatabase.findByDrugName('Arvales')
        const augmentin = await drugDatabase.findByDrugName('Augmentin')
        const parol = await drugDatabase.findByDrugName('Parol')

        printOrderHistory(nese)
    }
    catch(e) {
        return console.log(e)
    }
}

main()


