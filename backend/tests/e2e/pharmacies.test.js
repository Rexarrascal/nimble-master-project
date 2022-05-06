const flatted = require('flatted');
const app = require('../..');
const request = require('supertest')(app);

test('create a new pharmacy', async () => {
    const pharmacyToCreate = {
        name: 'Test pharmacy',
    }

    const response = await request
        .post('/pharmacies')
        .send(pharmacyToCreate)
        .expect(200)

    const pharmacyCreated = response.body

    expect(pharmacyCreated).toMatchObject(pharmacyToCreate)
    expect(pharmacyCreated.customers).toEqual([])
})

test('get for all pharmacies', async () => {
    const pharmacyToCreate = {
        name: 'Test pharmacy 1',
    }

    await request
     .post('/pharmacies')
     .send(pharmacyToCreate)
     .expect(200)

    const responseForGet = await request
     .get(`/pharmacies`)
     .expect(200)

    expect(JSON.stringify(responseForGet))
    .toContain(`${pharmacyToCreate.name}`)
})

test('get an existing pharmacy', async () => {
    const pharmacyToCreate = {
        name: 'Test-pharmacy',
    }

    const responseForPost = await request
     .post('/pharmacies')
     .send(pharmacyToCreate)
     .expect(200)

    const responseForGet = await request
     .get(`/pharmacies/${responseForPost.body._id}`)
     .expect(200)

    expect(flatted.stringify(responseForGet)).toContain(`${pharmacyToCreate.name}`)
})

test('delete a pharmacy', async () => {
    const pharmacyToCreate = {
        name: 'Test pharmacy',
    }

    const responseForPost = await request
     .post('/pharmacies')
     .send(pharmacyToCreate)
     .expect(200)

    const responseForDelete = await request
     .delete(`/pharmacies/${responseForPost.body._id}`)
     .expect(200)

    const deletedPharmacy = responseForDelete.body

    expect(deletedPharmacy).toEqual({})
})

test('patch a pharmacy', async () => {
    const pharmacyToCreate = {
        name: 'Patch pharmacy',
    }

    const responseForPost = await request
        .post('/pharmacies')
        .send(pharmacyToCreate)
        .expect(200)

    const pharmacyNewName = {
        name: 'Pharmacy with newer name'
    }
    const responseForPatch = await request
        .patch(`/pharmacies/${responseForPost.body._id}`)
        .send(pharmacyNewName)
        expect(200)

    expect(flatted.stringify(responseForPatch))
    .toContain(`The name of the pharmacy changed to ${pharmacyNewName.name}`)
})