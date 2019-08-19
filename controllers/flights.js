var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
  index,
  new: newFlight,
  create,
  show
}

function show(req, res) {
  Flight.findById(req.params.id, (err, flight) => {
    Ticket.find({flight: flight._id}, (err, tickets) => {
      res.render('flights/show', 
      {
        title: 'Flight Details', 
        flight, 
        tickets
      });
    });
  });
}

function create(req, res) {
  var flight = new Flight(req.body);
  flight.save(function(err){
    if (err) return res.render('flights/new');
    res.redirect('/flights');
  });
}

function newFlight(req, res) {
  res.render('flights/new', {title: 'Add Flight'});
}

function index(req, res) {
  Flight.find({}, (err, flights) => {
    res.render('flights/index', {title: 'All Flights', flights});
  }).sort('departs');
}