const Customer = require('./models/customer.js')
const Pharmacy = require('./models/pharmacy.js')
const Drug = require('./models/drug.js')

const serkan = new Customer(undefined, 'Serkan', 5541111, 'serkan@oz.com', 27 )
const nese = new Customer(undefined, 'Nese', 5541112, 'nese@ozdemir.com', 27 )
customerDatabase.save([serkan, nese])

const drugstore = new Pharmacy(undefined, 'DrugStore', 212111, 'drug@store.com', 'Mecidiyekoy')
pharmcyDatabase.save([drugstore])

const aspirin = new Drug(undefined, 'Aspirin')
const arvales = new Drug(undefined, 'Arvales')
const augmentin = new Drug(undefined, 'Augmentin')
drugDatabase.save([aspirin, arvales, augmentin])

drugstore.addnewdrug(aspirin)
drugstore.addnewdrug(arvales)
drugstore.addnewdrug(augmentin)
pharmcyDatabase.update(drugstore)

serkan.order(drugstore, aspirin)
serkan.order(drugstore, arvales)
nese.order(drugstore, augmentin)
customerDatabase.update(serkan)
customerDatabase.update(nese)
pharmcyDatabase.update(drugstore)

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