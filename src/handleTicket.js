'use strict';

const zendesk = require('node-zendesk');
const config = require('./config');
const client = zendesk.createClient(config.zendesk);

module.exports = function handleTicket(ticketId, cb) {
	client.tickets.getComments(ticketId, function (err, req, res) {
		if (err) {
			cb(err);
			return;
		}

		const facebookPage = res[0].comments[0].metadata.decoration.source.zendesk_id; // jshint ignore: line
		const tag = config.tags[facebookPage];

		if (!tag) {
			cb();
			return;
		}

		client.tickets.update(ticketId, {
			ticket: {
				tags: ['facebook', tag]
			}
		}, cb);
	});
};
