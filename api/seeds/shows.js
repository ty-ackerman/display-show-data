const { Show } = require('../models/Show');
const seasons = require('./seasons');

const shows = [];

const show1 = new Show({
	id: 'tt1439629',
	resultType: 'Title',
	image:
		'https://imdb-api.com/images/original/MV5BNDQ5NDZiYjktZmFmMy00MjAxLTk1MDktOGZjYTY5YTE1ODdmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_Ratio0.7273_AL_.jpg',
	title: 'Community',
	description: '(2009) (TV Series)',
	fullTitle: 'Community (TV Series 2009–2015)'
});

shows.push(show1);

module.exports = shows;
