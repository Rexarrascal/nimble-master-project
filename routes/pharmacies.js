const { pharmacyService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
    const pharmacies = await pharmacyService.load()

    res.render('pharmacies', { pharmacies })
})

router.post('/', async (req, res) => {
    const pharmacy = await pharmacyService.insert(req.body)
    res.send(pharmacy)
})

router.delete('/:pharmacyId', async (req, res) => {
    await pharmacyService.removeBy('id', req.params.pharmacyId)

    res.send(`${pharmacyId} deleted`)
})

router.get('/:pharmacyId', async (req, res) => {
    const pharmacy = await pharmacyService.find(req.params.pharmacyId)
    if (!pharmacy) return res.status(404).send('Cannot find pharmacy')
    res.render('pharmacy', { pharmacy })
})

router.patch('/:pharmacyId', async (req, res) => {
    const { pharmacyId } = req.params
    const { name } = req.body
  
    await pharmaciesService.update(pharmacyId, { name })
  })

module.exports = router