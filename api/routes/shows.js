const { Router } = require('express');

const router = Router();
const { Show } = require('../models/Show');

router.get('/title/:searchTitle', async (req, res) => {
	try {
		const { searchTitle } = req.params;
		const shows = await Show.find({
			title: { $regex: searchTitle, $options: 'i' }
		}).populate({
			path: 'seasons',
			populate: {
				path: 'episodes',
				model: 'Episode'
			}
		});
		if (shows.length) {
			res.status(200).send({ message: 'Successfully queried DB', data: shows });
		} else {
			res.status(404).send({ message: 'No results found', data: shows });
		}
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

router.get('/', async (req, res) => {
	try {
		const docs = await Show.find().populate({
			path: 'seasons',
			populate: {
				path: 'episodes',
				model: 'Episode'
			}
		});
		res.status(200).send({ message: 'Successfully retrieved shows.', data: docs });
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

router.post('/', async (req, res) => {
	try {
		const show = new Show({
			...req.body.show
		});
		await show.save();
		res.status(200).send({ message: 'Successfully saved show.', data: show });
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

module.exports = router;
