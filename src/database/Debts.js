var mongoose = require('mongoose') 
require('mongoose-double')(mongoose);
var Int32 = require('mongoose-int32');
var Double = mongoose.Schema.Types.Double;

var Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);

var debtSchema = new Schema({
    json_placeholder_user_id: Int32,
    name: String,
    reason: String,
    value: Double,
    date: Date
}, {collection:'debt'});

var Debts = mongoose.model('Debts', debtSchema);

module.exports = Debts;

// TO DO: set/configure the value to be a float/double type...