const { Router } = require('express')
const router = Router()
const { Show } = require('../models/Show')

router.get('/', async (req, res, next) => {
  try {
    const docs = await Show.find()
    res
      .status(200)
      .send({ message: 'Successfully retrieved shows.', data: docs })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

router.post('/', async (req, res, next) => {
  try {
    const show = new Show({
      ...req.body.show
    })
    await show.save()
    res.status(200).send({ message: 'Successfully saved show.', data: show })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

module.exports = router
