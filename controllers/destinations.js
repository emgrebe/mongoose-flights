var Flight = require('../models/flight');

module.exports = {
  create
};

function create(req, res) {
  Flight.findById(req.params.id, (err, flight) => {
    flight.destinations.push(req.body);
    flight.save(function(err) {
    for(let key in req.body) {
      if(req.body[key] === '') delete req.body[key];
    }
      res.redirect(`/flights/${flight._id}`);
    });
  });
}