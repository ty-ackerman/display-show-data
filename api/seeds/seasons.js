const { Season } = require('../models/Season');
const episodes = require('./episodes');

const seasons = [];

const season3 = new Season({
	seasonNumber: 3,
	episodes
});

seasons.push(season3);

module.exports = seasons;
