const app = require('../..')
const request = require('supertest')(app)

test('creates a new order', async () => {
    const customerToCreate = {
        name: 'Tester Customer',
        age: 21
    }

    const pharmacyToCreate = {
        name: 'Tester Pharmacy'
    }

    const drugToCreate = {
        name: 'Tester Drug'
    }

    const customerResponse = await request
        .post('/customers')
        .send(customerToCreate)
        .expect(200)
    
    const pharmacyResponse = await request
        .post('/pharmacies')
        .send(pharmacyToCreate)
        .expect(200)

    const drugResponse = await request
        .post('/drugs')
        .send(drugToCreate)
        .expect(200)

    const orderResponse = await request
        .post(`/customers/${customerResponse.body._id}/orders`)
        .send({
            customerId: customerResponse.body._id,
            pharmacyId: pharmacyResponse.body._id,
            drugId: drugResponse.body._id
        })
        .expect(200)

    const orderCreated = orderResponse.body

    expect(orderCreated).toMatchObject({
        customer: customerResponse.body,
        pharmacy: pharmacyResponse.body,
        drug: drugResponse.body
    })

})