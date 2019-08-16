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
    Ticket.find({ticket: flight._id}, (err, tickets) => {
      res.render('flights/show', {title: 'Flight Deatils', flight, tickets});
    });
  });
}

function create(req, res) {
  for(let key in req.body) {
    if(req.body[key] === '') delete req.body[key];
  }
    var flight = new Flight(req.body);
    flight.save(function(err){
      if (err) return res.render('flights/new');
      for(let key in req.body) {
        if(req.body[key] === '') delete req.body[key];
      }
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