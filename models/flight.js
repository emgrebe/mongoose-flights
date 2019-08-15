var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SEA']
  },
  arrival: Date
});

var flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
    required: true
  },
  fligthNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true
  },
  departs: {
    type: Date,
    default: function() {
      let date = new Date();
      date.setFullYear(date.getFullYear() + 1)
      return date.toLocaleDateString();
    }
  },
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SEA'],
    default: 'SEA'
  },
  destinations: [destinationSchema],
});

module.exports = mongoose.model('Flight', flightSchema);