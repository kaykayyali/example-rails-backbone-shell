// This is an app definition, define the name and root view

var Bookings_Main_View = require('./bookings.js');

var Bookings_App = function() {
	this.name = "Bookings"; // Required
	this.root_view = Bookings_Main_View; // Required
}
module.exports = Bookings_App;