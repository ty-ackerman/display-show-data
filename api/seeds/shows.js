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
	fullTitle: 'Community (TV Series 2009–2015)',
	seasons: seasons
});

const show2 = new Show({
	id: 'tt3152638',
	resultType: 'Title',
	image: 'https://imdb-api.com/images/original/nopicture.jpg',
	title: 'Community: Study Break',
	description: '(2010) (TV Mini-Series)'
});
const show3 = new Show({
	id: 'tt2951126',
	resultType: 'Title',
	image: 'https://imdb-api.com/images/original/nopicture.jpg',
	title: 'Community: Office Hours',
	description: '(2010) (TV Mini-Series)'
});
const show4 = new Show({
	id: 'tt8355268',
	resultType: 'Title',
	image:
		'https://imdb-api.com/images/original/MV5BOTE2MDQ5NGEtYjZkYS00ODJmLWJhOTItYjJhMWM5NjY2NThlXkEyXkFqcGdeQXVyODU2MDk0ODY@._V1_Ratio1.0000_AL_.jpg',
	title: 'The Community',
	description: '(2017) (TV Series)'
});

shows.push(show1, show2, show3, show4);

module.exports = shows;
