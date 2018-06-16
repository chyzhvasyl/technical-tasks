var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    name      : { type: String , required: true},
    year     : { type: Number },
    format : { type: String },
    actors : { type: [String] },
});

const Film = mongoose.model('Note', FilmSchema);