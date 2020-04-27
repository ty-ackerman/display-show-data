// Temporarily held here
// Will be made into a Redux action

import axios from 'axios';

const imdb = {};

imdb.seasons = [
	{
		imDbId: 'tt8420184',
		title: 'The Last Dance',
		fullTitle: 'The Last Dance (TV Mini-Series 2020– )',
		type: 'TVSeries',
		year: '2020',
		episodes: [
			{
				id: 'tt8434580',
				seasonNumber: '1',
				episodeNumber: '1',
				title: 'Episode #1.1',
				image:
					'https://imdb-api.com/images/original/MV5BMGYzZWVmNTAtYWQ5My00OGVmLThmM2UtOTNhODZmYjI3MTgxXkEyXkFqcGdeQXVyMTA1MjI2MzE@._V1_Ratio1.7778_AL_.jpg',
				year: '2020',
				released: '19 Apr. 2020',
				plot:
					'The Chicago Bulls look for their third straight NBA Championship but the off-season is full of front office and player tension.',
				imDbRating: '9.3',
				imDbRatingCount: '810'
			},
			{
				id: 'tt8434582',
				seasonNumber: '1',
				episodeNumber: '2',
				title: 'Episode #1.2',
				image:
					'https://imdb-api.com/images/original/MV5BZjIzY2FjNGUtMDA1ZC00Y2FiLWFhZWYtNzhmYjUzYjMzYjk0XkEyXkFqcGdeQXVyMTA1MjI2MzE@._V1_Ratio1.7778_AL_.jpg',
				year: '2020',
				released: '19 Apr. 2020',
				plot:
					"A look at Scottie Pippen's arrival all the way to his injury and how it caused friction to begin the season.",
				imDbRating: '9.3',
				imDbRatingCount: '667'
			},
			{
				id: 'tt8434584',
				seasonNumber: '1',
				episodeNumber: '3',
				title: 'Episode #1.3',
				image: '',
				year: '2020',
				released: '26 Apr. 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434588',
				seasonNumber: '1',
				episodeNumber: '4',
				title: 'Episode #1.4',
				image: '',
				year: '2020',
				released: '26 Apr. 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434590',
				seasonNumber: '1',
				episodeNumber: '5',
				title: 'Episode #1.5',
				image: '',
				year: '2020',
				released: '3 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434592',
				seasonNumber: '1',
				episodeNumber: '6',
				title: 'Episode #1.6',
				image: '',
				year: '2020',
				released: '3 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434594',
				seasonNumber: '1',
				episodeNumber: '7',
				title: 'Episode #1.7',
				image: '',
				year: '2020',
				released: '10 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434596',
				seasonNumber: '1',
				episodeNumber: '8',
				title: 'Episode #1.8',
				image: '',
				year: '2020',
				released: '10 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434600',
				seasonNumber: '1',
				episodeNumber: '9',
				title: 'Episode #1.9',
				image: '',
				year: '2020',
				released: '17 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434604',
				seasonNumber: '1',
				episodeNumber: '10',
				title: 'Episode #1.10',
				image: '',
				year: '2020',
				released: '17 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			}
		],
		errorMessage: ''
	},
	{
		imDbId: 'tt8420184',
		title: 'The Last Dance',
		fullTitle: 'The Last Dance (TV Mini-Series 2020– )',
		type: 'TVSeries',
		year: '2020',
		episodes: [
			{
				id: 'tt8434580',
				seasonNumber: '1',
				episodeNumber: '1',
				title: 'Episode #1.1',
				image:
					'https://imdb-api.com/images/original/MV5BMGYzZWVmNTAtYWQ5My00OGVmLThmM2UtOTNhODZmYjI3MTgxXkEyXkFqcGdeQXVyMTA1MjI2MzE@._V1_Ratio1.7778_AL_.jpg',
				year: '2020',
				released: '19 Apr. 2020',
				plot:
					'The Chicago Bulls look for their third straight NBA Championship but the off-season is full of front office and player tension.',
				imDbRating: '9.3',
				imDbRatingCount: '810'
			},
			{
				id: 'tt8434582',
				seasonNumber: '1',
				episodeNumber: '2',
				title: 'Episode #1.2',
				image:
					'https://imdb-api.com/images/original/MV5BZjIzY2FjNGUtMDA1ZC00Y2FiLWFhZWYtNzhmYjUzYjMzYjk0XkEyXkFqcGdeQXVyMTA1MjI2MzE@._V1_Ratio1.7778_AL_.jpg',
				year: '2020',
				released: '19 Apr. 2020',
				plot:
					"A look at Scottie Pippen's arrival all the way to his injury and how it caused friction to begin the season.",
				imDbRating: '9.3',
				imDbRatingCount: '667'
			},
			{
				id: 'tt8434584',
				seasonNumber: '1',
				episodeNumber: '3',
				title: 'Episode #1.3',
				image: '',
				year: '2020',
				released: '26 Apr. 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434588',
				seasonNumber: '1',
				episodeNumber: '4',
				title: 'Episode #1.4',
				image: '',
				year: '2020',
				released: '26 Apr. 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434590',
				seasonNumber: '1',
				episodeNumber: '5',
				title: 'Episode #1.5',
				image: '',
				year: '2020',
				released: '3 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434592',
				seasonNumber: '1',
				episodeNumber: '6',
				title: 'Episode #1.6',
				image: '',
				year: '2020',
				released: '3 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434594',
				seasonNumber: '1',
				episodeNumber: '7',
				title: 'Episode #1.7',
				image: '',
				year: '2020',
				released: '10 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434596',
				seasonNumber: '1',
				episodeNumber: '8',
				title: 'Episode #1.8',
				image: '',
				year: '2020',
				released: '10 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434600',
				seasonNumber: '1',
				episodeNumber: '9',
				title: 'Episode #1.9',
				image: '',
				year: '2020',
				released: '17 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434604',
				seasonNumber: '1',
				episodeNumber: '10',
				title: 'Episode #1.10',
				image: '',
				year: '2020',
				released: '17 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			}
		],
		errorMessage: ''
	},
	{
		imDbId: 'tt8420184',
		title: 'The Last Dance',
		fullTitle: 'The Last Dance (TV Mini-Series 2020– )',
		type: 'TVSeries',
		year: '2020',
		episodes: [
			{
				id: 'tt8434580',
				seasonNumber: '1',
				episodeNumber: '1',
				title: 'Episode #1.1',
				image:
					'https://imdb-api.com/images/original/MV5BMGYzZWVmNTAtYWQ5My00OGVmLThmM2UtOTNhODZmYjI3MTgxXkEyXkFqcGdeQXVyMTA1MjI2MzE@._V1_Ratio1.7778_AL_.jpg',
				year: '2020',
				released: '19 Apr. 2020',
				plot:
					'The Chicago Bulls look for their third straight NBA Championship but the off-season is full of front office and player tension.',
				imDbRating: '9.3',
				imDbRatingCount: '810'
			},
			{
				id: 'tt8434582',
				seasonNumber: '1',
				episodeNumber: '2',
				title: 'Episode #1.2',
				image:
					'https://imdb-api.com/images/original/MV5BZjIzY2FjNGUtMDA1ZC00Y2FiLWFhZWYtNzhmYjUzYjMzYjk0XkEyXkFqcGdeQXVyMTA1MjI2MzE@._V1_Ratio1.7778_AL_.jpg',
				year: '2020',
				released: '19 Apr. 2020',
				plot:
					"A look at Scottie Pippen's arrival all the way to his injury and how it caused friction to begin the season.",
				imDbRating: '9.3',
				imDbRatingCount: '667'
			},
			{
				id: 'tt8434584',
				seasonNumber: '1',
				episodeNumber: '3',
				title: 'Episode #1.3',
				image: '',
				year: '2020',
				released: '26 Apr. 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434588',
				seasonNumber: '1',
				episodeNumber: '4',
				title: 'Episode #1.4',
				image: '',
				year: '2020',
				released: '26 Apr. 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434590',
				seasonNumber: '1',
				episodeNumber: '5',
				title: 'Episode #1.5',
				image: '',
				year: '2020',
				released: '3 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434592',
				seasonNumber: '1',
				episodeNumber: '6',
				title: 'Episode #1.6',
				image: '',
				year: '2020',
				released: '3 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434594',
				seasonNumber: '1',
				episodeNumber: '7',
				title: 'Episode #1.7',
				image: '',
				year: '2020',
				released: '10 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434596',
				seasonNumber: '1',
				episodeNumber: '8',
				title: 'Episode #1.8',
				image: '',
				year: '2020',
				released: '10 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434600',
				seasonNumber: '1',
				episodeNumber: '9',
				title: 'Episode #1.9',
				image: '',
				year: '2020',
				released: '17 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434604',
				seasonNumber: '1',
				episodeNumber: '10',
				title: 'Episode #1.10',
				image: '',
				year: '2020',
				released: '17 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			}
		],
		errorMessage: ''
	},
	{
		imDbId: 'tt8420184',
		title: 'The Last Dance',
		fullTitle: 'The Last Dance (TV Mini-Series 2020– )',
		type: 'TVSeries',
		year: '2020',
		episodes: [
			{
				id: 'tt8434580',
				seasonNumber: '1',
				episodeNumber: '1',
				title: 'Episode #1.1',
				image:
					'https://imdb-api.com/images/original/MV5BMGYzZWVmNTAtYWQ5My00OGVmLThmM2UtOTNhODZmYjI3MTgxXkEyXkFqcGdeQXVyMTA1MjI2MzE@._V1_Ratio1.7778_AL_.jpg',
				year: '2020',
				released: '19 Apr. 2020',
				plot:
					'The Chicago Bulls look for their third straight NBA Championship but the off-season is full of front office and player tension.',
				imDbRating: '9.3',
				imDbRatingCount: '810'
			},
			{
				id: 'tt8434582',
				seasonNumber: '1',
				episodeNumber: '2',
				title: 'Episode #1.2',
				image:
					'https://imdb-api.com/images/original/MV5BZjIzY2FjNGUtMDA1ZC00Y2FiLWFhZWYtNzhmYjUzYjMzYjk0XkEyXkFqcGdeQXVyMTA1MjI2MzE@._V1_Ratio1.7778_AL_.jpg',
				year: '2020',
				released: '19 Apr. 2020',
				plot:
					"A look at Scottie Pippen's arrival all the way to his injury and how it caused friction to begin the season.",
				imDbRating: '9.3',
				imDbRatingCount: '667'
			},
			{
				id: 'tt8434584',
				seasonNumber: '1',
				episodeNumber: '3',
				title: 'Episode #1.3',
				image: '',
				year: '2020',
				released: '26 Apr. 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434588',
				seasonNumber: '1',
				episodeNumber: '4',
				title: 'Episode #1.4',
				image: '',
				year: '2020',
				released: '26 Apr. 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434590',
				seasonNumber: '1',
				episodeNumber: '5',
				title: 'Episode #1.5',
				image: '',
				year: '2020',
				released: '3 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434592',
				seasonNumber: '1',
				episodeNumber: '6',
				title: 'Episode #1.6',
				image: '',
				year: '2020',
				released: '3 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434594',
				seasonNumber: '1',
				episodeNumber: '7',
				title: 'Episode #1.7',
				image: '',
				year: '2020',
				released: '10 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434596',
				seasonNumber: '1',
				episodeNumber: '8',
				title: 'Episode #1.8',
				image: '',
				year: '2020',
				released: '10 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434600',
				seasonNumber: '1',
				episodeNumber: '9',
				title: 'Episode #1.9',
				image: '',
				year: '2020',
				released: '17 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434604',
				seasonNumber: '1',
				episodeNumber: '10',
				title: 'Episode #1.10',
				image: '',
				year: '2020',
				released: '17 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			}
		],
		errorMessage: ''
	},
	{
		imDbId: 'tt8420184',
		title: 'The Last Dance',
		fullTitle: 'The Last Dance (TV Mini-Series 2020– )',
		type: 'TVSeries',
		year: '2020',
		episodes: [
			{
				id: 'tt8434580',
				seasonNumber: '1',
				episodeNumber: '1',
				title: 'Episode #1.1',
				image:
					'https://imdb-api.com/images/original/MV5BMGYzZWVmNTAtYWQ5My00OGVmLThmM2UtOTNhODZmYjI3MTgxXkEyXkFqcGdeQXVyMTA1MjI2MzE@._V1_Ratio1.7778_AL_.jpg',
				year: '2020',
				released: '19 Apr. 2020',
				plot:
					'The Chicago Bulls look for their third straight NBA Championship but the off-season is full of front office and player tension.',
				imDbRating: '9.3',
				imDbRatingCount: '810'
			},
			{
				id: 'tt8434582',
				seasonNumber: '1',
				episodeNumber: '2',
				title: 'Episode #1.2',
				image:
					'https://imdb-api.com/images/original/MV5BZjIzY2FjNGUtMDA1ZC00Y2FiLWFhZWYtNzhmYjUzYjMzYjk0XkEyXkFqcGdeQXVyMTA1MjI2MzE@._V1_Ratio1.7778_AL_.jpg',
				year: '2020',
				released: '19 Apr. 2020',
				plot:
					"A look at Scottie Pippen's arrival all the way to his injury and how it caused friction to begin the season.",
				imDbRating: '9.3',
				imDbRatingCount: '667'
			},
			{
				id: 'tt8434584',
				seasonNumber: '1',
				episodeNumber: '3',
				title: 'Episode #1.3',
				image: '',
				year: '2020',
				released: '26 Apr. 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434588',
				seasonNumber: '1',
				episodeNumber: '4',
				title: 'Episode #1.4',
				image: '',
				year: '2020',
				released: '26 Apr. 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434590',
				seasonNumber: '1',
				episodeNumber: '5',
				title: 'Episode #1.5',
				image: '',
				year: '2020',
				released: '3 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434592',
				seasonNumber: '1',
				episodeNumber: '6',
				title: 'Episode #1.6',
				image: '',
				year: '2020',
				released: '3 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434594',
				seasonNumber: '1',
				episodeNumber: '7',
				title: 'Episode #1.7',
				image: '',
				year: '2020',
				released: '10 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434596',
				seasonNumber: '1',
				episodeNumber: '8',
				title: 'Episode #1.8',
				image: '',
				year: '2020',
				released: '10 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434600',
				seasonNumber: '1',
				episodeNumber: '9',
				title: 'Episode #1.9',
				image: '',
				year: '2020',
				released: '17 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			},
			{
				id: 'tt8434604',
				seasonNumber: '1',
				episodeNumber: '10',
				title: 'Episode #1.10',
				image: '',
				year: '2020',
				released: '17 May 2020',
				plot: 'Know what this is about? Be the first one to add a plot.',
				imDbRating: '',
				imDbRatingCount: ''
			}
		],
		errorMessage: ''
	},
	{
		imDbId: 'tt8420184',
		title: 'The Last Dance',
		fullTitle: 'The Last Dance (TV Mini-Series 2020– )',
		type: 'TVSeries',
		year: '2020',
		episodes: [],
		errorMessage: '404 Error: SeasonNumber Not Founded'
	}
];

imdb.MONTH = 2592000000;
imdb.runningRegex = /^[0-9]{4}\S\D/g;

// STEP 1 - Gets the show titles + info from IMDB
imdb.getShow = async (q) => {
	const data = await axios.get(`https://imdb-api.com/en/API/SearchSeries/${process.env.REACT_APP_IMDB_API_KEY}/${q}`);
	return data.data.results;
};

// STEP 2 - User selects show -> Check MongoDB for series
imdb.queryDbForShow = async (imdbId) => await axios.get(`${process.env.REACT_APP_BACKEND_URL}/shows/imdb/${imdbId}`);

// STEP 3 -  Check to see if show is updated in MongoDB
imdb.isUpdated = (lastUpdated, fullTitle) => lastUpdated.parseint() < imdb.MONTH && !fullTitle.match(imdb.runningRegex);

// OPTION A - Show is not in MongoDB -> Step 2 = []
// OPTION B - Show is in MongoDB, but out of date -> second fuction false

// In both A + B -> execute the following:

imdb.updateShow = async (imdbId, _id) => {
	const { seasons, fullTitle } = await imdb.getSeasons(imdbId);
	const updatedShow = await imdb.addSeasons(_id, seasons, fullTitle);
	return updatedShow;
};

// Extra functions

imdb.getSeasons = async (imdbId, i = 1) => {
	const seasons = [];
	let season = (await imdb.getEpisodes(imdbId, i)).data;
	const { fullTitle } = season;
	while (season.episodes.length) {
		seasons.push(season);
		i++;
		season = (await imdb.getEpisodes(imdbId, i)).data;
	}

	return { seasons, fullTitle };
};

imdb.getEpisodes = async (imdbId, season) => {
	// gets a list of all episodes in a season
	const data = await axios.get(
		`https://imdb-api.com/en/API/SeasonEpisodes/${process.env.REACT_APP_IMDB_API_KEY}/${imdbId}/${season}`
	);
	return data.data.results;
};

imdb.addSeasons = async (_id, seasons, fullTitle) =>
	await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/shows/seasons`, {
		_id,
		seasons,
		fullTitle,
		lastUpdated: new Date().getTime()
	});

export default imdb;
