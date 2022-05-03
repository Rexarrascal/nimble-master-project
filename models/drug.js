const mongoose = require('mongoose')

const DrugSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    sellers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pharmacy',
        autopopulate: { maxDepth: 2 }
    }]
})

DrugSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Drug', DrugSchema)

// const uuid = require('uuid')

// class Drug {
//     constructor(id = uuid.v4(), name) {
//         this.id = id
//         this.name = name
        
//     }

//     static create({id, name}) {
//         return new Drug(id, name)
//       }
// }

// module.exports = Drug