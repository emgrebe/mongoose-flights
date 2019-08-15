var Flight = require('../models/flight');

module.exports = {
  create
};

function create(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    console.log(flight);
    console.log(req.body);
    flight.destinations.push(req.body);
    console.log(flight);
    flight.save(function(err) {
      res.redirect(`/flights${flight.id}`);
    });
  });
}