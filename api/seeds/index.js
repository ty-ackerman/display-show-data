const mongoose = require('mongoose')

//db-name should match that in constants.js
const { DB_URI } = require('../utils/constants')

// Import all models
const { Todo } = require('../models/Todo')
const { Show } = require('../models/Show')
const { Episode } = require('../models/Episode')
const { Season } = require('../models/Season')

// Import created seeds
const todos = require('./todos')
const shows = require('./shows')
const episodes = require('./episodes')
const seasons = require('./seasons')

// Delete existing seeds
const truncateDatabaseTodo = async () => Promise.all([Todo.deleteMany()])
const truncateDatabaseShow = async () => Promise.all([Show.deleteMany()])
const truncateDatabaseEpisode = async () => Promise.all([Episode.deleteMany()])
const truncateDatabaseSeason = async () => Promise.all([Season.deleteMany()])

// Make seeds
const makeSeeds = async () => {
  // Connect to db
  await mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  // Clear dbs
  await truncateDatabaseTodo()
  await truncateDatabaseShow()
  await truncateDatabaseEpisode()
  await truncateDatabaseSeason()

  // Iterate through array of seeds and save
  await Promise.all(todos.map(todo => todo.save()))
  await Promise.all(shows.map(show => show.save()))
  await Promise.all(episodes.map(episode => episode.save()))
  await Promise.all(seasons.map(season => season.save()))

  // This is commented out, but if the seed isn't an array, save like this:
  // await todos.save();

  // Disconnect from db
  mongoose.connection.close()
}

makeSeeds()
