const { Router } = require('express');

const router = Router();
const { Episode } = require('../models/Episode');

router.get('/:episodeId', async (req, res) => {
	try {
		const { episodeId } = req.params;
		const episode = await Episode.find({ _id: episodeId });
		res.status(200).send({ message: 'Episode found.', data: episode });
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

router.get('/', async (req, res) => {
	try {
		const docs = await Episode.find();
		res.status(200).send({ message: 'Successfully retrieved episodes', data: docs });
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

router.post('/', async (req, res) => {
	try {
		const episode = new Episode({
			...req.body.episode
		});
		await episode.save();
		res.status(200).send({ message: 'Successfully saved episode', data: episode });
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

module.exports = router;
