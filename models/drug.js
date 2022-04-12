const uuid = require('uuid')

class Drug {
    constructor(id = uuid.v4(), name) {
        this.id = id
        this.name = name
        
    }

    static create({id, name}) {
        return new Drug(id, name)
      }
}

module.exports = Drug