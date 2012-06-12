/**
 * Module dependencies.
 */

var express = require('express');
//var stylus = require('stylus');
//var nib = require('nib');
var sio = require('socket.io');

var players = [];
var nextId = 0;
var tempSEVlines='---------------- ';

/**
 * App.
 */

var app = express.createServer();

/**
 * App configuration.
 */

app.configure(function() {
	//app.use(stylus.middleware({ src: __dirname + '/js', compile: compile }));
	app.use('/css', express.static(__dirname + '/css'));
	app.use('/data', express.static(__dirname + '/data'));
	app.use('/image', express.static(__dirname + '/image'));
	app.use('/js', express.static(__dirname + '/js'));
	app.use('/lib', express.static(__dirname + '/lib'));
	app.set('views', __dirname);
	app.set('view engine', 'jade');

	/*
	 function compile (str, path) {
	 return stylus(str)
	 .set('filename', path)
	 .use(nib());
	 };
	 */
});

/**
 * App routes.
 */

app.get('/', function(req, res) {
	res.render('index', {
		layout : false
	});
});

/**
 * App listen.
 */

var port = process.env.PORT || 3000;
app.listen(port, function() {
	var addr = app.address();
	console.log('-----app listening on http://' + addr.address + ':' + addr.port);
});

/**
 * Socket.IO server (single process only)
 */

var io = sio.listen(app);

// Set our transports
io.configure(function() {
	io.set("transports", ["xhr-polling"]);
	io.set("polling duration", 20);
});

/*
// Game server part

io.sockets.on('connection', function(socket) {
	var player
	console.log(tempSEVlines+'SEV - Connected - Status 0');
	
	socket.on('logon', function(pos) {

		// Create the player
		player = {
			id : nextId++,
			x : pos.x,
			y : pos.y
		};
		
		// Send existing players to client
		socket.emit('players', players);
		
		// Send the new player to other clients
		socket.broadcast.emit('connected', player)
		console.log(tempSEVlines+'SEV - Conected Player - Status0');

		// Add client to list of players
		players.push(player);

	})

	socket.on('move', function(data) {
		//console.log(tempSEVlines+'SEV - MOVE - Status 0');
		if (player) {
			player.x = data.x;
			player.y = data.y;

			// Broadcast position change to all other clients
			socket.broadcast.emit('moved', player)
		}
	});

	socket.on('disconnect', function() {
		players.splice(players.indexOf(player), 1);
		io.sockets.emit('disconnected', player);
	});
});
*/

// Chat
/*
 io.sockets.on('connection', function (socket) {

 socket.on('disconnect', function () {
 console.log('Disconected');
 });
 });
 */