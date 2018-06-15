var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _DataBaseUtils = require('./db');

var db = _interopRequireWildcard(_DataBaseUtils);

var config = require('./etc/config');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initialization of express application
var app = (0, _express2.default)();

// Set up connection of database
db.setUpConnection();

// Using bodyParser middleware
app.use(_bodyParser2.default.json());

// RESTful api handlers
app.get('/test', function (req, res) {
    db.listFilms().then(function (data) {
        return res.send(data);
    });
});

app.post('/test', function (req, res) {
    db.addFilm(req.body).then(function (data) {
        return res.send(data);
    });
});

app.delete('/test/:id', function (req, res) {
    db.deleteFilm(req.params.id).then(function (data) {
        return res.send(data);
    });
});

var server = app.listen(config.serverPort, function () {
    console.log('Server is up and running on port ' + config.serverPort);
});