const { Router } = require('express');

const router = Router();
const { Season } = require('../models/Season');

router.get('/:seasonId', async (req, res) => {
	try {
		const { seasonId } = req.params;
		const season = await Season.find({ _id: seasonId }).populate('episodes');
		res.status(200).send({ message: 'Season found.', data: season });
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

router.get('/', async (req, res) => {
	try {
		const docs = await Season.find().populate('episodes');
		res.status(200).send({ message: 'Successfully retrieved seasons', data: docs });
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

module.exports = router;
