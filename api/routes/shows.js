const { Router } = require('express')
const router = Router()
const { Show } = require('../models/Show')

router.get('/:search_title', async (req, res, next) => {
  try {
    const { search_title } = req.params
    const shows = await Show.find({
      title: { $regex: search_title, $options: 'i' }
    })
    if (shows.length) {
      res.status(200).send({ message: 'Successfully queried DB', data: shows })
    } else {
      res.status(404).send({ message: 'No results found', data: shows })
    }
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

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
