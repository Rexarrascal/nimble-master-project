const { drugService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
    const drugs = await drugService.load()

    res.render('drugs', { drugs })
})

router.post('/', async (req, res) => {
    const drug = await drugService.insert(req.body)
    res.send(drug)
})

router.delete('/:drugId', async (req, res) => {
    await drugService.removeBy('id', req.params.drugId)

    res.send('OK')
})

router.get('/:drugId', async (req, res) => {
    const drug = await drugService.find(req.params.drugId)
    
    if (!drug) return res.status(404).send('Cannot find drug')
    res.render('drug', { drug })
})

router.patch('/:drugId', async (req, res) => {
    const { drugId } = req.params
    const { name } = req.body
  
    await pharmaciesService.update(drugId, { name })
  })

module.exports = router