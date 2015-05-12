'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const handleTicket = require('./handleTicket');

const app = express();
const config = require('./config');
const parser = bodyParser.urlencoded({ extended: false });

app.post('/', parser, function (req, res) {
	if (req.body.secret !== config.api.secret) {
		res.status(401).end();
		return;
	}

	const id = req.body.id;

	if (!id) {
		res.status(400).end();
		return;
	}

	handleTicket(id, function (err) {
		if (err) {
			console.error(err);
			res.status(500).end();
			return;
		}

		res.end(':)');
	});
});

app.listen(config.api.port, function (err) {
	if (err) {
		throw err;
	}

	console.log('Server started');
});
