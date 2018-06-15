var mongoose = require('mongoose');
require('./films');
const Film = mongoose.model('Film');
var config = require('./etc/config.json');

var config2 = _interopRequireDefault(config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setUpConnection = setUpConnection;
function setUpConnection() {
    mongoose.connect("mongodb://" + config.db.host + ":" + config.db.port + "/" + config.db.name);
}

exports.listFilms = listFilms;
function listFilms() {
    return Film.find();
}
exports.addFilm = addFilm;
function addFilm(data) {
    var film = new Film({
        name: data.name,
        year: data.year,
        format: data.format,
        actors: data.actors
    });

    return film.save();
}
exports.deleteFilm = deleteFilm;
function deleteFilm(id) {
    return Film.findById(id).remove();
}

