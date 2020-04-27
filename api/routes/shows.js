const { Router } = require('express');

const router = Router();
const { Show } = require('../models/Show');

router.get('/imdb/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const show = await Show.find({
			id: id
		});
		res.status(200).send({ message: 'Successfully queried DB', data: show });
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

router.get('/title/:searchTitle', async (req, res) => {
	try {
		const { searchTitle } = req.params;
		const shows = await Show.find({
			title: { $regex: searchTitle, $options: 'i' }
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

router.get('/id/:_id', async (req, res) => {
	try {
		const { _id } = req.params;
		const doc = await Show.findById(_id);
		res.status(200).send({ message: 'Successfully found episode', data: doc });
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

router.get('/', async (req, res) => {
	try {
		const docs = await Show.find();
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

router.patch('/seasons', async (req, res) => {
	try {
		const { _id, seasons, fullTitle, lastUpdated } = req.body;
		const doc = await Show.findByIdAndUpdate(_id, { seasons, fullTitle, lastUpdated });
		res.status(200).send({ data: doc, message: 'Successfully saved seasons' });
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

module.exports = router;
