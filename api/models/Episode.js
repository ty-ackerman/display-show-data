const { model, Schema } = require('mongoose')

const episodeSchema = new Schema({
  id: { type: String },
  seasonNumber: { type: String },
  episodeNumber: { type: String },
  title: { type: String },
  image: { type: String },
  year: { type: String },
  released: { type: String },
  plot: { type: String },
  imDbRating: { type: String },
  imDbRatingCount: { type: String }
})

const Episode = model('Episode', episodeSchema)

module.exports = { Episode, episodeSchema }
