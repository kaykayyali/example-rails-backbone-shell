// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


// To add a new npm library, install it using NPM install __LIBRARY__ --save (Add to package.json for parity)
// Now add it under
window.Async = require('async');
window.Backbone = require('backbone');
window.Fast_Bindall = require('fast_bindall');
window._ = require('underscore');
var Bookings_App = require('./app/apps/bookings/bookings_app');

// GLOBAL LIBRARIES AND VARS SHOULD GO HERE
// This is included first and available before the app is created
window.Client_Data = {};
window.Global_View_Cache = {};
window.Apps = {
	bookings: new Bookings_App()
}
