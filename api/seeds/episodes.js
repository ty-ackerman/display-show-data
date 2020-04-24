const { Episode } = require('../models/Episode');

const episodes = [];

const episode1 = new Episode({
	id: 'tt1986325',
	seasonNumber: '3',
	episodeNumber: '1',
	title: 'Biology 101',
	image:
		'https://imdb-api.com/Images/original/MV5BMjAxNTAzNjA3M15BMl5BanBnXkFtZTcwOTkyNzc2Ng@@._V1_Ratio1.7778_AL_.jpg',
	year: '2011',
	released: '22 Sep. 2011',
	plot:
		"Jeff's plan to keep Pierce out of the Study Group backfires when he gets kicked out instead, Abed copes with bad news about Cougar Town, and Dean Pelton's authority is challenged by another Greendale dean.",
	imDbRating: '8.1',
	imDbRatingCount: '1886'
});

const episode2 = new Episode({
	id: 'tt2060962',
	seasonNumber: '3',
	episodeNumber: '2',
	title: 'Geography of Global Conflict',
	image:
		'https://imdb-api.com/Images/original/MV5BOTM4ODUyMTY0NV5BMl5BanBnXkFtZTcwNjYxMjU4Ng@@._V1_Ratio1.7778_AL_.jpg',
	year: '2011',
	released: '29 Sep. 2011',
	plot:
		"When another over-achieving student steals Annie's idea for a Model U.N. club, the Study Group comes to her rescue. Meanwhile, new security cop Chang tries to stop Britta's last-ditch efforts to create a campus disturbance.",
	imDbRating: '8.2',
	imDbRatingCount: '1822'
});

const episode3 = new Episode({
	id: 'tt2063144',
	seasonNumber: '3',
	episodeNumber: '3',
	title: 'Competitive Ecology',
	image:
		'https://imdb-api.com/Images/original/MV5BNzU3MGZlODctNThiZS00NjYzLWE2MTctOGJiOWYwZGEwZDc3XkEyXkFqcGdeQXVyNDQ2NTIyMQ@@._V1_Ratio1.7778_AL_.jpg',
	year: '2011',
	released: '6 Oct. 2011',
	plot:
		'Chaos ensues when the Study Group tries to divide itself up into biology lab partners, and Chang appoints himself security "detective," and tries to solve a mystery that is only in his head.',
	imDbRating: '8.1',
	imDbRatingCount: '1809'
});

const episode4 = new Episode({
	id: 'tt2060963',
	seasonNumber: '3',
	episodeNumber: '4',
	title: 'Remedial Chaos Theory',
	image:
		'https://imdb-api.com/Images/original/MV5BNTg0MzI5MjkzOV5BMl5BanBnXkFtZTcwMzA4NDg4Ng@@._V1_Ratio1.7778_AL_.jpg',
	year: '2011',
	released: '13 Oct. 2011',
	plot:
		"At Abed and Troy's housewarming party, Jeff decides to let the decision on who gets the pizza rest on the roll of the dice, leaving Abed to contemplate six alternate realities.",
	imDbRating: '9.8',
	imDbRatingCount: '5962'
});

const episode5 = new Episode({
	id: 'tt2063145',
	seasonNumber: '3',
	episodeNumber: '5',
	title: 'Horror Fiction in Seven Spooky Steps',
	image:
		'https://imdb-api.com/Images/original/MV5BMjIyMjg5Nzk3MV5BMl5BanBnXkFtZTcwMTYwMDc5Ng@@._V1_Ratio1.7778_AL_.jpg',
	year: '2011',
	released: '27 Oct. 2011',
	plot:
		'During her pre-Halloween party, Britta gets everyone to tell a spooky story so that she can find out which member of the study group scored out as a psychopath on their psychology profiles.',
	imDbRating: '8.8',
	imDbRatingCount: '2109'
});

const episode6 = new Episode({
	id: 'tt2049724',
	seasonNumber: '3',
	episodeNumber: '6',
	title: 'Advanced Gay',
	image:
		'https://imdb-api.com/Images/original/MV5BMjI5NDI2ODY0Ml5BMl5BanBnXkFtZTcwMjA2NzAwNw@@._V1_Ratio1.7778_AL_.jpg',
	year: '2011',
	released: '3 Nov. 2011',
	plot:
		'Pierce gets a visit from his bigoted father after his wipes become a hit in the gay community, and the dean of the School of Refrigeration recruits Troy to become his student.',
	imDbRating: '7.7',
	imDbRatingCount: '1746'
});

const episode7 = new Episode({
	id: 'tt2083482',
	seasonNumber: '3',
	episodeNumber: '7',
	title: 'Studies in Modern Movement',
	image:
		'https://imdb-api.com/Images/original/MV5BMjA1NTA5NDU1MV5BMl5BanBnXkFtZTcwMTc5NTMwNw@@._V1_Ratio1.7778_AL_.jpg',
	year: '2011',
	released: '10 Nov. 2011',
	plot:
		'The study group helps Annie move in with Troy and Abed - except for Jeff, who lies to get out of it but is busted by dean Pelton.',
	imDbRating: '8.6',
	imDbRatingCount: '1908'
});

const episode8 = new Episode({
	id: 'tt2083483',
	seasonNumber: '3',
	episodeNumber: '8',
	title: 'Documentary Filmmaking: Redux',
	image:
		'https://imdb-api.com/Images/original/MV5BMjE2OTYxODAxNV5BMl5BanBnXkFtZTcwODQ5NTMwNw@@._V1_Ratio1.7778_AL_.jpg',
	year: '2011',
	released: '17 Nov. 2011',
	plot:
		'Dean Pelton is given the task to make an updated Greendale television commercial, but the shoot soon goes over budget and spirals out of control, descending the dean into madness--with Abed documenting the entire experience.',
	imDbRating: '9.0',
	imDbRatingCount: '2267'
});

const episode9 = new Episode({
	id: 'tt2080563',
	seasonNumber: '3',
	episodeNumber: '9',
	title: 'Foosball and Nocturnal Vigilantism',
	image:
		'https://imdb-api.com/Images/original/MV5BNDExOTgwNDE0OF5BMl5BanBnXkFtZTgwMDU4Mjg3MjE@._V1_Ratio1.7778_AL_.jpg',
	year: '2011',
	released: '1 Dec. 2011',
	plot:
		"Shirley teaches Jeff foosball so that he can beat a team of cocky, obnoxious Germans, while Annie creates an overly elaborate ruse so that she doesn't have to tell Abed that she broke his special edition The Dark Knight DVD.",
	imDbRating: '8.5',
	imDbRatingCount: '1878'
});

const episode10 = new Episode({
	id: 'tt2105238',
	seasonNumber: '3',
	episodeNumber: '10',
	title: 'Regional Holiday Music',
	image:
		'https://imdb-api.com/Images/original/MV5BMTkzOTQ0NTI1NV5BMl5BanBnXkFtZTcwNjg0MzExNw@@._V1_Ratio1.7778_AL_.jpg',
	year: '2011',
	released: '8 Dec. 2011',
	plot:
		'A holiday-themed parody of "Glee" in which Abed tries to persuade each member of the Study Group to join the glee club so that they can qualify for regionals.',
	imDbRating: '8.7',
	imDbRatingCount: '2225'
});

const episode11 = new Episode({
	id: 'tt2117096',
	seasonNumber: '3',
	episodeNumber: '11',
	title: 'Urban Matrimony and the Sandwich Arts',
	image:
		'https://imdb-api.com/Images/original/MV5BMTQ3Mzc5NDI0OF5BMl5BanBnXkFtZTcwMDIwMzA1Nw@@._V1_Ratio1.7778_AL_.jpg',
	year: '2012',
	released: '15 Mar. 2012',
	plot:
		'Pierce comes to Shirley with a business proposal just as she\'s about to get married to Andre. Meanwhile, Troy and Abed try to act "normal" for the wedding, Britta discovers a new skill, and Jeff struggles with his toast.',
	imDbRating: '7.8',
	imDbRatingCount: '1759'
});

const episode12 = new Episode({
	id: 'tt2090774',
	seasonNumber: '3',
	episodeNumber: '12',
	title: 'Contemporary Impressionists',
	image:
		'https://imdb-api.com/Images/original/MV5BNTkwNDgzMDI3M15BMl5BanBnXkFtZTcwNTMxNzc1Nw@@._V1_Ratio1.7778_AL_.jpg',
	year: '2012',
	released: '22 Mar. 2012',
	plot:
		"The members of the Study Group take jobs as celebrity impersonators to pay off Abed's debt to a celebrity impersonator business, but can Jeff be Ryan Seacrest without his fragile ego spiral out of control?",
	imDbRating: '8.1',
	imDbRatingCount: '1773'
});

const episode13 = new Episode({
	id: 'tt2128972',
	seasonNumber: '3',
	episodeNumber: '13',
	title: 'Digital Exploration of Interior Design',
	image:
		'https://imdb-api.com/Images/original/MV5BMTc0MDA4OTM2N15BMl5BanBnXkFtZTcwMTkzNzA2Nw@@._V1_Ratio1.7778_AL_.jpg',
	year: '2012',
	released: '29 Mar. 2012',
	plot:
		'Shirley and Pierce recruit Britta to sabotage the new Subway restaurant in the cafeteria. Jeff finds a hate-letter in the school locker he never realized he had. Troy and Abed begin constructing a pillow fort, but thanks to some outside manipulation Troy splits off to build his own blanket fort.',
	imDbRating: '8.2',
	imDbRatingCount: '1752'
});

const episode14 = new Episode({
	id: 'tt2127579',
	seasonNumber: '3',
	episodeNumber: '14',
	title: 'Pillows and Blankets',
	image:
		'https://imdb-api.com/Images/original/MV5BMzMyODE1MTczMF5BMl5BanBnXkFtZTgwOTk0MDg3MjE@._V1_Ratio1.7778_AL_.jpg',
	year: '2012',
	released: '5 Apr. 2012',
	plot:
		'The United Forts of Pillowtown, headed by Abed, is at war with the Legit Republic of Blanketsburg, ruled by Troy. Annie sets up a hospital zone to treat casualties on both sides. Britta takes a stab at war-photography. Jeff tries to reunite two former friends turned mortal enemies using sarcasm.',
	imDbRating: '9.3',
	imDbRatingCount: '2990'
});

const episode15 = new Episode({
	id: 'tt2194835',
	seasonNumber: '3',
	episodeNumber: '15',
	title: 'Origins of Vampire Mythology',
	image:
		'https://imdb-api.com/Images/original/MV5BOTgwMjg2NDE1MV5BMl5BanBnXkFtZTcwNzExMzY2Nw@@._V1_Ratio1.7778_AL_.jpg',
	year: '2012',
	released: '12 Apr. 2012',
	plot:
		"While Britta struggles to stay away from her old carny boyfriend, Jeff becomes obsessed with their relationship. Meanwhile, the dean stops by Troy and Abed's to recruit Troy for the dean of the school of refrigeration.",
	imDbRating: '8.2',
	imDbRatingCount: '1753'
});

const episode16 = new Episode({
	id: 'tt2194837',
	seasonNumber: '3',
	episodeNumber: '16',
	title: 'Virtual Systems Analysis',
	image:
		'https://imdb-api.com/Images/original/MV5BMTczODcxMzYxMF5BMl5BanBnXkFtZTcwMzAxMjk2Nw@@._V1_Ratio1.7778_AL_.jpg',
	year: '2012',
	released: '19 Apr. 2012',
	plot:
		"The study group takes a three hour lunch. Annie suggests Abed shows her how the Dreamatorium works so Troy and Britta can be together. But their 'Inspector Spacetime' simulation soon turns into a hospital bound drama in which Abed takes on the personalities of the other group members.",
	imDbRating: '8.7',
	imDbRatingCount: '1984'
});

const episode17 = new Episode({
	id: 'tt2194839',
	seasonNumber: '3',
	episodeNumber: '17',
	title: 'Basic Lupine Urology',
	image:
		'https://imdb-api.com/Images/original/MV5BMTUzODIxNDk4OV5BMl5BanBnXkFtZTcwODIyMjI3Nw@@._V1_Ratio1.7778_AL_.jpg',
	year: '2012',
	released: '26 Apr. 2012',
	plot:
		'Presented like an episode of Law & Order (1990), the study group attempts to find out who squashed their biology project: a yam. Troy and Abed become detectives, Shirley is their boss, Jeff and Annie pose as prosecuting attorneys, while Pierce is an informant and Britta a lab tech.',
	imDbRating: '9.4',
	imDbRatingCount: '2872'
});

const episode18 = new Episode({
	id: 'tt2192103',
	seasonNumber: '3',
	episodeNumber: '18',
	title: 'Course Listing Unavailable',
	image:
		'https://imdb-api.com/Images/original/MV5BODM5MTIzNDE4NV5BMl5BanBnXkFtZTcwNDQyMjI3Nw@@._V1_Ratio1.7778_AL_.jpg',
	year: '2012',
	released: '3 May 2012',
	plot:
		'A fellow student has died and Biology class has been canceled, meaning everyone has to retake it in summer school. When the memorial service turns into a riot, Chang is granted special authoritative powers.',
	imDbRating: '8.3',
	imDbRatingCount: '1671'
});

const episode19 = new Episode({
	id: 'tt2196353',
	seasonNumber: '3',
	episodeNumber: '19',
	title: 'Curriculum Unavailable',
	image:
		'https://imdb-api.com/Images/original/MV5BOWI0M2Y0YTctNzc3YS00YTQ4LTkzY2MtMDZlYTA4MmVhYTZjXkEyXkFqcGdeQXVyNDQ2NTIyMQ@@._V1_Ratio1.7778_AL_.jpg',
	year: '2012',
	released: '10 May 2012',
	plot:
		'When Abed claims the Dean has been replaced by a doppelgänger he is forced to take psychiatric treatment. Naturally, the rest of the study group joins him at his session with Dr. Heidi.',
	imDbRating: '9.2',
	imDbRatingCount: '2220'
});

const episode20 = new Episode({
	id: 'tt2383315',
	seasonNumber: '3',
	episodeNumber: '20',
	title: 'Digital Estate Planning',
	image:
		'https://imdb-api.com/Images/original/MV5BMjI0MDEwNjA4M15BMl5BanBnXkFtZTcwNDQwNDg3Nw@@._V1_Ratio1.7778_AL_.jpg',
	year: '2012',
	released: '17 May 2012',
	plot:
		'The Study Group must help Hawthorne win a video game so that he can claim his inheritance, but somebody may be out to ensure that he loses.',
	imDbRating: '9.5',
	imDbRatingCount: '3129'
});

const episode21 = new Episode({
	id: 'tt2279599',
	seasonNumber: '3',
	episodeNumber: '21',
	title: 'The First Chang Dynasty',
	image:
		'https://imdb-api.com/Images/original/MV5BMTYyODc2NjU4MV5BMl5BanBnXkFtZTcwOTIwNDg3Nw@@._V1_Ratio1.7778_AL_.jpg',
	year: '2012',
	released: '17 May 2012',
	plot:
		'The Study Group, now known as the "Greendale Seven," launches a plot to rescue the real dean Pelton and end Chang\'s reign of terror over Greendale.',
	imDbRating: '9.1',
	imDbRatingCount: '2074'
});

const episode22 = new Episode({
	id: 'tt2383317',
	seasonNumber: '3',
	episodeNumber: '22',
	title: 'Introduction to Finality',
	image:
		'https://imdb-api.com/Images/original/MV5BMzEyNTk5OTk0MF5BMl5BanBnXkFtZTcwODMwNDg3Nw@@._V1_Ratio1.7778_AL_.jpg',
	year: '2012',
	released: '17 May 2012',
	plot:
		'Jeff faces an old nemesis as Shirley and Pierce square off in Greendale court, Abed succumbs to his evil alter ego, and Troy decides to meet his destiny at air conditioning school.',
	imDbRating: '8.9',
	imDbRatingCount: '1901'
});

episodes.push(
	episode1,
	episode2,
	episode3,
	episode4,
	episode5,
	episode6,
	episode7,
	episode8,
	episode9,
	episode10,
	episode11,
	episode12,
	episode13,
	episode14,
	episode15,
	episode16,
	episode17,
	episode18,
	episode19,
	episode20,
	episode21,
	episode22
);

module.exports = episodes;
