const Customer = require('./models/customer.js')
const Pharmacy = require('./models/pharmacy.js')
const Drug = require('./models/drug.js')
const { customerService, pharmacyService, drugService} = require('./services')
const { printOrderHistory } = require('./lib/print-order-history.js')

const serkan = Customer.create ({id: undefined, name: 'Serkan', phone: 5541111, email: 'serkan@example.com', age: 27})
const nese = Customer.create ({id: undefined, name: 'Nese', phone: 5441111, email: 'nese@example.com', age: 27})
const gulnaz = Customer.create ({id: undefined, name: 'Gulnaz', phone: 5051111, email: 'gulnaz@example.com', age: 59})
const aliosman = Customer.create ({id: undefined, name: 'Ali Osman', phone: 5541111, email: 'aliosman@example.com', age: 61})
const erkan = Customer.create ({id: undefined, name: 'Erkan', phone: 5321111, email: 'erkan@example.com', age: 34})

const wallgreens = Pharmacy.create({id: undefined, name: 'Wall Greens', phone: 212111, email: 'wall@greens.com', location: 'Etiler'})
const drugstore = Pharmacy.create({id: undefined, name: 'Drug Store', phone: 212112, email: 'drug@store.com', location: 'Mecidiyekoy'})

const aspirin = Drug.create({id: undefined, name: 'Aspirin'})
const arvales = Drug.create({id: undefined, name: 'Arvales'})
const augmentin = Drug.create({id: undefined, name: 'Augmentin'})
const parol = Drug.create({id: undefined, name: 'Parol'})

// wallgreens.addnewdrug(parol)
// drugstore.addnewdrug(aspirin)
// drugstore.addnewdrug(arvales)
// drugstore.addnewdrug(augmentin)

serkan.order(drugstore, aspirin)
serkan.order(wallgreens, parol)
nese.order(drugstore, augmentin)
nese.order(drugstore, parol)
gulnaz.order(drugstore, parol)

async function main() {
    try {
        await customerService.save([serkan, nese, gulnaz, aliosman, erkan])
        
        await pharmacyService.save([drugstore, wallgreens])

        await drugService.save([aspirin, arvales, augmentin, parol])

        const ersen = Customer.create ({id: undefined, name: 'Ersen', phone: 5341111, email: 'ersen@example.com', age: 27})
        ersen.order(drugstore, augmentin)
        await customerService.insert(ersen)
        
        printOrderHistory(gulnaz)
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