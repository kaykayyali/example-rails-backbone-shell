// This is an app definition, define the name and root view

var Inventory_Main_View = require('./inventory.js');

var Inventory_App = function() {
	this.name = "Inventory"; // Required
	this.root_view = Inventory_Main_View; // Required
}
module.exports = Inventory_App;