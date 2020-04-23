const { Schema, model } = require('mongoose')

const seasonSchema = new Schema({
  seasonNumber: { type: Number, required: true },
  episodes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Episode'
    }
  ]
})

const Season = model('Season', seasonSchema)

module.exports = { Season, seasonSchema }
