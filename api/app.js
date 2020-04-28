const fs = require('fs');

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const index = require('./routes/index');
const todos = require('./routes/todos');
const shows = require('./routes/shows');

const { PORT, DB_URI } = require('./utils/constants');

const app = express();

// app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));

// Here are all the target routes
app.use('/healthcheck', index.router);
app.use('/todos', todos);
app.use('/shows', shows);

app.use((error, req, res, next) => {
	if (req.file) {
		fs.unlink(req.file.path, (err) => {
			console.log(err);
		});
	}
	if (res.headerSent) {
		return next(error);
	}
	res.status(error.code || 500);
	res.json({ message: error.message || 'An unknown error occurred!' });
});

app.listen(PORT, async () => {
	await mongoose.connect(DB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
	console.log(`App listening on port ${PORT}`);
});

module.exports = app;
