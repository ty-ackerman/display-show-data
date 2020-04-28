const mongoose = require('mongoose');

// db-name should match that in constants.js
const { DB_URI } = require('../utils/constants');

// Import all models
const { Show } = require('../models/Show');

// Import created seeds
const shows = require('./shows');

// Delete existing seeds
const truncateDatabaseShow = async () => Promise.all([ Show.deleteMany() ]);

// Make seeds
const makeSeeds = async () => {
	// Connect to db
	await mongoose.connect(DB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});

	// Clear dbs
	await truncateDatabaseShow();

	// Iterate through array of seeds and save
	await Promise.all(shows.map((show) => show.save()));

	// This is commented out, but if the seed isn't an array, save like this:
	// await todos.save();

	// Disconnect from db
	mongoose.connection.close();
};

makeSeeds();
