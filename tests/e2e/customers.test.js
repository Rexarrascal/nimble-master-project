const flatted = require('flatted');
const app = require('../..');
const request = require('supertest')(app);

test('create a new customer', async () => {
    const customerToCreate = {
        name: 'Test customer',
        age: 26
    }

    const response = await request
        .post('/customers')
        .send(customerToCreate)
        .expect(200)

    const customerCreated = response.body

    expect(customerCreated).toMatchObject(customerToCreate)
    expect(customerCreated.orders).toEqual([])
})

test('eror while creating a new customer', async () => {
    const customerToCreate = {
        name: 'Test customer',
        age: 17
    }

    const response = await request
        .post('/customers')
        .send(customerToCreate)
        .expect(500)

    const customerCreated = response.body

    expect(customerCreated).toStrictEqual({})
})

test('get for all customers', async () => {
    const customerToCreate = {
        name: 'Test customer 1',
        age: 27
    }

    const customerToCreate2 = {
        name: 'Test customer 2',
        age: 28
    }

    await request
     .post('/customers')
     .send(customerToCreate)
     .expect(200)

    await request
     .post('/customers')
     .send(customerToCreate2)
     .expect(200)

    const responseForGet = await request
     .get(`/customers`)
     .expect(200)

    expect(flatted.stringify(responseForGet)).toContain(
        'Test customer 1', 27, 'Test customer 2', 28)
})

test('get an existing customer', async () => {
    const customerToCreate = {
        name: 'Test customer for get request',
        age: 25
    }

    const responseForPost = await request
     .post('/customers')
     .send(customerToCreate)
     .expect(200)

    const responseForGet = await request
     .get(`/customers/${responseForPost.body._id}`)
     .expect(200)

    expect(flatted.stringify(responseForGet)).toContain(
        `${customerToCreate.name}`, `${customerToCreate.age}`)
})

test('delete a customer', async () => {
    const customerToCreate = {
        name: 'Test customer',
        age: 30
    }

    const responseForPost = await request
     .post('/customers')
     .send(customerToCreate)
     .expect(200)

    const responseForDelete = await request
     .delete(`/customers/${responseForPost.body._id}`)
     .expect(200)

    const deletedCustomer = responseForDelete.body

    expect(deletedCustomer).toEqual({})
})

test('patch a customer', async () => {
    const customerToCreate = {
        name: 'Test customer',
        age: 30
    }

    const responseForPost = await request
        .post('/customers')
        .send(customerToCreate)
        .expect(200)

    const customerNewName = {
        name: 'New test customer'
    }
    const responseForPatch = await request
        .patch(`/customers/${responseForPost.body._id}`)
        .send(customerNewName)
        expect(200)

    expect(flatted.stringify(responseForPatch))
    .toContain(`The name of the customer changed to ${customerNewName.name}`)
})
