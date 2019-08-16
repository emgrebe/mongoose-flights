var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create
};

function newTicket(req, res) {
  Flight.findById(req.params.id, (err, flight) => {
    res.render('tickets/new', {title: 'Add Ticket'});
  });
}

function create(req, res) {
  req.body.tickett = req.params.id
  Ticket.create(req.body, (err, ticket) => {
    console.log(ticket);
    res.redirect(`/ticketss/${req.params.id}`);
  });
}
