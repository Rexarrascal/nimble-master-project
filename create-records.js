const Customer = require('./models/customer.js')
const Pharmacy = require('./models/pharmacy.js')
const Drug = require('./models/drug.js')
const customerDatabase = require('./database/customer-database.js')
const { printOrderHistory } = require('./lib/print-order-history.js')

const serkan = Customer.create ({id: undefined, name: 'Serkan', phone: 5541111, email: 'serkan@example.com', age: 27})
const nese = Customer.create ({id: undefined, name: 'Nese', phone: 5441111, email: 'nese@example.com', age: 27})

const wallgreens = Pharmacy.create({id: undefined, name: 'WallGreens', phone: 212111, email: 'wall@greens.com', location: 'Etiler'})
const drugstore = Pharmacy.create({id: undefined, name: 'DrugStore', phone: 212112, email: 'drug@store.com', location: 'Mecidiyekoy'})

const aspirin = Drug.create({id: undefined, name: 'Aspirin'})
const arvales = Drug.create({id: undefined, name: 'Arvales'})
const augmentin = Drug.create({id: undefined, name: 'Augmentin'})
const parol = Drug.create({id: undefined, name: 'Parol'})

wallgreens.addnewdrug(parol)
drugstore.addnewdrug(aspirin)
drugstore.addnewdrug(arvales)
drugstore.addnewdrug(augmentin)

serkan.order(drugstore, aspirin)
serkan.order(wallgreens, parol)
nese.order(drugstore, augmentin)
nese.order(drugstore, parol)

async function main() {
    try {
        await customerDatabase.save([serkan, nese])
        
        await pharmacyDatabase.save([drugstore, wallgreens])

        await drugDatabase.save([aspirin, arvales, augmentin, parol])

        const ersen = Customer.create ({id: undefined, name: 'Ersen', phone: 5341111, email: 'ersen@example.com', age: 27})
        ersen.order(drugstore, augmentin)
        await customerDatabase.insert(ersen)
        
        printOrderHistory(nese)
    }
    catch (e) {
        return console.log(e)
    }
}

main()

// class OrderCart {

// }

// class Location {

// }

// class Druglist {
    
// }

// class Wall {

// }

// class Status {

// }