const { model, Schema } = require('mongoose');

const showSchema = new Schema({
	id: { type: String },
	resultType: { type: String },
	image: { type: String },
	title: { type: String },
	description: { type: String },
	seasons: { type: Array, default: [] },
	lastUpdated: { type: Number, required: true, default: new Date().getTime() },
	fullTitle: { type: String }
});

const Show = model('Show', showSchema);

module.exports = { Show, showSchema };
