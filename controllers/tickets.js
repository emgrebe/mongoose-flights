var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create
};

function create(req, res) {
  req.body.ticket = req.params.id
  Ticket.create(req.body, (err, ticket) => {
    console.log(ticket);
    res.redirect(`/tickets/${req.params.id}`);
  });
}

function newTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('tickets/new', {title: 'Add Ticket'});
  });
}