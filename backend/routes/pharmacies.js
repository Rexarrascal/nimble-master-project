const { pharmacyService } = require('../services')
const bcrypt = require('bcrypt')

const router = require('express').Router()

router.get('/', async (req, res) => {
    res.send(await pharmacyService.load())
})

router.post('/', async (req, res, next) => {
    try {
        const userData = ({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        })
        const pharmacy = await pharmacyService.insert(userData)
        res.send(pharmacy)
        } catch(e) {
        next(e)
        }
})

router.post('/:pharmacyId/druglist', async (req, res) => {
    const { pharmacyId } = req.params
    const { drugId } = req.body

    await pharmacyService.addDrug(pharmacyId, drugId)

    res.send(`${drugId.name} added to ${pharmacyId.name}'s inventory`)
})

router.delete('/:pharmacyId', async (req, res) => {
    await pharmacyService.removeBy('id', req.params.pharmacyId)

    res.send(`Pharmacy Deleted`)
})

router.get('/:pharmacyId', async (req, res) => {
    const pharmacy = await pharmacyService.find(req.params.pharmacyId)
    if (!pharmacy) return res.status(404).send('Cannot find pharmacy')
    res.send(pharmacy)
})

router.patch('/:pharmacyId', async (req, res) => {
    const { pharmacyId } = req.params
    const { name } = req.body
  
    await pharmacyService.update(pharmacyId, { name })

    res.send(`The name of the pharmacy changed to ${name}`)
  })

module.exports = router