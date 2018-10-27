const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	body: String,
	thumbnail: String,
	image: String
	// date: {
	// 	type: Date,
	// 	default: Date.now
	// },
	// author: {
	// 	type: String,
	// 	default: 'Admin'
	// }
});

const Post = mongoose.model('Post', postSchema, 'posts'); // The third parameter is name of collection on mongodb database

module.exports = Post;