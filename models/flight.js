var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SEA']
  },
  arrival: Date
}, {
  timestamps: true
});

var flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
    required: true
  },
  flightNo: {
    type: Number, 
    min: 10,
    max: 9999,
    required: true
  },
  departs: {
    type: Date, 
    default: function () {
      var redate = new Date();
      redate.setFullYear(redate.getFullYear()+1)
      return redate
    }
  },
  airport: {
    type: String, 
    enum: ['AUS', 'DAL', 'LAX', 'SEA'],
    default: 'SEA'
  },
  destinations: [destinationSchema],
  ticket: [{type: Schema.Types.ObjectId, ref: 'Ticket'}]
});

module.exports = mongoose.model('Flight', flightSchema);