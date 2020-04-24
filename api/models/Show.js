const { model, Schema } = require('mongoose');

const showSchema = new Schema({
	id: { type: String },
	resultType: { type: String },
	image: { type: String },
	title: { type: String },
	description: { type: String }
});

const Show = model('Show', showSchema);

module.exports = { Show, showSchema };
