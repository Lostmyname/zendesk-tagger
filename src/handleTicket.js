'use strict';

const zendesk = require('node-zendesk');
const config = require('./config');
const client = zendesk.createClient(config.zendesk);

module.exports = function handleTicket(ticketId, cb) {
	client.tickets.show(ticketId, function (err, req, res) {
		if (err) {
			cb(err);
			return;
		}

		const facebookPage = res.via.source.from.facebook_id.value; // jshint ignore: line
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
